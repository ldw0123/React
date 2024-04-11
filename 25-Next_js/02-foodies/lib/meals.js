// DB에 접근하고, DB에서 데이터를 가져오기

// 서버에서만 실행되는 server component는 서버에서 실행되기 때문에 바로 데이터베이스에 접근할 수 있다
// 바닐라 React와 다르게 useEffect를 사용하지 않아도 되고, 데이터를 가지러 fetch 요청을 보내지 않아도 된다

import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return db.prepare('SELECT * FROM meals').all(); // meals 테이블에서 모든 열을 select(선택)
  // all(): 여러개의 모든 행을 가져와서 실행
  // get(): 하나의 행을 가져와서 실행
  // run(): 데이터를 변경
}
