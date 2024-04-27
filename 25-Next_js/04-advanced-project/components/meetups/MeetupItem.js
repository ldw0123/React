import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    // push()를 이용하여, <Link>를 사용하지 않으면서 프로그램밍 방식으로 링크를 연결
    router.push('/' + props.id); // MeetupList.js의 id를 연결. 동적 경로 지정
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>세부항목 보기</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
