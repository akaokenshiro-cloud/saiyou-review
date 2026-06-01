// ============================================================
// data.js - 媒体データ定義
// ============================================================

// ----------------------------------------------------------
// SVGロゴ ※mediaListより先に定義
// ----------------------------------------------------------

// ナビサイト
const logoMynavi          = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23E60012'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>マイナビ</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>新卒</text></svg>`;
const logoRikunabi        = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%230061AF'/><text x='50%25' y='44' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>リクナビ</text></svg>`;
const logoCaritas         = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%2300897B'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>キャリタス</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' fill='white' text-anchor='middle'>就活</text></svg>`;
const logoShukatsukaigi   = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%231565C0'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>就活</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='11' fill='white' text-anchor='middle'>会議</text></svg>`;
const logoOneCareer       = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%231a237e'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>ONE</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>CAREER</text></svg>`;

// ダイレクトリクルーティング
const logoOfferBox        = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%230055C8'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='13' font-weight='bold' fill='white' text-anchor='middle'>Offer</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='13' font-weight='bold' fill='%23FFD84D' text-anchor='middle'>Box</text></svg>`;
const logoDodaCampus      = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23FF6600'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='13' font-weight='bold' fill='white' text-anchor='middle'>doda</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>campus</text></svg>`;
const logoKimisuka        = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23E53935'/><text x='50%25' y='44' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>キミスカ</text></svg>`;
const logoWantedly        = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%2300A4C4'/><text x='50%25' y='44' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>Wantedly</text></svg>`;
const logoMatcherScout    = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%2343A047'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>Matcher</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' fill='white' text-anchor='middle'>Scout</text></svg>`;
const logoAbaba           = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%237B1FA2'/><text x='50%25' y='46' font-family='Arial,sans-serif' font-size='16' font-weight='bold' fill='white' text-anchor='middle'>ABABA</text></svg>`;
const logoBizreachCampus  = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23212121'/><text x='50%25' y='36' font-family='Arial,sans-serif' font-size='9' font-weight='bold' fill='white' text-anchor='middle'>ビズリーチ</text><text x='50%25' y='52' font-family='Arial,sans-serif' font-size='9' fill='white' text-anchor='middle'>キャンパス</text></svg>`;
const logoReCampus        = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23F57C00'/><text x='50%25' y='36' font-family='Arial,sans-serif' font-size='13' font-weight='bold' fill='white' text-anchor='middle'>Re</text><text x='50%25' y='52' font-family='Arial,sans-serif' font-size='8' fill='white' text-anchor='middle'>就活キャンパス</text></svg>`;
const logoLabBase         = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%230D47A1'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'>Lab</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='12' font-weight='bold' fill='%2390CAF9' text-anchor='middle'>Base</text></svg>`;
const logoTechOffer       = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%231B5E20'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>TECH</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='%23A5D6A7' text-anchor='middle'>OFFER</text></svg>`;
const logoCareerTicket    = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23E53935'/><text x='50%25' y='34' font-family='Arial,sans-serif' font-size='8' font-weight='bold' fill='white' text-anchor='middle'>キャリア</text><text x='50%25' y='47' font-family='Arial,sans-serif' font-size='8' fill='white' text-anchor='middle'>チケット</text><text x='50%25' y='60' font-family='Arial,sans-serif' font-size='7' fill='%23FFCDD2' text-anchor='middle'>スカウト</text></svg>`;
const logoCheerCareer     = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23FF8F00'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>Cheer</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>Career</text></svg>`;
const logoIroots          = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%2300897B'/><text x='50%25' y='44' font-family='Arial,sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle'>iroots</text></svg>`;

