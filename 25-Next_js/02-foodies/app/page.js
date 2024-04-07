import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <p>
          <Link href="/meals">Meals</Link>
        </p>
        <p>
          <Link href="/meals/share">Share Meal</Link>
        </p>
        <p>
          <Link href="/community">Community</Link>
        </p>
      </div>
    </main>
  );
}
