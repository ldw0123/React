/*
💡 Page Router
이전에 사용되던 방식. SSR 기능이 기본적으로 작동
pages 폴더 하위의 모든 폴더/파일명을 기반으로 라우팅
index.tsx는 루트 '/' 경로 페이지,
_app.tsx는 프로젝트 최상위 컴포넌트 역할,
_documents.tsx는 초기 HTML과 CSS 구조를 정의

💡 App Router
Next.tsx 13 버전부터 사용. Server Components & Server Actions를 사용 가능하게 되었다
app 폴더 하위에 모든 파일을 추가하여 라우팅
폴더명으로 경로를 정의하며, 폴더 안의 page.tsx 또는 route.tsx로 작성된 파일만 경로로써 사용할 수 있다
layout.tsx는 최상위 레이아웃 & 루트 '/' 경로 페이지,
page.tsx는 경로 페이지
*/

// index.js는 특수해서 '/' 뒤에 아무것도 없을 때 불러오게 되지만, 다른 파일 이름은 경로 이름으로 사용된다
export default function HomePage() {
  return <h1>홈페이지</h1>;
}
