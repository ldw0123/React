// 커뮤니티 페이지

import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>음식을 공유하세요!</span>
        </h1>
        <p>커뮤니티에 가입하고 마음에 드는 레시피를 공유하세요!</p>
      </header>
      <main className={classes.main}>
        <h2>커뮤니티 혜택</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>레시피 발견 & 공유</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>새로운 친구와 마음이 맞는 동료 찾기</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>단독 이벤트 참여</p>
          </li>
        </ul>
      </main>
    </>
  );
}
