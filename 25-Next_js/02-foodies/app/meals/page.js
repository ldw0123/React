import { Suspense } from 'react';
import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';

// Meals 컴포넌트. 데이터를 가져오는 부분을 분리된 컴포넌트로 아웃소싱
async function Meals() {
  // 리액트 컴포넌트에서는 할 수 없었던 일이지만, 서버 컴포넌트에서는 함수들이 async 함수로 바뀔 수 있다
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

// MealsPage 컴포넌트
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          제일 좋아하는 요리를 골라서 직접 만들어 보세요. 간단하고 재밌답니다!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">최애 레시피 공유</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* Suspense 컴포넌트: 리액트에서 제공하는 컴포넌트로, 컴포넌트가 로딩되는 동안 대체 컨텐츠(로딩 상태)를 표시 */}
        {/* fallback 요소의 내용은 <Meals/>가 로딩되는 동안 표시해줌 */}
        <Suspense
          fallback={
            <p className={classes.loading} style={{ marginBottom: '50px' }}>
              식사를 불러오는 중...
            </p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