// 採用イベント
const logoMeetsCompany    = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%231976D2'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>Meets</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' fill='white' text-anchor='middle'>Company</text></svg>`;
const logoJobtora         = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23388E3C'/><text x='50%25' y='44' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>ジョブトラ</text></svg>`;
const logoMynaviExpo      = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23E60012'/><text x='50%25' y='36' font-family='Arial,sans-serif' font-size='9' font-weight='bold' fill='white' text-anchor='middle'>マイナビ</text><text x='50%25' y='50' font-family='Arial,sans-serif' font-size='9' fill='white' text-anchor='middle'>就職EXPO</text></svg>`;
const logoRikunabiEvent   = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%230061AF'/><text x='50%25' y='36' font-family='Arial,sans-serif' font-size='9' font-weight='bold' fill='white' text-anchor='middle'>リクナビ</text><text x='50%25' y='50' font-family='Arial,sans-serif' font-size='9' fill='white' text-anchor='middle'>就職イベント</text></svg>`;
const logoCaritasForum    = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%2300897B'/><text x='50%25' y='36' font-family='Arial,sans-serif' font-size='9' font-weight='bold' fill='white' text-anchor='middle'>キャリタス</text><text x='50%25' y='50' font-family='Arial,sans-serif' font-size='9' fill='white' text-anchor='middle'>フォーラム</text></svg>`;
const logoOtherEvent      = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23757575'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>合同</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' fill='white' text-anchor='middle'>説明会</text></svg>`;

// SNS運用
const logoTwitter         = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23000000'/><text x='50%25' y='40' font-family='Arial,sans-serif' font-size='26' font-weight='bold' fill='white' text-anchor='middle'>X</text><text x='50%25' y='57' font-family='Arial,sans-serif' font-size='9' fill='%23aaaaaa' text-anchor='middle'>Twitter</text></svg>`;
const logoInstagram       = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23C13584'/><text x='50%25' y='44' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>Instagram</text></svg>`;
const logoTikTok          = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23010101'/><text x='50%25' y='46' font-family='Arial,sans-serif' font-size='13' font-weight='bold' fill='white' text-anchor='middle'>TikTok</text></svg>`;
const logoLinkedin        = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%230A66C2'/><text x='50%25' y='46' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>LinkedIn</text></svg>`;

