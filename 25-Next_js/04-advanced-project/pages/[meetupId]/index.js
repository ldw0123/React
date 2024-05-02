// 동적 페이지

import MeetupDetail from '@/components/meetups/MeetupDetail';

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRciG1cJNU2FQOPpOBcaAw9NCxixEPfW_YQSXHhfVOkitN0ZFQ1_Bf_vcWepNDleYklz0zA7jbfQ6FlK5NDQ6v5MvP8cDUN28F8UX0rtw"
      title="First Meetup"
      address="Some Street 5, Seoul City"
      description="The first meetup"
    />
  );
}

// getStaticPaths(): 동적 라우팅을 사용하는 페이지에서 정적 생성을 할 때 사용되는 함수. 빌드 시에 어떤 경로들이 미리 렌더링 되어야 하는지 결정하는데 사용
export async function getStaticPaths() {
  return {
    // fallback: false이면, paths에 정의되지 않은 모든 경로는 404 페이지로 이동. true이면, 사용자가 요청한 경로가 paths에 없을 경우, 사용자에게 빈 페이지를 보여줌
    // paths: 미리 렌더링할 경로들의 배열
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

// getStaticProps(): 빌드 시에 데이터를 미리 가져와서 페이지를 미리 렌더링하는 데 사용되는 함수
export async function getStaticProps(context) {
  // single meetup에 데이터를 가져오기(fetch)
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRciG1cJNU2FQOPpOBcaAw9NCxixEPfW_YQSXHhfVOkitN0ZFQ1_Bf_vcWepNDleYklz0zA7jbfQ6FlK5NDQ6v5MvP8cDUN28F8UX0rtw',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Seoul City',
        description: 'The first meetup',
      },
    },
  };
}
