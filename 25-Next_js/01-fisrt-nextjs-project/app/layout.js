// layout.js: page.js를 감싸는 최상위 컴포넌트

import './globals.css';

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// children 속성: 모든 컴포넌트가 사용할 수 있는 속성. 모든 page.js 파일의 내용
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
