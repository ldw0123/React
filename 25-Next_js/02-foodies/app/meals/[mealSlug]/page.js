// localhost:3000/meals/share 인 경우, Next.js는 share 페이지를 뜻하는 것이라는 것을 알고, [mealSlug] 동적 페이지가 아니라는 것을 안다
// localhost:3000/meals/~~~ 인 경우, 동적 라우팅 페이지
import Image from 'next/image';
import { notFound } from 'next/navigation';

import classes from './page.module.css';
import { getMeal } from '@/lib/meals';

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound(); // 가장 가까이에 있는 notFound 페이지를 보여주는 Next.js에서 제공하는 함수
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mail to: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
        <main>
          {/* dangerouslySetInnerHTML: React에서 HTML을 직접 삽입할 수 있게 해주는 속성. 객체를 값으로 가져야 한다. 컨텐츠를 HTML으로 출력시켜 XSS(크로스 사이트 스크립트) 공격에 노출되기 때문에 보안에 취약함 */}
          <p
            className={classes.instructions}
            dangerouslySetInnerHTML={{
              __html: meal.instructions,
            }}
          ></p>
        </main>
      </header>
      ;
    </>
  );
}
