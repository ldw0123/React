import Link from 'next/link';

export default function MealsPage() {
  return (
    <>
      <h1>음식 페이지</h1>
      <p>
        <Link href="/meals/share">Meal Share</Link>
      </p>
      <p>
        <Link href="/meals/Yongsan">Yongsan</Link>
      </p>
    </>
  );
}
