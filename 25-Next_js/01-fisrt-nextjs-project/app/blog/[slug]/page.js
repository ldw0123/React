// 동적 라우트 (dynamic route)
// 폴더명을 '[임의의 이름]' 이렇게 지으면 동적 라우트를 사용할 수 있게 됨

export default function BlogPostPage({ params }) {
  // params props (= { params }) 안에 동적 라우트에 임의로 넣은 모든 이름이 있는 객체 (= slug) 가 key임
  // key 아래 저장된 값이 URL에 인코딩된 값 (= post-1)
  // http://localhost:3000/blog/post-1

  return (
    <main>
      <h1>블로그 게시글</h1>
      <p>URL에 인코딩된 값: {params.slug}</p>
    </main>
  );
}
