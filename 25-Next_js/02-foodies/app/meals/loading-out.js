// 로딩 페이지
// 파일 이름을 약속된 파일명인 'loading.js'로 생성하면, 옆의 page.js 파일이나 다른 중첩된 페이지가 데이터를 불러올 때 활성화된다
// 그러면 데이터가 나올 때까지 loading.js의 요소가 보여진다

// loading-out.js로 이름지어서 특별한 목적이 없게끔 하였다

import classes from './loading.module.css';

export default function MealsLoadingPage() {
  return <p className={classes.loading}>식사를 불러오는 중...</p>;
}
