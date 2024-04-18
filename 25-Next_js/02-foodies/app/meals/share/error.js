// share 페이지의 error 처리 페이지

'use client'; // 에러 페이지는 client component이어야만 한다

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>오류가 발생했습니다!</h1>
      <p>식사 생성에 실패하였습니다. 다시 시도하십시오.</p>
    </main>
  );
}
