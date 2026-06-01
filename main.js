// ============================================================
// main.js - UI操作・フィルター処理・共通ユーティリティ
// ============================================================

// ----------------------------------------------------------
// ユーティリティ：スコアから★HTMLを生成（最大5点）
// ----------------------------------------------------------
function renderStars(score) {
  const max = 5;
  const full = Math.floor(score);        // 塗りつぶし★の数
  const half = score % 1 >= 0.5 ? 1 : 0; // 半★があるか
  const empty = max - full - half;        // 空★の数

  let html = '<span class="stars">';
  for (let i = 0; i < full; i++)  html += '<span class="star full">★</span>';
  if (half)                        html += '<span class="star half">★</span>';
  for (let i = 0; i < empty; i++) html += '<span class="star empty">☆</span>';
  html += `</span><span class="score-num">${score.toFixed(1)}</span>`;
  return html;
}

// ----------------------------------------------------------
// ユーティリティ：カンマ区切り金額
// ----------------------------------------------------------
function formatYen(amount) {
  return amount ? `¥${amount.toLocaleString()}` : "要問合せ";
}

// ----------------------------------------------------------
// ユーティリティ：タグHTMLを生成
// ----------------------------------------------------------
function renderTags(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join("");
}

// ----------------------------------------------------------
// ユーティリティ：URLパラメータ取得
// ----------------------------------------------------------
function getParam(key) {
  return new URLSearchParams(location.search).get(key);
}

// ============================================================
// index.html 用：おすすめ媒体カード描画
// ============================================================
function initIndexPage() {
  const container = document.getElementById("featured-cards");
  if (!container) return;

  // featuredMediaの3件を表示
  const featured = featuredMedia;

  container.innerHTML = featured.map(m => `
    <a class="card" href="detail.html?id=${m.id}">
      <img class="card-logo" src="${m.logo}" alt="${m.name}のロゴ">
      <div class="card-body">
        <span class="category-badge">${m.category}</span>
        <h3 class="card-title">${m.name}</h3>
        <p class="card-catch">${m.description}</p>
        <div class="card-meta">
          <span class="badge-recruiting">口コミ募集中</span>
        </div>
        <div class="card-tags">${renderTags(m.tags)}</div>
      </div>
    </a>
  `).join("");
}

// ============================================================
// reviews.html 用：口コミ一覧（スプレッドシートから全件）+ フィルター
// ============================================================
async function initReviewsPage() {
  const container = document.getElementById("all-reviews");
  const filterBtns = document.querySelectorAll(".review-filter .filter-btn");
  if (!container) return;

  container.innerHTML = '<p class="no-result">読み込み中...</p>';
  const allReviews = await fetchReviews();

  let currentFilter = "すべて";

  function renderReviews(filtered) {
    if (filtered.length === 0) {
      container.innerHTML = '<p class="no-result">まだ口コミがありません。最初の投稿者になりませんか？</p>';
      return;
    }
    container.innerHTML = filtered.map(createReviewCard).join('');
  }

  function applyFilter() {
    const filtered = currentFilter === "すべて"
      ? allReviews
      : allReviews.filter(r => r.size === currentFilter || r.industry === currentFilter);
    renderReviews(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilter();
    });
  });

  applyFilter();
}

