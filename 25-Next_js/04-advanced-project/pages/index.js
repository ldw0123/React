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
      'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQnY0F0cjQSVLuQfrHpu0DBpw4f999fpShw11XzBTl25pcaQllopm4KPw7Jtqde0rEybMBCKGXpZLiG4G5Q3kOAPJuzSilu_X86nnfFsA',
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
