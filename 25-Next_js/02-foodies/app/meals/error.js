// error 처리 페이지
// error.js: React 프로젝트에서 오류만 처리하거나 오류 메시지를 표시하는 데 사용되는 컴포넌트
// 이 파일과 같은 위치에 있거나, 중첩된 파일에서 발생한 오류만 처리. 전역에 있으면 모든 페이지의 오류를 처리

// lib/meals.js에서 발생한 에러 처리!

'use client'; // 에러 페이지는 client component이어야만 한다

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>오류가 발생했습니다!</h1>
      <p>식사 자료 불러오기에 실패하였습니다. 다음에 다시 시도하십시오.</p>
    </main>
  );
}
