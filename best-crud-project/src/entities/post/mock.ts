import type { Post } from "./types/post-type";

export const MOCK_POSTS: Post[] = [
  {
    postId: '1',
    title: 'Next.js 14 App Router 완전 정복하기',
    author: '김개발',
    category: '프론트엔드',
    postDate: '2024-11-14',
    content: 'Next.js 14의 새로운 App Router에 대해 자세히 알아보겠습니다. 글자수 늘리기 위해 추가 내용을 작성합니다. 이번 업데이트에서는 라우팅 시스템이 대폭 개선되어, 개발자들이 더 쉽게 페이지를 구성하고 관리할 수 있게 되었습니다. 또한, 서버 컴포넌트와 클라이언트 컴포넌트 간의 경계가 명확해져, 성능 최적화와 코드 분할이 더욱 용이해졌습니다. 이 글에서는 App Router의 주요 기능과 사용법, 그리고 실제 프로젝트에 적용하는 방법까지 단계별로 설명드리겠습니다. 추가적으로, 다양한 예제 코드와 함께 실습을 통해 이해를 돕고자 합니다. Next.js 14의 App Router를 완벽히 활용하여 효율적인 웹 애플리케이션을 개발해봅시다. 백엔드 와의 통합, SEO 최적화, 그리고 최신 웹 개발 트렌드에 맞춘 다양한 팁도 함께 제공할 예정이니 끝까지 읽어주세요. 최신 기능을 마스터하여 경쟁력 있는 개발자가 되어봅시다.\n앱 라우터는 Next.js 14에서 도입된 혁신적인 기능으로, 개발자들이 페이지와 레이아웃을 더욱 직관적으로 관리할 수 있도록 돕습니다. 이 글에서는 앱 라우터의 구조, 주요 기능, 그리고 실제 프로젝트에 적용하는 방법에 대해 심도 있게 다루겠습니다. 또한, 서버 컴포넌트와 클라이언트 컴포넌트의 차이점과 이를 활용한 성능 최적화 전략도 함께 소개합니다. 예제 코드를 통해 실습하며 이해를 높이고, 최신 웹 개발 트렌드에 맞춘 다양한 팁도 제공할 예정입니다. Next.js 14의 앱 라우터를 완벽히 활용하여 효율적인 웹 애플리케이션을 개발해봅시다. \n앞으로는 Next.js 14의 앱 라우터를 통해 더욱 빠르고 효율적인 웹 개발이 가능해질 것입니다. 이 글을 통해 여러분이 최신 기능을 마스터하고, 경쟁력 있는 개발자로 성장하는 데 도움이 되길 바랍니다. 특히나 이번 업데이트에서는 라우팅 시스템이 대폭 개선되어, 개발자들이 더 쉽게 페이지를 구성하고 관리할 수 있게 되었습니다. 또한, 서버 컴포넌트와 클라이언트 컴포넌트 간의 경계가 명확해져, 성능 최적화와 코드 분할이 더욱 용이해졌습니다. 이 글에서는 App Router의 주요 기능과 사용법, 그리고 실제 프로젝트에 적용하는 방법까지 단계별로 설명드리겠습니다. 추가적으로, 다양한 예제 코드와 함께 실습을 통해 이해를 돕고자 합니다. Next.js 14의 App Router를 완벽히 활용하여 효율적인 웹 애플리케이션을 개발해봅시다. 백엔드 와의 통합, SEO 최적화, 그리고 최신 웹 개발 트렌드에 맞춘 다양한 팁도 함께 제공할 예정이니 끝까지 읽어주세요. 최신 기능을 마스터하여 경쟁력 있는 개발자가 되어봅시다. tanstack query 등과 같은 최신 라이브러리와의 통합 방법도 다룰 예정이니 많은 기대 부탁드립니다.\n개행이 안되는 문제 해결을 위해 글자수를 늘렸습니다. 리액트 18의 새로운 기능들과 함께 Next.js 14의 앱 라우터를 활용하여 더욱 향상된 사용자 경험을 제공하는 방법에 대해서도 심도 있게 다룰 예정입니다. 이 글을 통해 여러분이 최신 기능을 마스터하고, 경쟁력 있는 개발자로 성장하는 데 도움이 되길 바랍니다. 넥스트 제이에스 14의 앱 라우터를 통해 더욱 빠르고 효율적인 웹 개발이 가능해질 것입니다. SSR, SSG, ISR 등 다양한 렌더링 전략과의 조합 방법도 함께 소개할 예정이니 끝까지 읽어주세요.',
    difficulty: 'hard', // 추가
  },
  {
    postId: '2',
    title: 'TypeScript 타입 시스템 이해하기',
    author: '박타입',
    category: '언어',
    postDate: '2024-11-13',
    content: 'TypeScript의 강력한 타입 시스템을 마스터해봅시다.',
    difficulty: 'medium', // 추가
  },
  {
    postId: '3',
    title: 'React Query vs SWR 비교 분석',
    author: '이쿼리',
    category: '프론트엔드',
    postDate: '2024-11-12',
    content: '서버 상태 관리 라이브러리들을 비교 분석해보겠습니다.',
    difficulty: 'medium', // 추가
  },
  {
    postId: '4',
    title: 'Zustand로 상태관리 마스터하기',
    author: '최상태',
    category: '상태관리',
    postDate: '2024-11-11',
    content: 'Zustand를 사용한 효율적인 상태 관리 방법을 알아봅시다.',
    difficulty: 'easy', // 추가
  },
  {
    postId: '5',
    title: 'Tailwind CSS 디자인 시스템 구축',
    author: '김스타일',
    category: 'CSS',
    postDate: '2024-11-10',
    content: 'Tailwind CSS로 확장 가능한 디자인 시스템을 만들어봅시다.',
    difficulty: 'medium', // 추가
  },
  {
    postId: '6',
    title: 'Node.js Express 서버 최적화',
    author: '서버러',
    category: '백엔드',
    postDate: '2024-11-09',
    content: 'Express 서버의 성능을 최적화하는 방법들을 알아봅시다.',
    difficulty: 'hard', // 추가
  },
  {
    postId: '7',
    title: 'PostgreSQL 성능 튜닝 가이드',
    author: 'DB관리자',
    category: '데이터베이스',
    postDate: '2024-11-08',
    content: 'PostgreSQL 데이터베이스 성능을 향상시키는 방법들을 살펴봅시다.',
    difficulty: 'hard', // 추가
  },
  {
    postId: '8',
    title: 'Docker 컨테이너 배포 전략',
    author: '데브옵스',
    category: 'DevOps',
    postDate: '2024-11-07',
    content: 'Docker를 활용한 효율적인 배포 전략을 알아봅시다.',
    difficulty: 'medium', // 추가
  },
  {
    postId: '9',
    title: 'AWS Lambda 서버리스 아키텍처',
    author: '클라우드',
    category: '클라우드',
    postDate: '2024-11-06',
    content: 'AWS Lambda를 활용한 서버리스 아키텍처 설계 방법',
    difficulty: 'hard', // 추가
  },
  {
    postId: '10',
    title: 'GraphQL API 설계 패턴',
    author: '그래프',
    category: 'API',
    postDate: '2024-11-05',
    content: 'GraphQL을 사용한 효율적인 API 설계 패턴들',
    difficulty: 'medium', // 추가
  },
  {
    postId: '11',
    title: 'Redis 캐싱 전략 완벽 가이드',
    author: '캐시마스터',
    category: '데이터베이스',
    postDate: '2024-11-04',
    content: 'Redis를 활용한 다양한 캐싱 전략들을 알아봅시다.',
    difficulty: 'hard', // 추가
  },
  {
    postId: '12',
    title: 'Jest 단위 테스트 베스트 프랙티스',
    author: '테스터',
    category: '테스팅',
    postDate: '2024-11-03',
    content: 'Jest를 사용한 효과적인 단위 테스트 작성법',
    difficulty: 'easy', // 추가
  },
  {
    postId: '13',
    title: 'CI/CD 파이프라인 구축하기',
    author: '배포마스터',
    category: 'DevOps',
    postDate: '2024-11-02',
    content: 'CI/CD 파이프라인을 구축하는 방법에 대해 알아봅시다.',
    difficulty: 'hard', // 추가
  },
  {
    postId: '14',
    title: 'React 19 Suspense와 렌더링 최적화',
    author: '김개발',
    category: '프론트엔드',
    postDate: '2024-11-01',
    content: 'React 19의 새로운 기능과 Suspense를 활용한 렌더링 최적화',
    difficulty: 'hard', // 추가
  },
  {
    postId: '15',
    title: 'WebSockets 실시간 채팅 구현',
    author: '서버러',
    category: '백엔드',
    postDate: '2024-10-31',
    content: 'Node.js와 WebSockets을 이용한 실시간 채팅 서버 만들기',
    difficulty: 'medium', // 추가
  },
  {
    postId: '16',
    title: 'useEffect 완벽 가이드',
    author: '박타입',
    category: '프론트엔드',
    postDate: '2024-10-30',
    content: 'React의 useEffect 훅의 모든 것을 파헤쳐봅니다.',
    difficulty: 'medium', // 추가
  },
  {
    postId: '17',
    title: 'Kubernetes 기초와 배포 실습',
    author: '데브옵스',
    category: 'DevOps',
    postDate: '2024-10-29',
    content: 'Kubernetes의 기본 개념과 실제 배포 실습을 다룹니다.',
    difficulty: 'hard', // 추가
  },
  {
    postId: '18',
    title: 'CSS Grid 레이아웃 마스터',
    author: '김스타일',
    category: 'CSS',
    postDate: '2024-10-28',
    content: 'CSS Grid를 활용한 반응형 웹 레이아웃 설계',
    difficulty: 'easy', // 추가
  },
  {
    postId: '19',
    title: 'gRPC와 Protobuf 소개',
    author: '그래프',
    category: 'API',
    postDate: '2024-10-27',
    content: 'gRPC를 이용한 고성능 마이크로서비스 통신',
    difficulty: 'medium', // 추가
  },
  {
    postId: '20',
    title: 'Python Django 웹 프레임워크',
    author: '장고맨',
    category: '백엔드',
    postDate: '2024-10-26',
    content: 'Django를 활용한 빠르고 안정적인 웹 개발',
    difficulty: 'easy', // 추가
  },
  {
    postId: '21',
    title: 'Rust 언어 입문하기',
    author: '박타입',
    category: '언어',
    postDate: '2024-10-25',
    content: '안전하고 빠른 시스템 프로그래밍 언어, Rust',
    difficulty: 'hard', // 추가
  },
  {
    postId: '22',
    title: 'MySQL 인덱싱 전략',
    author: 'DB관리자',
    category: '데이터베이스',
    postDate: '2024-10-24',
    content: 'MySQL 성능 향상을 위한 올바른 인덱스 설계',
    difficulty: 'medium', // 추가
  },
  {
    postId: '23',
    title: 'Storybook을 활용한 컴포넌트 주도 개발(CDD)',
    author: '김개발',
    category: '프론트엔드',
    postDate: '2024-10-23',
    content: 'Storybook으로 UI 컴포넌트를 효율적으로 개발하고 테스트합니다.',
    difficulty: 'easy', // 추가
  },
  {
    postId: '24',
    title: 'React Native vs Flutter 비교',
    author: '모바일개발',
    category: '모바일',
    postDate: '2024-10-22',
    content: '크로스플랫폼 모바일 앱 개발 프레임워크 비교',
    difficulty: 'medium', // 추가
  },
  {
    postId: '25',
    title: 'GitHub Actions 자동화',
    author: '데브옵스',
    category: 'DevOps',
    postDate: '2024-10-21',
    content: 'GitHub Actions로 CI/CD 파이프라인 자동화하기',
    difficulty: 'medium', // 추가
  },
  {
    postId: '26',
    title: 'Kafka 메시지 큐 시스템',
    author: '서버러',
    category: '백엔드',
    postDate: '2024-10-20',
    content: '대용량 데이터 처리를 위한 Kafka 메시지 큐',
    difficulty: 'hard', // 추가
  },
  {
    postId: '27',
    title: '웹 보안 기초: XSS와 CSRF',
    author: '보안전문가',
    category: '보안',
    postDate: '2024-10-19',
    content: '웹 애플리케이션의 일반적인 보안 취약점 알아보기',
    difficulty: 'easy', // 추가
  },
  {
    postId: '28',
    title: 'TensorFlow와 Keras를 이용한 딥러닝',
    author: '인공지능',
    category: 'AI',
    postDate: '2024-10-18',
    content: 'TensorFlow 2.0과 Keras로 딥러닝 모델 구축하기',
    difficulty: 'hard', // 추가
  },
  {
    postId: '29',
    title: 'OAuth 2.0 인증 구현하기',
    author: '보안전문가',
    category: '보안',
    postDate: '2024-10-17',
    content: 'OAuth 2.0 프로토콜의 이해와 실제 구현 방법',
    difficulty: 'medium', // 추가
  },
  {
    postId: '30',
    title: 'Svelte와 SvelteKit 소개',
    author: '김개발',
    category: '프론트엔드',
    postDate: '2024-10-16',
    content: '새로운 웹 프레임워크 Svelte의 특징과 사용법',
    difficulty: 'easy', // 추가
  },
  {
    postId: '31',
    title: 'MongoDB NoSQL 데이터 모델링',
    author: 'DB관리자',
    category: '데이터베이스',
    postDate: '2024-10-15',
    content: 'MongoDB를 위한 유연하고 확장 가능한 데이터 모델링',
    difficulty: 'medium', // 추가
  },
  {
    postId: '32',
    title: 'Go 언어 동시성 프로그래밍',
    author: '박타입',
    category: '언어',
    postDate: '2024-10-14',
    content: 'Go 언어의 고루틴과 채널을 활용한 동시성 처리',
    difficulty: 'hard', // 추가
  },
  {
    postId: '33',
    title: 'Cypress E2E 테스트 자동화',
    author: '테스터',
    category: '테스팅',
    postDate: '2024-10-13',
    content: 'Cypress를 이용한 End-to-End 테스트 환경 구축',
    difficulty: 'medium', // 추가
  },
  {
    postId: '34',
    title: 'Recoil 상태 관리 라이브러리',
    author: '최상태',
    category: '상태관리',
    postDate: '2024-10-12',
    content: 'React를 위한 또 다른 상태 관리 솔루션, Recoil',
    difficulty: 'easy', // 추가
  },
  {
    postId: '35',
    title: 'AWS S3와 CloudFront로 정적 웹 배포',
    author: '클라우드',
    category: '클라우드',
    postDate: '2024-10-11',
    content: 'S3와 CloudFront를 이용한 빠르고 저렴한 정적 웹사이트 배포',
    difficulty: 'medium', // 추가
  },
  {
    postId: '36',
    title: 'PyTorch 딥러닝 프레임워크',
    author: '인공지능',
    category: 'AI',
    postDate: '2024-10-10',
    content: 'PyTorch를 활용한 유연한 딥러닝 모델 개발',
    difficulty: 'hard', // 추가
  },
  {
    postId: '37',
    title: 'NestJS 백엔드 프레임워크',
    author: '서버러',
    category: '백엔드',
    postDate: '2024-10-09',
    content: 'TypeScript 기반의 Node.js 백엔드 프레임워크 NestJS',
    difficulty: 'medium', // 추가
  },
  {
    postId: '38',
    title: 'SwiftUI 아이폰 앱 개발',
    author: '모바일개발',
    category: '모바일',
    postDate: '2024-10-08',
    content: 'SwiftUI를 사용한 선언적 iOS 앱 개발',
    difficulty: 'medium', // 추가
  },
  {
    postId: '39',
    title: 'styled-components vs Emotion',
    author: '김스타일',
    category: 'CSS',
    postDate: '2024-10-07',
    content: 'CSS-in-JS 라이브러리인 styled-components와 Emotion 비교',
    difficulty: 'easy', // 추가
  },
  {
    postId: '40',
    title: 'JWT 토큰 기반 인증',
    author: '보안전문가',
    category: '보안',
    postDate: '2024-10-06',
    content: 'JSON Web Token(JWT)을 활용한 안전한 인증 시스템 구현',
    difficulty: 'medium', // 추가
  },
  {
    postId: '41',
    title: 'Elasticsearch 검색 엔진 구축',
    author: 'DB관리자',
    category: '데이터베이스',
    postDate: '2024-10-05',
    content: 'Elasticsearch를 이용한 강력한 전문 검색 엔진 구축하기',
    difficulty: 'hard', // 추가
  },
  {
    postId: '42',
    title: 'Vite 프론트엔드 빌드 툴',
    author: '김개발',
    category: '프론트엔드',
    postDate: '2024-10-04',
    content: '빠른 속도를 자랑하는 차세대 프론트엔드 빌드 툴 Vite',
    difficulty: 'easy', // 추가
  },
  {
    postId: '43',
    title: 'Kotlin 안드로이드 앱 개발',
    author: '모바일개발',
    category: '모바일',
    postDate: '2024-10-03',
    content: 'Kotlin을 활용한 현대적인 안드로이드 앱 개발',
    difficulty: 'medium', // 추가
  },
];