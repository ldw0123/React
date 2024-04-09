// main-header 컴포넌트를 client component로 변환하지 않기 위해 링크만 따로 컴포넌트 분리
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const path = usePathname(); // Next.js에서 제공하는 훅. 현재 활동 경로를 도메인 다음 부분에 준다

  return (
    /* path.startsWith('/meals'): usePathname에서 가져오는 경로가 /meals로 시작하는 경우. 중첩된 페이지가 있을 때 유용함 */
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
