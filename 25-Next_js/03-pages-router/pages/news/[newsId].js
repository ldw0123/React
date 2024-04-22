// 중첩 페이지 & 동적 페이지
// localhost:3000/news/~~~

// news 폴더 속에 다른 이름의 파일이 있으니 중첩 페이지가 된다
// [아무 이름].js 파일은 동적 페이지. /news/~~ 아무 문자나 입력해도 같은 페이지를 볼 수 있다

import { useRouter } from 'next/router'; // URL에 입력된 구체적인 값을 추출하는 Hook

export default function DetailPage() {
  const router = useRouter(); // 라우터 객체에 접근하고, 그 라우터 객체에서 특정 데이터나 호출할 수 있는 특정 메소드를 얻는다

  // URL에 인코딩된 값, 즉 이 동적 경로 세그먼트의 구체적인 값에 접근할 수 있다
  // query 속성을 이용하면 중첩 객체에 접근할 수 있는데, query 객체에서 대괄호 안에 썼던 식별자를 속성 이름으로 넣으면 된다
  const newsId = router.query.newsId;

  return <h1>상세 페이지</h1>;
}
