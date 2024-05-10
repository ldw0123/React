// 동적 페이지

import MeetupDetail from '@/components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

// getStaticPaths(): 동적 라우팅을 사용하는 페이지에서 정적 생성을 할 때 사용되는 함수. 빌드 시에 어떤 경로들이 미리 렌더링 되어야 하는지 결정하는데 사용
export async function getStaticPaths() {
  // MongoDB에 연결
  const client = await MongoClient.connect(
    'mongodb+srv://ldw0123:<password>@cluster0.fc5z6ma.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );

  const db = client.db(); // meetups에 연결 중인 데이터베이스를 확보

  const meetupsCollection = db.collection('meetups'); // collection: SQL DB에 있는, 여러 문서를 보관하고 있는 테이블

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // fallback: false이면, paths에 정의되지 않은 모든 경로는 404 페이지로 이동. true이면, 사용자가 요청한 경로가 paths에 없을 경우, 사용자에게 빈 페이지를 보여줌
    // paths: 미리 렌더링할 경로들의 배열
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

// getStaticProps(): 빌드 시에 데이터를 미리 가져와서 페이지를 미리 렌더링하는 데 사용되는 함수
export async function getStaticProps(context) {
  // single meetup에 데이터를 가져오기(fetch)
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://ldw0123:<password>@cluster0.fc5z6ma.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  // findOne(): 하나의 문서를 찾는 메서드
  // ObjectId(): MongoDB에서는 id값을 이상하고 긴 문자열로 저장하므로, 이를 문자열에서 객체로 변환해야 한다
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}
