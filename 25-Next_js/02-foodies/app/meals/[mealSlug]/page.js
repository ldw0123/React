// localhost:3000/meals/share 인 경우, Next.js는 share 페이지를 뜻하는 것이라는 것을 알고, [mealSlug] 동적 페이지가 아니라는 것을 안다
// localhost:3000/meals/~~~ 인 경우, 동적 라우팅 페이지

export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>음식 상세 페이지</h1>
      <p></p>
      <p>URL에 인코딩된 값: {params.mealSlug}</p>
    </main>
  );
}
