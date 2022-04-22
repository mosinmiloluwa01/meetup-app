import "./MeetupList.scss";
import MeetupItem from "../MeetupItem/MeetupItem";

const MeetupList = (props) => {
  return (
    <div className="list">
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetupData={meetup} />
      ))}
    </div>
  );
};

export default MeetupList;
