import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';

export default async function MealsPage() {
  // 리액트 컴포넌트에서는 할 수 없었던 일이지만, 서버 컴포넌트에서는 함수들이 async 함수로 바뀔 수 있다
  const meals = await getMeals();

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
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
