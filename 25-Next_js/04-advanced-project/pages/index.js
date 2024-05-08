// 시작 페이지 localhost:3000/
import MeetupList from '@/components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

// 더미 데이터
// const DUMMY_MEETUPS = [
//   {
//     id: '1',
//     title: 'A First Meetup',
//     image:
//       'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRciG1cJNU2FQOPpOBcaAw9NCxixEPfW_YQSXHhfVOkitN0ZFQ1_Bf_vcWepNDleYklz0zA7jbfQ6FlK5NDQ6v5MvP8cDUN28F8UX0rtw',
//     address: 'some address 5, Seoul City',
//     description: 'This is a first meetup!',
//   },
//   {
//     id: '2',
//     title: 'A Second Meetup',
//     image:
//       'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQnY0F0cjQSVLuQfrHpu0DBpw4f999fpShw11XzBTl25pcaQllopm4KPw7Jtqde0rEybMBCKGXpZLiG4G5Q3kOAPJuzSilu_X86nnfFsA',
//     address: 'some address 10, Busan City',
//     description: 'This is a second meetup!',
//   },
// ];

export default function HomePage(props) {
  /*
  // 컴포넌트의 상태를 관리할 때, useState Hook을 사용
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect는 컴포넌트 함수가 실행되고 난 "이후"에 실행되는 방식으로 작동
  // 일반적으로 페이지가 렌더링 될 때 HTTP 요청을 보내려면, useEffect Hook을 사용
  useEffect(() => {
    // HTTP 요청(request)을 보내고, 데이터를 가져옴(fetch)
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
  */

  return <MeetupList meetups={props.meetups} />;
}

/*
  Next.js는 기본적으로 이미 정적 페이지(static page)를 생성한다
  하지만 데이터를 기다려야 한다면(비동기) 즉, 페이지 컴포넌트에 데이터를 가져와서 추가해야 한다면 페이지 컴포넌트 파일 안에서 특수 함수인 getStaticProps() (정해진 이름!)를 export로 내보내면 된다
  이는 페이지 컴포넌트 파일에서만 작동한다. pages 폴더 안의 컴포넌트 파일들에서만 작동한다! 
*/

// getStaticProps() 함수 안에서는 서버에서만 돌아가는 어떤 코드든지 전부 실행할 수 있다
// 파일 시스템에 접근 가능하고, 데이터베이스에 연결할 수도 있다. 함수 안의 코드는 서버에서도, 클라이언트 측에서도 절대 실행되지 않는다

export async function getStaticProps() {
  // API에서 데이터를 가져오기
  // 항상 객체를 반환한다
  /* props 객체 프로퍼티 설정
    이 함수에서 DUMMY_MEETUPS를 읽어들이고 준비한 다음, 이 페이지 컴포넌트에서 사용할 props로 설정된다. 따라서, 이 페이지 컴포넌트에서는 더 이상 상태를 관리할 필요가 없고, useEffect도 필요하지 않다 */
  /* revalidate 프로퍼티
    '수'초 마다 페이지를 새로 생성. 배포 후 서버에서 때때로 다시 사전 생성한다. 그러니 일부 데이터가 변경되었다고 해서 매번 다시 빌드하고 배포할 필요가 없음 */

  // MongoDB에 연결
  const client = await MongoClient.connect(
    'mongodb+srv://ldw0123:<password>@cluster0.fc5z6ma.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );

  const db = client.db(); // meetups에 연결 중인 데이터베이스를 확보

  const meetupsCollection = db.collection('meetups'); // collection: SQL DB에 있는, 여러 문서를 보관하고 있는 테이블

  const meetupsData = await meetupsCollection.find().toArray(); // 해당 컬렉션에 있는 모든 문서를 찾는다

  client.close();

  // MongoDB 가져온 데이터
  return {
    props: {
      meetups: meetupsData.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // 10초 마다 페이지 다시 생성
  };
}

// getServerSideProps() 함수: 요청이 들어올 때마다 페이지를 다시 생성
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // API에서 데이터를 가져오기
//   return {
//     props: {
//       DUMMY_MEETUPS,
//     },
//   };
// }
