// meals/layout.js는 meals 관련 페이지에만 적용되지만, root layout에 중첩된다

export default function MealsLayout({ children }) {
  return (
    <>
      <p>Meals layout</p>
      {children}
    </>
  );
}
