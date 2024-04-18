// 음식 공유 페이지
'use client';

import { useFormState } from 'react-dom';

import ImagePicker from '@/components/meals/image-picker';
import { shareMeal } from '@/lib/actions';
import classes from './page.module.css';
import MealsFormSubmit from '@/components/meals/meals-form-submit';

export default function ShareMealPage() {
  // useFormState: 서버 액션을 통해 제출될 form을 사용하는 페이지나 컴포넌트의 state를 관리하는 훅
  // 인자 1: Server Action, 인자 2: 컴포넌트의 초기 상태
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          <span className={classes.highlight}>최애 메뉴를</span> 공유해 보세요
        </h1>
        <p>다른 메뉴를 공유해도 좋고요!</p>
      </header>
      <main className={classes.main}>
        {/* form action 속성: 폼 데이터(form data)를 서버로 제출될 때, 해당 데이터가 전송될 URL을 지정한다 */}
        <form className={classes.form} action={formAction}>
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
          <ImagePicker label="Your image" name="image" />
          {/* require를 지우고, 이메일란이 비어있을 때 에러메시지 렌더링 */}
          <div className={classes.error_msg}>
            {state.message && <p>{state.message}</p>}
          </div>
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
