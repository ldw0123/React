// localhost:3000/new-meetup
import NewMeetupForm from '@/components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  function addMeetupHandler() {}

  // props로 실행 결과가 아니라, 포인터를 넣어주기 때문에 함수에 괄호가 없다
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
