import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';

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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
