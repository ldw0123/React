// ... (rest 파라미터): 나머지 매개변수(여기서는 props)들을 모두 담는다
export default function Section({ title, children, ...props }) {
  return (
    // ... (spread 연산자): 배열이나 객체를 펼친다
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
