// localhost:3000/new-meetup
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    // API 경로로 request 보내기
    // 인자 1: api/new-meetup.js 파일의 절대 경로로 생성
    // 인자 2: request를 구성할 객체
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace('/');
  }

  // props로 실행 결과가 아니라, 포인터를 넣어주기 때문에 함수에 괄호가 없다
  return (
    <Fragment>
      <Head>
        <title>새로운 Meetup 추가</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
