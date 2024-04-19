// form을 제출하는 컴포넌트 분리
/* 💡 Server Action: 클라이언트에서 서버에 있는 함수를 직접 호출한다
DB에 데이터를 저장, 수정 등을 하고 싶으면 당연히 서버를 거쳐야 한다. 그래서 page.js에 <form>같은 것도 만들고 서버 파일로 이동해서 거기에 API도 작성해놔야하는데, 그게 귀찮으면 그냥 page.js 안에서 해결할 수 있는 기능이다
서버 액션을 사용하면 글 생성/수정/삭제 기능을 만들 때도 컴포넌트 안에서 모든 걸 해결할 수 있기 때문에, 서버 API를 따로 만들 일 없이 거의 모든 기능을 컴포넌트 안에서 개발할 수 있다 */

'use server';

import { revalidatePath } from 'next/cache';
import { saveMeal } from './meals';
import { redirect } from 'next/navigation';

// 유효성 검사 함수
function isInvalidText(text) {
  // meal.title이 존재 여부 & 빈 문자열인지 검사. 문자가 존재하지 않거나 빈 문자열일 경우, true
  return !text || text.trim() === '';
}

// form 제출 함수 (이 함수가 Server Action이 되게 하려면 , async와 'use server'가 필요함)
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'), // name="title" 인 input 필드의 값을 불러옴
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: '유효하지 않은 입력입니다',
    };
  }

  await saveMeal(meal);
  // revalidatePath(): Next.js가 특정 path(경로)에 속하는 "캐시의 유효성 재검사(특정 페이지의 캐시를 비우는 것)" 를 하게 하는 함수
  // 인자 1: '특정 경로', 인자 2: 'layout'(중첩된 페이지까지 재검사)
  revalidatePath('/meals');
  redirect('/meals');
}
