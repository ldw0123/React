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
