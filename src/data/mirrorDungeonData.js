export const FLOORS = [
  { floor: 1,  packCount: 13 },
  { floor: 2,  packCount: 20 },
  { floor: 3,  packCount: 37 },
  { floor: 4,  packCount: 37 },
  { floor: 5,  packCount: 57 },
  { floor: 6,  packCount: 42 },
  { floor: 7,  packCount: 42 },
  { floor: 8,  packCount: 42 },
  { floor: 9,  packCount: 57 },
  { floor: 10, packCount: 42 },
  { floor: 11, packCount: 57 },
  { floor: 12, packCount: 57 },
  { floor: 13, packCount: 42 },
  { floor: 14, packCount: 57 },
  { floor: 15, packCount: 57 },
];

export const TIER_COLORS = {
  I:   '#9e9e9e',
  II:  '#4caf89',
  III: '#5b9bd5',
  IV:  '#c8860a',
  V:   '#e44336',
};

export const UNIVERSAL_GIFTS = [
  // ─── 상태이상 계열 ───
  {
    category: '화상',
    rows: [
      {
        items: [
          { name: '먼지에서 먼지로',   tier: 'III', extra: '(+2)' },
          { name: '재',     tier: 'I',   extra: '(+2)' },
          { name: '원반',   tier: 'III' },
          { name: '불씨',   tier: 'IV',  note: '5종/3호선' },
          { name: '펀린',   tier: 'IV',  extra: '(+2)' },
        ],
        effects: [
          { text: '스택보조', span: 2 },
          { text: '적공렙감' },
          { text: '1회부활' },
          { text: '1턴후\n적방렙감' },
        ],
      },
    ],
  },
  {
    category: '출혈',
    rows: [
      {
        items: [
          { name: '피목화', tier: 'IV', extra: '(+2)' },
          { name: '찬송',   tier: 'I',  extra: '(+2)' },
          { name: '인형',   tier: 'II' },
          { name: '임마개', tier: 'I',  extra: '(+2)' },
          { name: '쇠말뚝', tier: 'I' },
        ],
        effects: [
          { text: '스택보조\n적공방렙감' },
          { text: '공렙증' },
          { text: '주피증\n받피감' },
          { text: '스택보조' },
          { text: '적방렙감' },
        ],
      },
    ],
  },
  {
    category: '진동',
    rows: [
      {
        items: [
          { name: '폭우',   tier: 'IV', extra: '(+2)' },
          { name: '눈알',   tier: 'III' },
          { name: '종',     tier: 'III', extra: '(+2)' },
          { name: '잔향',   tier: 'II',  extra: '(+2)' },
          { name: '고혈',   tier: 'II' },
          { name: '닉시',   tier: 'I',   extra: '(+2)' },
          { name: '팔찌',   tier: 'II',  extra: '(+2)' },
          { name: '시계침', tier: 'I' },
        ],
        effects: [
          { text: '스택보조\n진폭' },
          { text: '적공방렙감' },
          { text: '취약부여' },
          { text: '속박마비\n적방렙감' },
          { text: '호트중뎀' },
          { text: '스택보조', span: 2 },
          { text: '부가효과' },
        ],
      },
    ],
  },
  {
    category: '침잠',
    rows: [
      {
        items: [
          { name: '미적감각', tier: 'IV', extra: '(+2)' },
          { name: '악몽',     tier: 'III' },
          { name: '나침반',   tier: 'III', extra: '(+2)' },
          { name: '태엽',     tier: 'II' },
          { name: '유골',     tier: 'II' },
          { name: '초상화',   tier: 'I',  extra: '(+2)' },
          { name: '칸타빌레', tier: 'I' },
          { name: '오르골',   tier: 'III', note: '1층\n저택부산물' },
          { name: '외투',     tier: 'II' },
        ],
        effects: [
          { text: '대폭뎀증' },
          { text: '스택보조', span: 2 },
          { text: '적공방렙감' },
          { text: '주피증\n받피감' },
          { text: '스택보조' },
          { text: '정신력' },
          { text: '1번호트\n1회즉시해제' },
          { text: '받기어려운\n공렙증' },
        ],
      },
    ],
  },
  {
    category: '충전',
    rows: [
      {
        items: [
          { name: '장갑',   tier: 'IV',  extra: '(+2)' },
          { name: '피뢰침', tier: 'III', extra: '(+2)' },
          { name: '투시경', tier: 'II' },
          { name: '무정전', tier: 'I',   extra: '(+2)' },
          { name: '손목',   tier: 'I',   extra: '(+2)' },
          { name: '스캣',   tier: 'II' },
          { name: '보호장', tier: 'III', extra: '(+2)' },
          { name: '손전등', tier: 'II',  extra: '(+2)' },
          { name: '이력서', tier: 'I',   extra: '(+2)' },
        ],
        effects: [
          { text: '스택보조' },
          { text: '공렙증', span: 2 },
          { text: '피해량증가', span: 2 },
          { text: '스택보조' },
          { text: '보호막', span: 2 },
          { text: '조건부\n공위증' },
        ],
      },
    ],
  },
  {
    category: '호흡',
    rows: [
      {
        items: [
          { name: '네불',   tier: 'II',  extra: '(+2)' },
          { name: '명경',   tier: 'IV',  extra: '(+2)' },
          { name: '물부리', tier: 'II' },
          { name: '네잎',   tier: 'III' },
          { name: '편자',   tier: 'I',   extra: '(+2)' },
          { name: '미련',   tier: 'III' },
          { name: '데블스', tier: 'I',   extra: '(+2)' },
        ],
        effects: [
          { text: '스택보조' },
          { text: '피뎀증\n공렙증' },
          { text: '위력증가' },
          { text: '스택보조', span: 2 },
          { text: '1,2번피증\n합위증' },
          { text: '1인피증\n공렙증' },
        ],
      },
    ],
  },
  {
    category: '파열',
    rows: [
      {
        items: [
          { name: '부적',   tier: 'I',   extra: '(+2)' },
          { name: '근통배', tier: 'III' },
          { name: '쾌감',   tier: 'IV',  extra: '(+2)' },
          { name: '리볼버', tier: 'I' },
          { name: '램프',   tier: 'II',  extra: '(+2)' },
          { name: '면류관', tier: 'I',   extra: '(+2)' },
          { name: '벼말뚝', tier: 'I' },
        ],
        effects: [
          { text: '스택보조' },
          { text: '스택보조\n1턴후추뎀' },
          { text: '적공방렙감' },
          { text: '1인피증' },
          { text: '스택보조', span: 2 },
          { text: '부가효과' },
        ],
      },
    ],
  },

  // ─── 범용 계열 ───
  {
    category: '필수',
    rows: [
      {
        items: [
          { name: '인연조각', tier: 'IV', extra: '(+2)' },
          { name: '달의기어', tier: 'V' },
          { name: '믿음',     tier: 'IV' },
          { name: '광배',     tier: 'IV', extra: '(+2)', note: '5종/1호선' },
          { name: '굴레',     tier: 'IV', extra: '(+2)', note: '4종/2호선' },
          { name: '날실바',   tier: 'III', note: '2종/웰스치킨' },
          { name: '나방때',   tier: 'II' },
          { name: '탱고',     tier: 'III', note: '2종/웰스치킨' },
          { name: '여우비',   tier: 'III' },
        ],
        effects: [
          { text: '레벨\n10증가' },
          { text: '데미지\n대폭증폭' },
          { text: '정신력\n보정' },
          { text: '점진적\n뎀증' },
          { text: '체력증폭' },
          { text: '강력한\n추뎀' },
          { text: '' },
          { text: '합위력\n증가' },
          { text: '스킬\n위력증가' },
        ],
      },
      {
        items: [
          { name: '특별계약', tier: 'III' },
          { name: '카르밀라', tier: 'II',  extra: '(+2)' },
          { name: '환상사냥', tier: 'III' },
          { name: '가젯',     tier: 'I',   extra: '(+2)' },
          { name: '녹기주',   tier: 'III' },
          { name: '타투',     tier: 'II' },
          { name: '잿빛코트', tier: 'II' },
          { name: '환상통',   tier: 'III' },
          { name: '인형',     tier: 'I',   extra: '(+2)' },
        ],
        effects: [
          { text: '보스체력\n비례추뎀' },
          { text: '잡몹체력\n비례추뎀' },
          { text: '피해량\n증가' },
          { text: '단일코인\n한번 더\n스킬사용' },
          { text: '단일코인\n오만인격\n강화' },
          { text: '광역기\n피해량\n증가' },
          { text: '단일기피증\n우울완전\n공명강화', span: 2 },
          { text: '적\n위력감소' },
        ],
      },
    ],
  },
  {
    category: '코스트',
    rows: [
      {
        items: [
          { name: '카드',   tier: 'III' },
          { name: '굿즈',   tier: 'III' },
          { name: '항아리', tier: 'II' },
          { name: '망치',   tier: 'II' },
          { name: '이정표', tier: 'II' },
        ],
        effects: [
          { text: '에깁구매\n비용감소' },
          { text: '에깁강화\n비용감소' },
          { text: '얻는 코스트 증가', span: 3 },
        ],
      },
    ],
  },
  {
    category: '에고\n자원',
    rows: [
      {
        items: [
          { name: '확대',   tier: 'III' },
          { name: '종이학', tier: 'II' },
          { name: '오라클', tier: 'II' },
          { name: '플라스크', tier: 'II' },
          { name: '도착증', tier: 'I' },
          { name: '라이터', tier: 'I' },
          { name: '디스크', tier: 'III' },
        ],
        effects: [
          { text: '적사망시\n자원수급\n오만특화' },
          { text: '자원\n수급 보정' },
          { text: '모든자원\n수급' },
          { text: '추가자원\n획득' },
          { text: '우울확정\n랜덤\n자원수급' },
          { text: 'EGO\n사용시\n자원획득' },
          { text: '' },
        ],
      },
    ],
  },
  {
    category: '회복',
    rows: [
      {
        items: [
          { name: '구급상자', tier: 'III' },
          { name: '진통제',   tier: 'II' },
          { name: '혈액팩',   tier: 'I' },
          { name: '귀로',     tier: 'II' },
          { name: '편견',     tier: 'I' },
          { name: '석판',     tier: 'I' },
        ],
        effects: [
          { text: '50%이하\n25%회복' },
          { text: '호트보호\n12.5%힐' },
          { text: '적때리면\n12.5%힐' },
          { text: '입장 시\n12%힐' },
          { text: '첫턴시\n1인15%' },
          { text: '적호트시\n5%회복' },
        ],
      },
    ],
  },
  {
    category: '있으면\n좋음',
    rows: [
      {
        items: [
          { name: '수사관뱃지', tier: 'II',  extra: '(+2)', note: '4.5종/시살시' },
          { name: '연료통',     tier: 'III', note: '5종/십야청소' },
          { name: '비급서',     tier: 'III', note: '3종/어느세계' },
          { name: '뱀허물',     tier: 'II',  extra: '(+2)', note: '5종/1호선' },
          { name: '메트로놈',   tier: 'II',  extra: '(+2)', note: '4종/2호선' },
          { name: '경멸',       tier: 'II',  extra: '(+2)', note: '5종/3호선' },
          { name: '술잔',       tier: 'III', note: '3~5종\n육찰공단' },
          { name: '조각상',     tier: 'IV' },
          { name: '서약서',     tier: 'IV' },
        ],
        effects: [
          { text: '1~3번\n순서인격부활' },
          { text: '확률부활' },
          { text: '공렙증\n방렙증' },
          { text: '방렙증\n공렙증' },
          { text: '공렙증\n방렙증' },
          { text: '1.6번\n피증' },
          { text: '파볼코\n피증' },
          { text: '속도증가' },
          { text: '무작위\n1명피증' },
        ],
      },
    ],
  },
];
