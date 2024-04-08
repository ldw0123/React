// header 컴포넌트
import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png'; // logo.png 파일을 logoImg 객체로 불러오기
import classes from './main-header.module.css'; // css module 파일을 classes 객체로 불러오기

// Next.js의 img 태그에서는 <img src={logoImg.src} /> 와 같이 logoImg 객체의 src 속성에 접근해야 한다
// 하지만, Image 컴포넌트에서는 <Image src={logoImg} /> 와 같이 logoImg 전체 객체에 접근한다
// priority 속성: 이미지를 우선적으로 로딩하도록 함

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="접시에 담긴 음식" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">식사 탐색</Link>
          </li>
          <li>
            <Link href="/community">음식 커뮤니티</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
