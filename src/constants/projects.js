const PROJECTS = [
  {
    id: 1,
    name: "가치더치(TogeDutch)'",
    description: '부담스러운 배달 최소 금액 + 배달 팁 공유 서비스',
    theme: ['ANDROID', 'SPRING'],
    github: 'https://github.com/UMC-TogeDutch-Project',
    year: 3,
    member: ['하비/이승주'],
    stack: ['Kotlin', 'Spring'],
    img: '/3year/가치더치/가치더치.png',
    release: 'https://www.makeus.in/8dc44d59-645d-4203-bdb4-9398bb0031df'
  },
  {
    id: 2,
    name: 'Waither',
    description: '분 단위로 날씨 알려주는 나만의 비서, Waither',
    theme: ['IOS', 'SPRING'],
    github: 'https://github.com/Waither-Project/Waither-FE',
    year: 3,
    member: [
      '니니/김유빈',
      '다우니/최다경',
      '동키/김동현',
      '세헌/호세헌',
      '포트/조현준',
      '해누/김현우'
    ],
    stack: ['Swift', 'Spring'],
    img: '/3year/다마고치/다마고치.png',
    release: 'https://www.makeus.in/e046ab3f-95f2-4210-913b-fae4a4251e53'
  },
  {
    id: 3,
    name: '그로밋',
    description: '깃허브 커밋으로 키우는 나만의 다마고치',
    theme: ['IOS', 'SPRING'],
    github: null,
    year: 3,
    member: ['조예빈/예콩', '솔솔/이한솔'],
    stack: ['Swift', 'Spring'],
    img: '/3year/Waither/Waither.png',
    release: 'https://www.makeus.in/cfe1c32d-89df-43b1-a136-843c3943dbb0'
  },
  {
    id: 4,
    name: '동네친구',
    description: '함께 살아가는 자취생활의 힘',
    theme: ['ANDROID', 'SPRING'],
    github: null,
    year: 4,
    member: ['링키/윤수빈', '동키/김동현'],
    stack: ['KOTLIN', 'SPRING'],
    img: '/4year/동네친구/동네친구.png',
    release: 'https://www.makeus.in/924a9232-80d1-4354-b6e9-b0763b81eb10'
  },
  {
    id: 5,
    name: 'POSESTION',
    description: '뚝딱이들을 위한 사진 포즈 가이드',
    theme: ['ANDROID', 'NODE'],
    github: null,
    year: 4,
    member: ['코코/최진규'],
    stack: ['KOTLIN', 'NODE'],
    img: '/4year/Posestion/Posestion.png',
    release: 'https://www.makeus.in/e41624c5-9fd1-4b8d-be1a-ea1b1105298c'
  },
  {
    id: 6,
    name: 'Pinple',
    description:
      '핫플, 얼마나 많이 붐빌까? 가보기 전에 Pinple로 미리 확인하자!',
    theme: ['ANDROID', 'NODE'],
    github: null,
    year: 4,
    member: ['와제/정여진', '예닝/문예윤'],
    stack: ['KOTLIN', 'NODE'],
    img: '/4year/pinple/Pinple.png',
    release: 'https://www.makeus.in/a9caff6e-8ce7-4a1f-8dad-4f29e3e046fb'
  },
  {
    id: 7,
    name: 'ARMANAGE',
    description: '알바 시간과 급여, 서류 등 이제 한번에 관리, ARMANAGE',
    theme: ['ANDROID', 'SPRING'],
    github: null,
    year: 4,
    member: ['검정/권혁찬', '이네/설인혜', '윤/권오윤', '제이미/김준환'],
    stack: ['KOTLIN', 'SPRING'],
    img: '/4year/ARMANAGE/ARMANAGE.png',
    release: null
  },
  {
    id: 9,
    name: '퀸텟:Quintet',
    description: '행복을 위한 5가지 요소 관리앱',
    theme: ['IOS', 'NODE'],
    github: null,
    year: 4,
    member: ['주니/김영준', '폴/김필규', '딩동/이동현'],
    stack: ['SWIFT', 'NODE'],
    img: '/4year/퀸텟/퀸텟.png',
    release: 'https://www.makeus.in/4d141c41-5f49-4dc6-8b49-b0c7144ca79a'
  },
  {
    id: 10,
    name: '바른이',
    description: '모든 치아교정 정보를 한 눈에',
    theme: ['IOS', 'SPRING'],
    github: null,
    year: 4,
    member: ['니니/김유빈', '위즈덤/정슬기', '피딕/황인성'],
    stack: ['SWIFT', 'SPRING'],
    img: '/4year/바른이/바른이.png',
    release: 'https://www.makeus.in/4d141c41-5f49-4dc6-8b49-b0c7144ca79a'
  },
  {
    id: 11,
    name: '뮤넥팅(Mu:necting)',
    description: '음악으로 연결하다',
    theme: ['IOS', 'SPRING'],
    github: null,
    year: 4,
    member: [
      '깐/김가은',
      '지토/이현호',
      '스히/백서희',
      '사샤/김채연',
      '한뉴/한유성'
    ],
    stack: ['SWIFT', 'SPRING'],
    img: '/4year/뮤넥팅/뮤넥팅.png',
    release: 'https://www.makeus.in/62b0399d-8986-4097-ab84-0e79f5472d68'
  },
  {
    id: 12,
    name: '홈푸파(홈푸드파이터)',
    description: '가진 것만으로 요리하기',
    theme: ['WEB', 'NODE'],
    github: 'https://github.com/HomeFoodFighter',
    year: 4,
    member: [
      '매튜/김용민',
      '아마다/조재석',
      '우비/박원우',
      '민팍/박민희',
      '쫑/김종한',
      '하나빈/이원빈',
      '뻔뻔/김건'
    ],
    stack: ['REACT', 'NODE'],
    img: '/4year/홈푸파/홈푸파.png',
    release: 'https://www.makeus.in/839dd620-1b83-40f5-aa7c-8cc6e4c09e66'
  },
  {
    id: 13,
    name: 'Festie',
    description: '나와 취향이 맞는 친구도 사귀고, 페스티벌도 보러가고!',
    theme: ['WEB', 'SPRING'],
    github: null,
    year: 4,
    member: ['덕구/이다슬', '포디/정서현', '케빈/김근식'],
    stack: ['REACT', 'SPRING'],
    img: '/4year/festie/festie.png',
    release: 'https://www.makeus.in/b840fac8-6171-430a-9328-f3735352c976'
  },
  {
    id: 14,
    name: 'Healody',
    description: '힐로디로 추적하는 나와 우리 가족의 건강',
    theme: ['WEB', 'SPRING'],
    github: null,
    year: 4,
    member: [
      '디아/전지민',
      '데이빗/김태영',
      '제이/김영재',
      '지구/안지수',
      '린니/이혜린',
      '제이스/임재영',
      '사하/윤근수'
    ],
    stack: ['REACT', 'SPRING'],
    img: '/4year/healody/healody.png',
    release: 'https://www.makeus.in/3b82ef8f-8398-465f-9dc6-31f383742005'
  }
];

export { PROJECTS };
