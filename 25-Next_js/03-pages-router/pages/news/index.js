// localhost:3000/news

import Link from 'next/link'; // 새로고침 없는 싱글 페이지 애플리케이션 구축 가능. Next.js에서는 a 태그 대신 사용하는 편이 낫다
import { Fragment } from 'react';

export default function NewsPage() {
  return (
    <Fragment>
      <h1>뉴스 페이지</h1>
      <ul>
        <li>
          <Link href=" /news/nextjs-is-a-great-framework">
            Next.js는 엄청난 프레임워크에요
          </Link>
        </li>

        <li>이것저것</li>
      </ul>
    </Fragment>
  );
}
