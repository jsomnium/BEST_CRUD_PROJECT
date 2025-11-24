- 목차

# [우아한 테크코스] 프리코스 4-5주차

그저 돌아가는 코드가 아닌, Best Practice로 나아가기

## 주제

- **프로젝트 명**: FRONT-END BEST PRACTICE (CRUD)
- **내용**: 간단한 게시판 CRUD 기능을 구현하며 설계 및 고민하는 시간을 거쳐 최고의 코드를 작성해본다
- **방법**: FE 개발자와 같은 기획을 공유하고 서로 다르게 구현한 코드를 분석하고 개선해나간다
- **기획 노션**: [https://www.notion.so/CRUD-2a3950a6038b807a87fbccf384c5f990](https://www.notion.so/CRUD-2a3950a6038b807a87fbccf384c5f990?pvs=21)

### 결과물

- 리포지터리 링크: https://github.com/jsomnium/BEST_CRUD_PROJECT
- 배포 링크: https://best-crud-project.vercel.app/

# 서론

![image.png](https://file.notion.so/f/f/c12b61e8-004b-4c24-a22f-9a1e3ce70c4b/54a2c7fe-b22a-488b-95dd-ac08580d9f14/image.png?table=block&id=2b067ed1-3cf8-8035-a14e-e1620350699e&spaceId=c12b61e8-004b-4c24-a22f-9a1e3ce70c4b&expirationTimestamp=1764021600000&signature=vfml24Weode_874veex4-DHGXwh-QdYjY-DJCeFMJrQ&downloadName=image.png)

## 주제 선정 사유

4주차 미션이 시작되자마자 주제를 어떻게 잡아야 할지 고민이 많았다.
그러던 중 디스코드 *협업-구인구직* 채널에서 우연히 이 프로젝트를 발견하게 되었고, 내용을 보는 순간 주제를 바로 결정할 수 있었다.
내가 이 주제에 끌린 이유는 크게 **세 가지 관점**으로 정리할 수 있다.

### 1. 이전 미션과의 연관성

1~3주차 과제는 공통 문제를 각자 해결한 뒤 PR을 올리고, 이후 자유롭게 서로의 코드를 리뷰하며 개선해 나가는 방식이었다.
이 프로젝트 역시 동일한 형태로 진행될 수 있었고, 이런 방식이야말로 지난 미션에서 가장 크게 배움을 얻었던 지점이었다.
같은 주제를 공유하기 때문에 비슷한 고민을 나눌 수 있고, 서로의 사고과정을 비교하며 발전할 수 있다는 점에서 **이전 미션의 경험과 자연스럽게 이어지는 최적의 선택**이라고 확신했다.

### 2. 나의 Pain Point

그동안 서비스 운영을 포함해 게임, 웹, 앱 등 총 7개의 프로젝트를 만들어 왔지만, 대부분 빠듯한 일정 속에서 “일단 돌아가는 코드”를 우선으로 개발했다.
그 과정에서 **깊은 고민을 기반으로 한 설계**를 해볼 여유는 늘 부족했고, 비슷한 기술 스택과 유사한 구조를 반복하며 성장의 정체도 느꼈다.

이제는

- “왜 이 기술을 선택했는가?”
- “왜 이런 구조와 코드를 작성했는가?”

이 질문들에 명확하게 답할 수 있는 **탄탄한 설계 경험**을 하고 싶었다.
이 프로젝트는 그동안 아쉬웠던 부분을 다시 채우고, 더 깊이 있게 고민할 수 있는 기회를 제공한다는 점에서 내게 딱 맞는 주제였다.

### 3. 협업?

우아한테크코스에서는 앞으로 팀 프로젝트가 이어지기 때문에, 사람들과의 협업 능력을 쌓는 것이 매우 중요하다고 생각했다.
그래서 이번 미션에서도 **꼭 누군가와 함께 협업 경험을 쌓고 싶었다.**
하지만 단순히 백엔드-프론트엔드 간의 기능 전달 중심 소통은 이미 여러 번 경험해 왔기에, 이번에는 그것만으로는 충분한 배움을 얻기 어려울 것이라고 느꼈다.

그래서 구인·구직 게시판에서 FE 협업 글을 보면서도 쉽게 결정하지 못하고 고민이 이어졌다.
그런데 이 프로젝트는 비록

- 백엔드와의 협업도,
- 같은 프론트 개발자와 리포지토리를 공유하는 협업도 아닌

조금 다른 형태였지만, **같은 미션을 동시에 수행하고, 코드 리뷰를 통해 서로의 고민과 인사이트를 깊이 공유하는 협업 방식**을 경험할 수 있다고 느꼈다.
단순한 역할 분담이 아닌, 서로를 이해하며 성장하는 협업이라는 점에서 이 프로젝트가 더욱 매력적으로 다가왔고, 이 역시 주제를 선택하는 데 큰 이유가 되었다.

# 1주차: 개발 전 초점을 둔 것들

미션을 시작하며 1주차에는 구현보다 **어떤 설계를 기반으로 프로젝트를 진행할지** 깊이 고민하는 데 시간을 집중했다.
구현 중 배운 점을 다루기에 앞서, 본격적인 개발 전에 어떤 부분을 중점적으로 고려했는지 정리해 보았다.
아래 내용은 모두 **이전 프로젝트를 진행하며 느꼈던 아쉬움에서 비롯된 고민**들이다.

## 1. FSD(FEATURE-SLICED DESIGN) 폴더 구조

### 왜?

**[FBS의 아쉬움]**

나에게 가장 어려운 부분은 늘 적절한 **폴더 구조 설계**였다.
이전 졸업 프로젝트에서는 Feature-Based Structure를 채택했지만,

- “기능”의 기준을 명확하게 잡지 못했고
- Next.js 환경에서 async/await 기반의 비동기 파라미터 전달과 구조가 충돌하는 문제들

때문에 폴더 구조가 제대로 기능하지 못했다.

### 어떻게?

**[FSD 아키텍처]**

이번에는 이러한 한계를 개선하기 위해 **FSD 아키텍처를 도입**했다.
FSD는 Next.js의 하이브리드 렌더링 전략(CSR 최소화)과 잘 맞아떨어지고, App Router와 결합했을 때 구조적 일관성을 유지하기에도 적합하다.

## 2. 하이브리드 렌더링(CSR + SSR)

### 왜?

**[client 컴포넌트 자식은 client 컴포넌트가 된다]**

Next.js는 SSR을 강력하게 지원하지만, 한 번 `use client`가 선언되면 해당 트리 전체가 CSR로 전환되기 때문에 **클라이언트 컴포넌트 범위를 최소화하는 것**이 중요하다.
그래서 기본적으로 **SSR 컴포넌트 안에 필요한 최소한의 CSR 컴포넌트만 배치하는 전략**을 사용해야 한다.

### 어떻게?

**[Trigger 컴포넌트 사용하기]**

아래 2주차 내용에서 자세히 설명하겠지만, 이번 프로젝트에서 **모달은 전역 상태로 관리**한다.
모달을 열고 닫는 트리거(Trigger) 버튼은 사용자 인터랙션이 필요한 요소이므로 반드시 클라이언트 컴포넌트여야 한다.
그래서 Trigger, Modal을 전부 별개의 컴포넌트로 분리하고 구현했다.

## 3. 입력 폼 검증 (zod)

### 왜?

**[상태 관리 전략의 변화]**

이전 Multi-Step-Form 개발에서는 단계별 데이터 유지를 위해 Zustand를 전역 상태로 사용하고, 변경되는 상태를 전부 추적한 뒤 마지막으로 최종 제출했었다.
하지만 이번 프로젝트는 **단일 페이지 폼**이며, 타이핑이 일어나는 환경이었다.
그렇기 때문에 계속 상태를 추적하여 전역 상태가 과도하게 업데이트될 경우 **불필요한 전체 리렌더링**이 발생할 수 있어 적절하지 않았다.

### 어떻게?

**[Zod 도입: 로컬 검증 최적화]**

따라서 입력 데이터는 **로컬 상태로 관리**하고, `submit` 시점에만 외부로 전달하는 구조를 선택했다.
이 과정에서 **타입 안정성 + 선언적 검증**을 모두 지원하는 `Zod`를 도입해, 렌더링 비용 증가 없이 견고한 폼 검증 로직을 구축할 수 있도록 했다.

## 4. 디자인시스템

### 왜?

**[디자이너와의 협업과 일관성]**

CEOS 활동 당시 악기 대여 서비스 *MUSAI*를 개발하면서 tailwind 디자인 토큰을 활용해 디자인 시스템을 구축한 경험이 있다.
이 경험은 디자이너-개발자 간 원활한 협업과 UI 일관성 측면에서 큰 도움이 되었고, 이번 프로젝트에서도 해당 경험을 적극 활용하고자 했다.

### 어떻게?

**[TailwindCSS 4]**

특히 이번에는 Tailwind CSS의 최신 기능을 활용하여, `tailwind.config.js` 설정 파일에 의존하기보다 표준 CSS 변수(CSS Variables)를 통해 디자인 토큰을 관리하는 방식을 택했다.
`globals.css` → `:root`에 컬러·타이포그래피 토큰을 선언하면 Tailwind가 이를 자동으로 유틸리티 클래스로 인식해 매핑한다.

이 방식의 장점은 다음과 같다.

<aside>

1. **디자인 토큰의 명확한 구조**
    
    Figma의 스타일을 CSS 변수에 1:1로 자연스럽게 매핑 가능
    
2. **유지보수성 향상**
    
    컬러 변경이 있을 때 CSS 변수 값만 바꾸면 전역 UI가 즉시 반영
    
3. **확장성 좋음**
    
    다크모드 도입 시 변수만 스위칭하면 끝
    
</aside>

# 2주차: 개발 시작

## 1. FSD(FEATURE-SLICED DESIGN) 폴더 구조

### 배경

사실 FSD는 대규모 프로젝트에서 코드가 얽히지 않게 하는 데에 적합한 구조이다.
CRUD 같은 간단한 프로젝트에는 과도한 설계라고 볼 수도 있으나, 확장 가능성을 두고 시작했기 때문에 괜찮다고 판단했다.

### FSD란?

![image.png](https://www.notion.so/image/attachment%3A54acdd0e-61b7-4b97-aaa9-bbe170afee4e%3Aimage.png?table=block&id=2b567ed1-3cf8-80a0-9d54-c2e71176cff8&spaceId=c12b61e8-004b-4c24-a22f-9a1e3ce70c4b&width=2000&userId=2a446834-093e-4308-ae0e-461e88329a30&cache=v2)

feature sliced design이란 폴더 별로 계층 (Layers, Slices, Segments)를 도입하여 프로젝트가 커져도 코드가 꼬이지 않게 만드는 설계이다.
여기서 Layers는 자기 자신과 하위의 Layers에만 접근할 수 있다.
각 Layer는 Slices를 하위에 가지고 있고, 각 Slices는 Segments를 하위에 가지고 있다.

자세히 설명하자면 글이 길어질 것 같아 공부하면서 참고한 글을 아래에 남기겠다.

- 공식 문서: https://feature-sliced.design/
- 기술 블로그: https://developers.hyundaimotorgroup.com/blog/399

### Feature와 Entities

설계를 하면서 가장 큰 고민은, **“Feature와 Entities를 어떻게 구분하느냐”**였다.
우선 Feature와 Entities가 무엇인지 설명하자면.. 이 두 레이어는 FSD의 핵심이며, 프로젝트의 복잡도를 관리하는 데 결정적인 역할을 한다.

- Entities
    - 프로젝트의 **도메인 모델** 그 자체
    - 데이터 구조, 타입 정의, 그리고 이 모델을 조작하는 가장 기본적인 API 호출 로직(CRUD) 등 **순수하게 재사용 가능한 데이터 관련 요소**가 들어간다

- Feature
    - 특정 사용자 시나리오(User Intent)를 완료하기 위해 엔티티와 위젯을 **조합**하는 로직
    - 무엇을 한다는 동사형 기능이 된다.

![개발한 UI 사진이다. 이 모달 컴포넌트를 크게 3가지 요소로 나누었다.
이중 고민이 되었던 것은 PostForm이다.](https://www.notion.so/image/attachment%3Ac8b2b398-a919-4218-9cfe-756d697fbc6e%3A%E1%84%80%E1%85%A6%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%86%AF-%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC.png?table=block&id=2b567ed1-3cf8-8067-997f-d84a9f4a28ad&spaceId=c12b61e8-004b-4c24-a22f-9a1e3ce70c4b&width=2000&userId=2a446834-093e-4308-ae0e-461e88329a30&cache=v2)

개발한 UI 사진이다. 이 모달 컴포넌트를 크게 3가지 요소로 나누었다.
이중 고민이 되었던 것은 PostForm이다.

### **게시글 폼 (PostForm)의 딜레마**

이 고민은 게시글 작성 컴포넌트를 만들며 시작됐다.
컴포넌트는 크게 모달 레이아웃, 게시글 폼 UI 모음, 게시글 생성 버튼으로 크게 세 가지 요소로 나뉘는데,
여기서 게시글 폼 UI 모음 PostForm(Input을 모아서 합침)의 설계 위치가 불분명했다.

Post 엔티티의 필드를 다루므로 `Entities`인가?
아니면 생성이라는 기능의 일부이므로 `Feature`인가?
Input 폼 자체가 `Post` 엔티티의 API를 활용할 것이기 때문에 `Entities`에 넣어야 할지,
아니면 '게시글 생성'이라는 기능(`Feature`)의 핵심을 이루기 때문에 `Feature`에 넣어야 할지 모호했다.

### **해결 원칙: 재사용성과 기능적 독립성으로 판단**

이 고민을 해결하기 위해 FSD의 근본적인 목적, 즉 **컴포넌트의 독립적인 재사용 가능성**을 판단의 기준으로 삼았다.

1. **Form 컴포넌트의 역할 정의:**
    - `PostForm`은 오직 **`Post` 엔티티의 데이터 형식을 사용자로부터 입력받는 UI**라는 순수한 역할만 수행해야 한다.
    - 이 폼은 게시글 **생성** 시나리오뿐만 아니라, 향후 게시글 **수정** 시나리오에서도 **동일한 구조로 재사용**되어야 한다.
2. **레이어 분리 결정:**
    - **`PostForm`은 `Entities/Post`에 위치**시켜 재사용 가능한 UI 요소로 격리했습니다. 이 컴포넌트에는 **API 호출 로직을 절대 포함하지 않는다.** (폼 데이터는 외부로 전달만 함)
    - **API 호출 및 모달 조합 로직은 `Features/PostCreate`에 위치**시켰습니다. 이 Feature는 `Entities/Post`에서 `PostForm`을 가져와 사용한다.
    - 폼에서 전달받은 데이터를 이용하여 '게시글 생성 API 호출'이라는 **특정 기능을 완성**하는 책임만 진다.

이러한 분리를 통해, `Entities`는 데이터 모델의 표현을, `Features`는 비즈니스 시나리오의 완성을 담당하는 **명확한 역할 분담**이 이루어졌다.
결과적으로 간단한 CRUD 프로젝트에서도 FSD의 핵심 가치인 **확장성**을 확보하며 깔끔하게 설계를 마무리할 수 있었다.

---

## 2. Modal 컴포넌트 상태 관리

Next.js의 하이브리드 렌더링 환경에서 **모달 컴포넌트의 상태 관리**를 어떻게 최적화할지 깊이 고민했다.
모달을 열고 닫는 사용자 인터랙션은 필연적으로 클라이언트 컴포넌트(`'use client'`)가 필요했지만, 모달 외부에서 받아오는 데이터는 서버에서 가져오는 무거운 SSR 결과여야 했기 때문이다.

### SSR 데이터를 품어야 하는 CSR 컴포넌트

프로젝트의 모달 설계는 다음과 같은 복합적인 문제를 안고 있었다.

- **인터랙션의 강제:** 모달 트리거 버튼에 `onClick` 이벤트가 필요하므로 **클라이언트 컴포넌트**로 작성해야 했다.
- **데이터의 무게:** 모달 외부, 즉 모달을 불러오는 페이지는 게시글 목록을 불러오고 있다.
첫 로딩 성능과 SEO를 위해 반드시 서버에서 Fetch(SSR)한 결과여야 했다.
- **전역 상태의 위험:** 모달 트리거가 페이지 곳곳에 존재해 단순히 페이지 전체를 `use client`로 전환하면 **하이브리드 렌더링 전략과 충돌**하고 **불필요한 Hydration 비용**이 발생할 위험이 있었다.

⇒ 단순히 페이지 전체를 클라이언트 컴포넌트로 만드는 것은 Next.js의 장점을 포기하는 가장 쉬운 해결책이었지만, **CSR 범위를 최소화**하는 할 수 있도록 설계했다.

### SSR/CSR 동작 및 내용 분리 구조 설계

이 문제를 해결하기 위해 모달의 동작과 내용을 명확하게 분리하는 구조를 재설계했다.
핵심은 **클라이언트 컴포넌트(`Modal`)가 서버 컴포넌트(`Page`)에 포함되더라도, 서버 컴포넌트의 렌더링 결과는 그대로 유지**되도록 하는 것이다.

```jsx
import Modal from './Modal'; // 'use client'가 선언된 모달 Shell
import ModalTrigger from './ModalTrigger'; // 'use client'
import HeavyServerData from './HeavyServerData'; // 서버 컴포넌트

export default async function Page() {
  const data = await fetchData(); // 서버에서 데이터 가져오기

  return (
    <div>
      <h1>데이터 목록</h1>

      <Modal>
        {/* 트리거는 CSR: 동작 제어 */}
        <ModalTrigger>상세보기 버튼</ModalTrigger>

        {/* 모달 Content는 SSR → children으로 전달 */}
        <ModalContent>
          <HeavyServerData data={data} />
        </ModalContent>
      </Modal>
    </div>
  );
}
```

### 역할 분리 요약

| **역할** | **컴포넌트** | **방식** | **특징** |
| --- | --- | --- | --- |
| **모달 열기/닫기 버튼** | `ModalTrigger` | CSR | Zustand 상태만 조작하여 인터랙션 처리 |
| **모달 UI Shell** | `Modal` | CSR | Zustand 상태를 구독하여 열림/닫힘 UI 표시 |
| **실제 렌더링될 무거운 데이터 영역** | `ModalContent`의 Children | **SSR** | 서버에서 페칭 및 렌더링 완료된 HTML |

### Hydration 비용 절감 및 안정성 확보

이 구조를 채택함으로써 **SSR의 장점**과 **CSR의 인터랙션**을 모두 취할 수 있었다.

- **SSR의 장점 유지:** 무거운 데이터는 서버에서 미리 가져와 HTML로 렌더링되므로 **첫 로딩 속도** 개선에 크게 기여한다.
- **클라이언트 번들 최소화:** 사용자 인터랙션이 필요한 `Trigger`와 `Shell` 부분만 CSR로 분리해 클라이언트 번들을 최소화한다.
- **Hydration 비용 절감:** 서버에서 이미 완성된 `ModalContent` 영역은 클라이언트 측에서 JavaScript 실행(Hydration)이 최소화되거나 거의 필요 없게 되어, 불필요한 비용을 크게 절감할 수 있었다.
- **전역 상태의 깔끔한 제어:** 모달이 페이지 전체에서 공유됨에도 불구하고, SSR 페이지를 CSR로 **오염시키지 않고** 전역 상태 기반으로 깔끔하게 제어할 수 있게 되었다.

---

## 3. 단일 진실 공급원 (SSOT)

### 배경

![image.png](https://www.notion.so/image/attachment%3A60f26582-6628-4318-908d-5a9e5479f802%3Aimage.png?table=block&id=2b167ed1-3cf8-80fb-9827-f655540281fd&spaceId=c12b61e8-004b-4c24-a22f-9a1e3ce70c4b&width=2000&userId=2a446834-093e-4308-ae0e-461e88329a30&cache=v2)

게시글 목록 컴포넌트를 개발하면서, **목록 헤더**와 **목록 아이템**의 컬럼 너비가 동일하게 유지되어야 했다.
처음 설계된 코드는 컬럼을 추가하거나 순서를 바꿀 때마다 `PostListHeader`와 `PostItem` 두 컴포넌트 모두를 수정해야 하는, **유지보수성이 매우 낮은** 구조였다.
따라서 확장 가능성을 고려해서 UI와 데이터를 분리하기로 결정했다.

### 개선전 코드

```jsx
const **PostListHeader** = ({ ... }: PostListHeaderProps) => {
  return (
    <div className="hidden border-b border-gray-300 px-6 py-3 font-semibold md:flex">
      <span className="**flex-1**">제목</span>
      <span className="**w-25** text-center">난이도</span>
      <span className="**w-25** text-center">작성자</span>
      <span className="**w-25** text-center">카테고리</span>
      <span className="**w-25** text-center">작성일</span>
      <span className="**w-12** text-center">수정</span>
    </div>
  );
};
```

```jsx
export function PostItem({ post }: PostItemProps) {
  return (
    <div className="flex items-center">
      <Link
        href={`/posts/${post.postId}`}
        className="flex-1"
      >
        {post.title}
      </Link>
      <span className="**w-25**">{convertedDifficulty}</span>
      <span className="**w-25**">{post.author}</span>
      <span className="**w-25**">{post.category}</span>
      <span className="**w-25**">{post.postDate}</span>
      <button className="**w-12**">수정</button>
    </div>
  );
}
```

자세히 보면 `flex-1`, `w-25`, `w-12` 와 같은 속성이 반복되는 것을 알 수 있다.

이는 게시글 목록을 나누는 칼럼 별로 고유한 너비를 가지고 있기 때문에 이 필드 정의를 설정 config 배열로 하나로 묶으면, 헤더와 아이템이 어긋나지 않게 구현할 수 있게 된다.

### 컬럼 메타데이터 정의 파일

```jsx
import { Post } from "@/src/entities/post/types/post-type";
import { convertDifficultyToKorean } from "@/src/entities/post/utils/convertDifficultyToKor";

const META_DATA_COLUMNS = [
  { key: 'title', label: '제목', width: '**flex-1**' },
  { 
    key: 'difficulty', 
    label: '난이도', 
    width: '**w-25**', 
    format: (post: Post) => **convertDifficultyToKorean(post.difficulty)** 
  },
  { key: 'author', label: '작성자', width: '**w-25**' },
  { key: 'category', label: '카테고리', width: '**w-25'** },
  { key: 'postDate', label: '작성일', width: '**w-25**' },
  { key: 'edit', label: '수정', width: '**w-12**' },
] as const;

export { META_DATA_COLUMNS };
```

추가로 **formatter 패턴**을 적용했다.
단순히 텍스트와 너비만 상수로 빼는 것이 아니라, 변환이 필요한 데이터에 format 함수를 직접 주입했다.

이 덕분에 컴포넌트는 데이터 가공에 대해 고민할 필요 없이, `format()` 함수가 있으면 실행하고 없으면 값을 보여주는 **순수한 렌더** 역할에만 집중할 수 있게 되었다.

### 개선후 코드

```jsx
const PostListHeader = ({ ... }: PostListHeaderProps) => {
  return (
    <div className="hidden border-b border-gray-300 px-6 py-3 font-semibold text-gray-800 md:flex">
      {META_DATA_COLUMNS.map((col) => (
        **<span key={col.key} className={`${col.width} text-center`}>**
          {col.label}
        </span>
      ))}
    </div>
  );
};
```

```jsx
export function PostItem({ post }: PostItemProps) {
  const { selectedIds, toggleId } = usePostSelectionStore();
  const isSelected = selectedIds.has(post.postId);

  return (
    <div
      className={`text-grey-850 hover:bg-grey-50 border-grey-150 flex items-center border-b px-6 py-4`}
    >
      {META_DATA_COLUMNS.map((col) => {
        if (col.key === 'title') {
          return (
            <Link
              key={col.key}
              href={`/posts/${post.postId}`}
              className={`${col.width} hover:text-primary text-left font-medium`}
            >
              {post.title}
            </Link>
          );
        }

        if (col.key === 'edit') {
          return (
            <button
              key={col.key}
              className={`${col.width} text-grey-750 hover:text-primary cursor-pointer text-center text-sm`}
            >
              수정
            </button>
          );
        }

				// FORMAT 함수가 있는 경우 (카테고리)
        let content: React.ReactNode;
        if ('format' in col && typeof col.format === 'function') {
          content = col.format(post);
        } else {
          content = post[col.key as keyof Post];
        }

        return (
          <span
            key={col.key}
            className={`${col.width} text-grey-750 text-center text-sm`}
          >
            {content}
          </span>
        );
      })}
    </div>
  );
}

```

### 개선 후 가지는 이점

SSOT와 Formatter 패턴을 적용한 결과, `PostListHeader`와 `PostItem` 컴포넌트의 코드는 **간결성**과 **유지보수성** 측면에서 크게 향상되었다.
이 리팩토링을 통해 코드의 총 길이는 길어졌을 수 있으나, 시스템의 안정성과 개발 생산성은 비교할 수 없을 만큼 높아지게 된다.
이는 **Best Practice**에 부합하는 설계라고 생각한다.

**1. 컴포넌트 코드의 단순화**

헤더와 아이템 모두 `META_DATA_COLUMNS` 배열을 순회하며 반복문으로 렌더링하도록 변경했다.
컬럼의 너비는 `col.width`를 통해 자동적으로 적용된다.

**2. 확장 가능성 확보**

가장 큰 이점은 **시스템의 안정성**과 **생산성 향상이다.**

- **컬럼 변경 시:** 컬럼의 순서를 바꾸거나 너비를 조정하거나, 새로운 컬럼을 추가할 때 **컴포넌트 코드를 수정할 필요가 없다.**
- **단일 수정 지점:** 오직 **`META_DATA_COLUMNS` 배열 하나**만 수정하면, 헤더와 리스트 아이템이 **기계적으로 완벽하게 동기화된다.**

### 추가 개선 방안: CSS Grid 활용

현재는 `flex-1`, `w-25`와 같은 유틸리티 클래스로 컬럼 너비를 정의하였는데,
이후 리팩토링 진행 시 **CSS Grid 속성**을 활용하면 컬럼 너비 관리와 레이아웃 정의를 더욱 구조적으로 개선할 수 있을 것 같다는 생각이 들었다.

**향후 Grid Layout 구상**

```jsx
const ROW_LAYOUT = "grid grid-cols-[**1fr_6rem_6rem_6rem_6rem_3rem**] gap-4";
```

이 방식을 적용하면 `META_DATA_COLUMNS` 배열에서 **개별 너비(`width`) 속성을 제거**하고, **`ROW_LAYOUT` 변수 하나**로 전체 목록의 컬럼 너비와 간격을 제어할 수 있게 된다.
다음부터는 이렇게 지속 가능한 방법을 쓰려고 한다.

# 결론: 돌아가는 코드를 넘어, 설계의 가치를 발견하다

## 1. 성장한 부분

한 주 동안 깊이 고민한 설계를 바탕으로 구현을 시작하니, 구현하면서도 내가 올바른 길을 가고 있는지 계속 확인하며 많은 시간을 들였다.
결과물은 작지만, 거기에 들인 시간과 고민들은 많은 성장을 이끌어 낸 것 같다.

### **아키텍처 설계 역량 강화**

**FSD** 설계를 통해 **Entities**와 **Feature**를 명확히 구분하는 사고 능력을 기를 수 있었다.
이는 프로젝트의 복잡도를 관리하고 확장성을 확보하는 데 핵심적인 경험이었다.

### **유지보수성 및 확장성 확보**

**SSOT** 패턴을 적용하여 코드 중복성을 제거했으며, **Formatter 패턴**을 통해 UI 컴포넌트의 순수 렌더링 역할을 확립했다.
이로써 시스템의 안정성과 생산성을 높이는 **확장성 높은 설계**의 가치를 체감했다.

### **Next.js 환경 최적화**

Next.js 환경에서 **하이브리드 렌더링(SSR + CSR)** 전략을 극대화하기 위해 모달 컴포넌트의 동작과 내용을 분리하는 구조를 설계했다.
이는 **Hydration 비용을 최소화**하고 SSR의 장점을 유지하는 실질적인 최적화 경험이었다.

## 2. 아쉬웠던 부분

시간 제약으로 인해 몇 가지 계획을 완전히 구현하지 못한 점은 아쉬움으로 남아있다.

### **디자인 시스템 구축**

Figma 토큰을 CSS 변수로 매핑하는 기반 작업까지는 완료했으나, UI 컴포넌트의 재사용성과 문서화를 강화하는 **스토리북** 도입은 다음 과제로 미루게 되었다.
사실 TailwindCSS와 Figma 자동화 과정이 많이 의미있어 보였지만… 아쉬울 따름이다.

### **MSW**

백엔드 없이 개발함에도 Tanstack Query의 캐싱 및 응답 로직을 최적화하기 위해 MSW를 도입하고자 했으나, 시간이 부족해 구현하지 못했다.
추후 안정적인 개발 환경 구축을 위해 반드시 숙달해야 할 부분이다…
이미 MSW를 도입한 경험이 있어서 빠르게 할 수 있을 것이라 생각했는데도 시간 관계상 도입을 실했다.

## 3. 맺으며…

### 색다른 경험

이번 4-5주차 과정은 정해진 입출력 없이 **스스로 주제를 선정**하고 **설계에 집중**했다는 점에서 매우 **색다른 경험**이었다.
그 과정에서 배움의 어려움도 있었지만, 동시에 큰 즐거움을 느낄 수 있었다.
결과적으로 그동안 개발하며 느꼈던 Pain Point를 해소해주는 주제를 선택한 것이 가장 큰 성장을 이끌어 낸 핵심인 것 같다.

물론 시니어 개발자의 시각에서 보았을 때 완벽한 코드라고 단언할 수는 없다.
하지만 단순히 기능을 구현하는 데 쓴 시간보다 **설계를 고민하는 데 더 많은 시간을 투자**했다는 사실이 이번 미션의 가장 큰 성과라고 생각한다.
이는 **'일단 돌아가는 코드'를 넘어 '왜 이렇게 설계했는가'에 답할 수 있는 경험**이었다는 점에서 매우 의미 깊은 시간이었다.

### 백엔드를 배우고 싶다

그리고 또 하나 마지막으로는, **백엔드를 배우고 싶다**는 생각이 들었다.
4학년까지 전공 수업을 들으며 서버 지식도 어느 정도 있고, **SQLD** 자격증도 있기 때문에 새로운 지식을 습득하는 데 그렇게까지 많은 시간이 들 것이라고는 생각하지 않는다.

이러한 간단한 프로젝트를 만들면서도 서버가 없으니 "완성"한 결과물을 내기가 힘들었다.
나는 혼자서 **처음부터 끝까지 동작하는 결과물**을 언젠가 만들어내는 것이 꿈이다.
따라서 서버까지 공부하여, 혼자서도 돌아가는 결과물을 만들 수 있는 **풀스택 개발자**로 성장해나가고 싶다.

이번 미션은 단순히 과제를 끝내는 것이 아닌, **개발자로서의 가능성**을 다시 한번 확인하고 **깊이 있는 설계 고민**을 경험한 **소중한 이정표**이다.
