// 시작 페이지 localhost:3000/
import MeetupList from '@/components/meetups/MeetupList';

// 더미 데이터
const DUMMY_MEETUPS = [
  {
    id: '1',
    title: 'A First Meetup',
    image:
      'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRciG1cJNU2FQOPpOBcaAw9NCxixEPfW_YQSXHhfVOkitN0ZFQ1_Bf_vcWepNDleYklz0zA7jbfQ6FlK5NDQ6v5MvP8cDUN28F8UX0rtw',
    address: 'some address 5, Seoul City',
    description: 'This is a first meetup!',
  },
  {
    id: '2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Universal-Islands-of-Adventure-Harry-Potter-Castle-9182.jpg/2560px-Universal-Islands-of-Adventure-Harry-Potter-Castle-9182.jpg',
    address: 'some address 10, Busan City',
    description: 'This is a second meetup!',
  },
];

export default function HomePage() {
  return (
    <>
      <h1>홈페이지</h1>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}
