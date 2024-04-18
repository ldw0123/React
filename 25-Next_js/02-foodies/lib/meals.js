// DB에 접근하고, DB에서 데이터를 가져오기
// 서버에서만 실행되는 server component는 서버에서 실행되기 때문에, 별도의 API 요청 없이 바로 데이터베이스에 접근할 수 있다
// 바닐라 React와 다르게 useEffect를 사용하지 않아도 되고, 데이터를 가지러 fetch 요청을 보내지 않아도 된다

import sql from 'better-sqlite3';
import fs from 'node:fs'; // 파일 시스템을 이용. 파일 시스템은 파일을 CRUD할 수 있다
import slugify from 'slugify'; // 문자열을 URL에 넣기 위해 사용되는 텍스트 변환 기술. 문자열을 slug로 변환한다
import xss from 'xss'; // XSS(Cross-Site Scripting) 을 방지

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // throw new Error('음식 불러오기 실패'); // 에러 발생!
  return db.prepare('SELECT * FROM meals').all(); // meals 테이블에서 모든 열을 select(선택)
  // all(): 여러개의 모든 행을 가져와서 실행
  // get(): 하나의 행을 가져와서 실행
  // run(): 데이터를 변경
}

export function getMeal(slug) {
  // better-sqlite3가 SQL 인젝션으로부터 지켜줌
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// meal 객체 데이터를 저장하는 함수
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // slugify() 함수를 통해 slug를 생성. 인자로 meal.title를 주고, 모든 문자를 소문자로 설정
  meal.instructions = xss(meal.instructions); // xss() 함수를 통해 instructions에서 해로운 컨텐츠를 제거. 인자로 meal.instructions

  const extension = meal.image.name.split('.').pop(); // 이미지의 확장자를 받아옴
  const fileName = `${meal.slug}.${extension}`; // 고유한 파일명을 생성

  const stream = fs.createWriteStream(`public/images/${fileName}`); // createWriteStream() 함수: 파일 쓰기 스트림을 생성하는 함수. 어떤 파일에 데이터를 작성할 수 있도록 해준다. 동적 파일경로에 쓰기 스트림을 생성한다

  // ArrayBuffer(원시 바이너리 데이터의 읽고 쓰기를 하기 위한 객체) 생성. write() 메서드를 동작시키는데 필요
  const bufferedImage = await meal.image.arrayBuffer(); // arrayBuffer() 메서드: 이미지 데이터를 원시 바이너리 데이터의 형태로 변환하여, 이를 다루거나 다른 형태로 변환할 수 있게 해준다

  // write() 메서드: 데이터를 작성. 인자로 작성할 데이터, error를 받는다
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('이미지 저장에 실패했습니다!');
    }
  });

  // 이미지 파일을 DB에 저장하지 않게 하기 위해서 이미지 파일의 경로만 저장. meal 객체에 저장된 image를 저장된 이미지의 경로로 덮어쓴다
  meal.image = `/images/${fileName}`;

  // DB에 저장하기
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
    `
  ).run(meal);
}

/* 💡 이미지는 DB가 아니라 파일 시스템에 저장되어야 한다
  파일을 DB에 저장하는 것은 좋지 않다. DB의 제작 목적이 파일의 저장이 아니므로, 성능에 좋지 않기 때문
  그래서, 업로드된 파일을 public 폴더에 저장한다
*/
