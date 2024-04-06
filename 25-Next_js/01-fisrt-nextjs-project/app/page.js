import Link from 'next/link'; // Link 컴포넌트: Next.js에서 내부 링크가 필요한 경우, a 태그 대신 사용. 단일 페이지 앱에 머물 수 있도록 함

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