// ============================================================
// detail.html 用：媒体詳細・関連口コミ描画
// ============================================================
async function initDetailPage() {
  // idは文字列（"offerbox"等）なのでそのまま使う
  const id = getParam("id");
  const media = mediaList.find(m => m.id === id);

  if (!media) {
    document.getElementById("detail-content").innerHTML = "<p>媒体が見つかりませんでした。</p>";
    return;
  }

  // --- 関連口コミ取得（件数表示に使うため先にfetch）---
  const reviewContainer = document.getElementById("related-reviews");
  reviewContainer.innerHTML = '<p class="no-result">読み込み中...</p>';

  const allReviews = await fetchReviews();
  const related = allReviews.filter(r => r.media === media.name);
  const reviewCount = related.length;

  const scoredReviews = related.filter(r => r.score !== null);
  const avgScore = scoredReviews.length > 0
    ? (scoredReviews.reduce((sum, r) => sum + r.score, 0) / scoredReviews.length).toFixed(1)
    : null;

  // --- 媒体詳細 ---
  document.getElementById("detail-content").innerHTML = `
    <div class="detail-header">
      <img class="detail-logo" src="${media.logo}" alt="${media.name}のロゴ">
      <div>
        <span class="category-badge">${media.category}</span>
        <h1 class="detail-name">${media.name}</h1>
        <div class="detail-stars">
          ${avgScore !== null ? renderStars(parseFloat(avgScore)) : '<span class="no-score">まだ評価がありません</span>'}
          <span class="review-count">口コミ ${reviewCount}件</span>
        </div>
      </div>
    </div>

    <p class="detail-desc">${media.description}</p>

    <table class="spec-table">
      <tbody>
        <tr><th>カテゴリ</th><td>${media.category}</td></tr>
        <tr><th>評価スコア</th><td>${avgScore !== null ? `${avgScore} / 5.0` : 'まだ評価がありません'}</td></tr>
        <tr><th>口コミ件数</th><td>${reviewCount}件</td></tr>
        <tr><th>特徴タグ</th><td>${renderTags(media.tags)}</td></tr>
      </tbody>
    </table>
  `;

  if (related.length === 0) {
    reviewContainer.innerHTML = '<p class="no-result">この媒体の口コミはまだありません。最初の投稿者になりませんか？</p>';
    return;
  }

  reviewContainer.innerHTML = related.map(createReviewCard).join("");
}

// ============================================================
// 媒体名ごとの口コミ件数マップを返すヘルパー
// ============================================================
async function fetchReviewCounts() {
  const reviews = await fetchReviews();
  const counts = {};
  reviews.forEach(r => {
    if (r.media) counts[r.media] = (counts[r.media] || 0) + 1;
  });
  return counts;
}

// ============================================================
// 媒体一覧ページ（reviews.html 上部のカード一覧）用
// ============================================================
async function initMediaListPage() {
  const container = document.getElementById("media-cards");
  const filterBtns = document.querySelectorAll(".category-filter .filter-btn");
  if (!container) return;

  const reviewCounts = await fetchReviewCounts();
  let currentCategory = "すべて";

  function renderMedia(list) {
    if (list.length === 0) {
      container.innerHTML = '<p class="no-result">該当する媒体がありません。</p>';
      return;
    }
    container.innerHTML = list.map(m => {
      const count = reviewCounts[m.name] || 0;
      return `
      <a class="card" href="detail.html?id=${m.id}">
        <img class="card-logo" src="${m.logo}" alt="${m.name}のロゴ">
        <div class="card-body">
          <span class="category-badge">${m.category}</span>
          <h3 class="card-title">${m.name}</h3>
          <p class="card-catch">${m.description}</p>
          <div class="card-meta">
            ${m.score !== null ? renderStars(m.score) : '<span class="no-score">まだ評価がありません</span>'}
            <span class="review-count">口コミ ${count}件</span>
          </div>
          <div class="card-tags">${renderTags(m.tags)}</div>
        </div>
      </a>
    `}).join("");
  }

  function applyFilter() {
    const filtered = currentCategory === "すべて"
      ? mediaList
      : mediaList.filter(m => m.category === currentCategory);
    renderMedia(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      applyFilter();
    });
  });

  applyFilter();
}

// ============================================================
// スプレッドシート連携：CSVを取得してパース
// ============================================================
function getMediaName(cols) {
  const category = cols[4];
  if (category === 'ナビサイト') return cols[5];
  if (category === 'ダイレクトリクルーティング') return cols[6];
  if (category === '採用イベント') return cols[7];
  if (category === 'SNS運用') return cols[8];
  if (category === '人材紹介') return cols[9];
  return cols[10];
}


