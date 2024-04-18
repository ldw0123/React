'use client';

import { useFormStatus } from 'react-dom'; // <form>이 현재 제출 중인지 또는 성공적으로 제출되었는지를 알려주는 훅

export default function MealsFormSubmit() {
  const { pending } = useFormStatus(); // pending 속성은 요청이 진행 중이면 true, 아니면 false

  return (
    <button disabled={pending}>{pending ? '제출중...' : '식사 공유'}</button>
  );
}
