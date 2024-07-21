// {children}: 컴포넌트의 자식 요소
export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonContainer = buttonsContainer; // 커스텀 컴포넌트
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {/* 자식 요소 */}
      {children}
    </>
  );
}