// 人材紹介
const logoRikunabiAgent   = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%230061AF'/><text x='50%25' y='36' font-family='Arial,sans-serif' font-size='9' font-weight='bold' fill='white' text-anchor='middle'>リクナビ</text><text x='50%25' y='52' font-family='Arial,sans-serif' font-size='9' fill='white' text-anchor='middle'>就職エージェント</text></svg>`;
const logoMynaviAgent     = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23E60012'/><text x='50%25' y='36' font-family='Arial,sans-serif' font-size='9' font-weight='bold' fill='white' text-anchor='middle'>マイナビ</text><text x='50%25' y='52' font-family='Arial,sans-serif' font-size='9' fill='white' text-anchor='middle'>新卒紹介</text></svg>`;
const logoDodaAgent       = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23FF6600'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='13' font-weight='bold' fill='white' text-anchor='middle'>doda</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='10' fill='white' text-anchor='middle'>Agent</text></svg>`;
const logoCaritasAgent    = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%2300897B'/><text x='50%25' y='36' font-family='Arial,sans-serif' font-size='9' font-weight='bold' fill='white' text-anchor='middle'>キャリタス</text><text x='50%25' y='52' font-family='Arial,sans-serif' font-size='9' fill='white' text-anchor='middle'>エージェント</text></svg>`;
const logoNeoAgent        = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%2343A047'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='11' font-weight='bold' fill='white' text-anchor='middle'>Agent</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='11' fill='white' text-anchor='middle'>neo</text></svg>`;
const logoOtherAgent      = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='80' height='80' rx='12' fill='%23757575'/><text x='50%25' y='38' font-family='Arial,sans-serif' font-size='10' font-weight='bold' fill='white' text-anchor='middle'>その他</text><text x='50%25' y='54' font-family='Arial,sans-serif' font-size='9' fill='white' text-anchor='middle'>エージェント</text></svg>`;

// ----------------------------------------------------------
// 媒体一覧データ（reviews.html の媒体カード用）
// ----------------------------------------------------------
const mediaList = [

  // ① ナビサイト
  {
    id: "mynavi",
    name: "マイナビ新卒",
    category: "ナビサイト",
    logo: logoMynavi,
    score: null,
    reviewCount: 0,
    description: "国内最大規模の新卒採用ナビサイト。知名度は高いが中小企業は大手に埋もれやすい傾向がある。",
    tags: ["新卒向け", "知名度高", "大手向き"],
  },
  {
    id: "rikunabi",
    name: "リクナビ",
    category: "ナビサイト",
    logo: logoRikunabi,
    score: null,
    reviewCount: 0,
    description: "マイナビと並ぶ2大新卒ナビサイト。幅広い学生にリーチできるが費用が高め。",
    tags: ["新卒向け", "知名度高", "大手向き"],
  },
  {
    id: "caritas",
    name: "キャリタス就活",
    category: "ナビサイト",
    logo: logoCaritas,
    score: null,
    reviewCount: 0,
    description: "大学生協が母体のナビサイト。文系・理系問わず幅広い学生が利用している。",
    tags: ["新卒向け", "大学生協"],
  },
  {
    id: "shukatsukaigi",
    name: "就活会議",
    category: "ナビサイト",
    logo: logoShukatsukaigi,
    score: null,
    reviewCount: 0,
    description: "企業の口コミ・選考情報が充実したナビサイト。学生の情報収集目的での利用が多い。",
    tags: ["新卒向け", "口コミ充実"],
  },
  {
    id: "one-career",
    name: "ONE CAREER",
    category: "ナビサイト",
    logo: logoOneCareer,
    score: null,
    reviewCount: 0,
    description: "選考体験記・口コミが豊富なナビサイト。上位校学生の利用が多い傾向がある。",
    tags: ["新卒向け", "上位校向き", "選考情報充実"],
  },

  // ② ダイレクトリクルーティング
  {
    id: "offerbox",
    name: "OfferBox",
    category: "ダイレクトリクルーティング",
    logo: logoOfferBox,
    score: null,
    reviewCount: 0,
    description: "逆求人型の新卒採用サービス。中小・ベンチャーとの相性が良く承諾率が高い。",
    tags: ["新卒向け", "逆求人", "中小向け"],
  },
  {
    id: "doda-campus",
    name: "dodaキャンパス",
    category: "ダイレクトリクルーティング",
    logo: logoDodaCampus,
    score: null,
    reviewCount: 0,
    description: "ベネッセが運営する新卒向けダイレクトリクルーティング。スカウト返信率が高く費用対効果に優れる。",
    tags: ["新卒向け", "返信率高", "コスパ良"],
  },
  {
    id: "kimisuka",
    name: "キミスカ",
    category: "ダイレクトリクルーティング",
    logo: logoKimisuka,
    score: null,
    reviewCount: 0,
    description: "就活生3人に1人が利用する逆求人型サービス。スカウト開封率が高く母集団形成に強い。",
    tags: ["新卒向け", "逆求人", "開封率高"],
  },
  {
    id: "wantedly",
    name: "Wantedly",
    category: "ダイレクトリクルーティング",
    logo: logoWantedly,
    score: null,
    reviewCount: 0,
    description: "スタートアップとの親和性が高い採用プラットフォーム。カルチャーフィット重視の採用に向いている。",
    tags: ["新卒向け", "スタートアップ", "カルチャー重視"],
  },
  {
    id: "matcher-scout",
    name: "Matcher Scout",
    category: "ダイレクトリクルーティング",
    logo: logoMatcherScout,
    score: null,
    reviewCount: 0,
    description: "OB・OG訪問サービスMatcherのデータベースを活用。主体性の高い学生へのアプローチが可能。",
    tags: ["新卒向け", "成果報酬型", "主体性高"],
  },
  {
    id: "ababa",
    name: "ABABA",
    category: "ダイレクトリクルーティング",
    logo: logoAbaba,
    score: null,
    reviewCount: 0,
    description: "他社の最終選考まで進んだ優秀な学生にスカウトできるサービス。内定承諾率が高い。",
    tags: ["新卒向け", "優秀層", "最終選考経験者"],
  },
  {
    id: "re-campus",
    name: "Re就活キャンパス",
    category: "ダイレクトリクルーティング",
    logo: logoReCampus,
    score: null,
    reviewCount: 0,
    description: "旧あさがくナビ。60万人が登録する総合型ダイレクトリクルーティング。中小企業志望者が80%で地方採用にも強い。",
    tags: ["新卒向け", "総合型", "中小向け", "地方採用"],
  },
  {
    id: "labbase",
    name: "LabBase就職",
    category: "ダイレクトリクルーティング",
    logo: logoLabBase,
    score: null,
    reviewCount: 0,
    description: "理系学生に特化した国内最大級のダイレクトリクルーティング。スカウト返信率40%・開封率90%と高い実績を誇る。",
    tags: ["新卒向け", "理系特化", "高開封率"],
  },
  {
    id: "tech-offer",
    name: "TECH OFFER",
    category: "ダイレクトリクルーティング",
    logo: logoTechOffer,
    score: null,
    reviewCount: 0,
    description: "理系・技術系学生に特化したダイレクトリクルーティング。プログラミングスキルのある学生が47%を占める。",
    tags: ["新卒向け", "理系特化", "エンジニア向け"],
  },
  {
    id: "career-ticket-scout",
    name: "キャリアチケット就活スカウト",
    category: "ダイレクトリクルーティング",
    logo: logoCareerTicket,
    score: null,
    reviewCount: 0,
    description: "ベンチャー・中小企業向けのスカウトサービス。学生の価値観と企業文化のマッチングに強い。",
    tags: ["新卒向け", "ベンチャー向け", "価値観マッチング"],
  },
  {
    id: "cheer-career",
    name: "CheerCareer（チアキャリア）",
    category: "ダイレクトリクルーティング",
    logo: logoCheerCareer,
    score: null,
    reviewCount: 0,
    description: "ベンチャー・成長企業に特化したダイレクトリクルーティング。成長やりがいを重視する意欲的な学生が多い。",
    tags: ["新卒向け", "ベンチャー特化", "成長志向"],
  },
  {
    id: "bizreach-campus",
    name: "ビズリーチ・キャンパス",
    category: "ダイレクトリクルーティング",
    logo: logoBizreachCampus,
    score: null,
    reviewCount: 0,
    description: "OB・OG訪問マッチングサービス。積極的に情報収集する意欲の高い学生にアプローチできる。",
    tags: ["OB訪問", "意欲高い学生"],
  },
  {
    id: "iroots",
    name: "iroots（アイルーツ）",
    category: "ダイレクトリクルーティング",
    logo: logoIroots,
    score: null,
    reviewCount: 0,
    description: "エン・ジャパンが運営する新卒向けスカウトサービス。企業審査制で利用企業を厳選しており、登録学生の約7割が上位校出身。スカウト開封率約90%と高い反応率が特徴。",
    tags: ["新卒向け", "上位校", "企業審査制", "高開封率"],
  },

  // ③ 採用イベント
  {
    id: "meets-company",
    name: "Meets Company",
    category: "採用イベント",
    logo: logoMeetsCompany,
    score: null,
    reviewCount: 0,
    description: "座談会形式の合同説明会。社長・人事が学生と直接対話でき、中小・ベンチャー向き。",
    tags: ["新卒向け", "合同説明会", "中小向け"],
  },
  {
    id: "jobtora",
    name: "ジョブトラ",
    category: "採用イベント",
    logo: logoJobtora,
    score: null,
    reviewCount: 0,
    description: "全国各地で開催される合同企業説明会。地方での母集団形成にも活用されている。",
    tags: ["新卒向け", "合同説明会", "全国対応"],
  },
  {
    id: "mynavi-expo",
    name: "マイナビ就職EXPO",
    category: "採用イベント",
    logo: logoMynaviExpo,
    score: null,
    reviewCount: 0,
    description: "マイナビが主催する大規模合同説明会。来場者数が多く認知拡大に効果的。",
    tags: ["新卒向け", "大規模", "認知拡大"],
  },
  {
    id: "rikunabi-event",
    name: "リクナビ就職イベント",
    category: "採用イベント",
    logo: logoRikunabiEvent,
    score: null,
    reviewCount: 0,
    description: "リクルートが主催する合同説明会。リクナビ掲載企業との連携で集客力が高い。",
    tags: ["新卒向け", "大規模", "認知拡大"],
  },
  {
    id: "caritas-forum",
    name: "キャリタス就活フォーラム",
    category: "採用イベント",
    logo: logoCaritasForum,
    score: null,
    reviewCount: 0,
    description: "キャリタス就活が主催する合同説明会。大学生協ネットワークを活用した集客が特徴。",
    tags: ["新卒向け", "合同説明会", "大学生協"],
  },
  {
    id: "other-event",
    name: "合同説明会（その他）",
    category: "採用イベント",
    logo: logoOtherEvent,
    score: null,
    reviewCount: 0,
    description: "上記以外の合同説明会・採用イベント全般。地方開催や業界特化型イベントなども含む。",
    tags: ["新卒向け", "合同説明会"],
  },

  // ④ SNS運用
  {
    id: "twitter-recruiting",
    name: "X（Twitter）",
    category: "SNS運用",
    logo: logoTwitter,
    score: null,
    reviewCount: 0,
    description: "X（旧Twitter）を活用した採用広報・ダイレクトスカウト。拡散力が高く認知獲得に効果的。",
    tags: ["SNS", "認知拡大", "採用広報"],
  },
  {
    id: "instagram-recruiting",
    name: "Instagram",
    category: "SNS運用",
    logo: logoInstagram,
    score: null,
    reviewCount: 0,
    description: "Instagramを活用した採用広報。社内の雰囲気・文化を視覚的に伝えるのに適している。",
    tags: ["SNS", "採用広報", "カルチャー訴求"],
  },
  {
    id: "tiktok-recruiting",
    name: "TikTok",
    category: "SNS運用",
    logo: logoTikTok,
    score: null,
    reviewCount: 0,
    description: "TikTokを活用した採用広報。Z世代へのリーチに強く、動画で会社の魅力を伝えられる。",
    tags: ["SNS", "Z世代", "動画"],
  },
  {
    id: "linkedin-recruiting",
    name: "LinkedIn",
    category: "SNS運用",
    logo: logoLinkedin,
    score: null,
    reviewCount: 0,
    description: "ビジネスSNSを活用したダイレクトスカウト。グローバル人材・理系上位校学生へのアプローチに強い。",
    tags: ["SNS", "グローバル", "ダイレクト"],
  },

  // ⑤ 人材紹介
  {
    id: "rikunabi-agent",
    name: "リクナビ就職エージェント",
    category: "人材紹介",
    logo: logoRikunabiAgent,
    score: null,
    reviewCount: 0,
    description: "リクルートグループが運営する新卒エージェント。中小企業の利用実績も豊富。",
    tags: ["新卒向け", "成果報酬型", "大手"],
  },
  {
    id: "mynavi-agent",
    name: "マイナビ新卒紹介",
    category: "人材紹介",
    logo: logoMynaviAgent,
    score: null,
    reviewCount: 0,
    description: "マイナビが運営する新卒エージェント。カウンセリングに定評があり内定辞退率が低い。",
    tags: ["新卒向け", "成果報酬型", "大手"],
  },
  {
    id: "doda-agent",
    name: "doda新卒エージェント",
    category: "人材紹介",
    logo: logoDodaAgent,
    score: null,
    reviewCount: 0,
    description: "ベネッセが運営する新卒エージェント。契約企業7,000社以上の実績を持つ。",
    tags: ["新卒向け", "成果報酬型", "実績豊富"],
  },
  {
    id: "caritas-agent",
    name: "キャリタス就活エージェント",
    category: "人材紹介",
    logo: logoCaritasAgent,
    score: null,
    reviewCount: 0,
    description: "上位校学生へのアプローチに強い新卒エージェント。旧帝大・MARCH層の紹介実績が多い。",
    tags: ["新卒向け", "成果報酬型", "上位校"],
  },
  {
    id: "neo-agent",
    name: "就職エージェントneo",
    category: "人材紹介",
    logo: logoNeoAgent,
    score: null,
    reviewCount: 0,
    description: "登録者数21万人の新卒エージェント。文系・理系問わず幅広い人材を紹介。内定辞退率低下の支援にも積極的。",
    tags: ["新卒向け", "成果報酬型", "登録者数多"],
  },
  {
    id: "other-agent",
    name: "その他新卒エージェント",
    category: "人材紹介",
    logo: logoOtherAgent,
    score: null,
    reviewCount: 0,
    description: "上記以外の新卒人材紹介サービス全般。",
    tags: ["新卒向け", "成果報酬型"],
  },

];

// ----------------------------------------------------------
// 口コミデータ（口コミ募集中のため空）
// ----------------------------------------------------------
const reviewList = [];

// フィルター一覧（会社規模・業種）
const filterOptions = ["すべて", "50名以下", "50〜200名", "200〜500名", "IT・SaaS", "メーカー"];

// 「掲載媒体」セクション用（index.html）
const featuredMedia = [
  {
    id: "offerbox",
    name: "OfferBox",
    category: "ダイレクトリクルーティング",
    logo: logoOfferBox,
    score: null,
    reviewCount: 0,
    description: "逆求人型の新卒採用サービス。中小・ベンチャーとの相性が良く、スカウト経由の承諾率が高い。",
    tags: ["新卒向け", "逆求人", "中小向け"],
  },
  {
    id: "doda-campus",
    name: "dodaキャンパス",
    category: "ダイレクトリクルーティング",
    logo: logoDodaCampus,
    score: null,
    reviewCount: 0,
    description: "ベネッセが運営する新卒向けダイレクトリクルーティング。スカウト返信率が高く費用対効果に優れる。",
    tags: ["新卒向け", "返信率高", "コスパ良"],
  },
  {
    id: "mynavi",
    name: "マイナビ新卒",
    category: "ナビサイト",
    logo: logoMynavi,
    score: null,
    reviewCount: 0,
    description: "国内最大規模の新卒採用ナビサイト。知名度は高いが中小企業は大手に埋もれやすい傾向がある。",
    tags: ["新卒向け", "知名度高", "大手向き"],
  },
];
