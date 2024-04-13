// 음식 공유 페이지

import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>최애 메뉴를</span> 공유해 보세요
        </h1>
        <p>다른 메뉴를 공유해도 좋고요!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">제목</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">한 줄 요약</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">메뉴 설명</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker />
          <p className={classes.actions}>
            <button type="submit">메뉴 공유</button>
          </p>
        </form>
      </main>
    </>
  );
}