const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQxvR9qQ-ude6UXt-ByOYVhaJIodIrl2Vlm3dKtjRXlVuna3RjjjFCZ4i9gCIZImzSdwxkb3sXAEnmd/pub?gid=662028457&single=true&output=csv';

async function fetchReviews() {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();
    const rows = csvText.split('\n').slice(1); // ヘッダー行を除く

    return rows
      .filter(row => row.trim() !== '')
      .map(row => {
        const cols = parseCSVRow(row);

        return {
          timestamp:   cols[0],
          company:     cols[1] || null,
          industry:    cols[2],
          size:        cols[3],
          category:    cols[4],
          media:       getMediaName(cols),
          hired:       cols[11],
          budget:      cols[12],
          score:       parseScore(cols[13]),
          text:        cols[14],
          disclosure:  cols[15],
        };
      });
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
    return [];
  }
}

// CSV行をパース（カンマ・ダブルクォート対応）
function parseCSVRow(row) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    if (row[i] === '"') {
      inQuotes = !inQuotes;
    } else if (row[i] === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += row[i];
    }
  }
  result.push(current.trim());
  return result;
}

// 評価テキストを数値に変換（例：「★★★★☆（4：良い）」→ 4）
function parseScore(scoreText) {
  if (!scoreText) return null;
  const match = scoreText.match(/[（(](\d)[：:]/);
  if (match) return parseInt(match[1]);
  const starMatch = scoreText.match(/★+/);
  if (starMatch) return starMatch[0].length;
  return null;
}

// 口コミカードHTMLを生成
function createReviewCard(review) {
  const stars = review.score
    ? '★'.repeat(review.score) + '☆'.repeat(5 - review.score)
    : null;

  const companyDisplay = review.company
    ? review.company
    : `${review.industry} / ${review.size}`;

  return `
    <div class="review-card">
      <div class="review-top">
        <div class="media-name">${review.media || review.category}</div>
        ${stars
          ? `<span class="stars">${stars}</span><span class="score">${review.score}.0</span>`
          : '<span class="no-score" style="font-size:12px;color:#999;">評価なし</span>'
        }
      </div>
      <div class="tag-row">
        <span class="tag">${review.industry}</span>
        <span class="tag">${review.size}</span>
        ${review.hired ? `<span class="tag">${review.hired}採用目標</span>` : ''}
        ${review.budget ? `<span class="tag">${review.budget}</span>` : ''}
      </div>
      <div class="review-text">${review.text || ''}</div>
      <div class="review-company" style="font-size:12px;color:#999;margin-top:8px;">${companyDisplay}</div>
    </div>
  `;
}

// ============================================================
// index.html 用：新着口コミ（スプレッドシートから最新3件）
// ============================================================
async function initRecentReviews() {
  const container = document.getElementById("latest-reviews");
  if (!container) return;

  const reviews = await fetchReviews();

  // 統計カード（口コミ件数）を更新
  const countEl = document.querySelector('.stat-num');
  if (countEl) countEl.textContent = reviews.length;

  if (reviews.length === 0) {
    container.innerHTML = '<p class="no-result">現在口コミを募集しています。<br>ぜひあなたの採用施策の経験を投稿してください。</p>';
    return;
  }

  const latest = reviews.slice(-3).reverse(); // 新着3件
  container.innerHTML = latest.map(createReviewCard).join('');
}

// ============================================================
// ヒーロー検索（index.html）
// ============================================================
function doSearch() {
  const query = document.getElementById("hero-search-input")?.value.trim();
  if (query) {
    location.href = `reviews.html?q=${encodeURIComponent(query)}`;
  } else {
    location.href = "reviews.html";
  }
}

// Enterキーでも検索
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("hero-search-input");
  if (input) {
    input.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(); });
  }
});

// ============================================================
// ページ判別して初期化
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname;

  if (path.includes("index") || path.endsWith("/") || path.endsWith("media-compare")) {
    initIndexPage();
    initRecentReviews();
  }
  if (path.includes("reviews")) {
    initMediaListPage();
    initReviewsPage();
  }
  if (path.includes("detail")) {
    initDetailPage();
  }
});
