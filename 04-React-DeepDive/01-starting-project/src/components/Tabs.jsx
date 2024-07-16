// {children}: 컴포넌트의 자식 요소
export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {/* 자식 요소 */}
      {children}
    </>
  );
}
