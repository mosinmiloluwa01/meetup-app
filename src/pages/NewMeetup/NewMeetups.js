import { useNavigate } from "react-router-dom";

import MeetupForm from "../../components/reusables/MeetupForm/MeetupForm";
import { API_URL } from "../../data/constants/constants";
import classes from "./NewMeetup.module.scss";

const NewMeetups = () => {
  const navigate = useNavigate();
  const handleMeetupRequest = (meetupData) => {
    fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("response: " + response.json());
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log("error: " + error.json());
      });
  };
  return (
    <div className={`${classes.newMeetupContainer}`}>
      <h1 className={`mainTitle`}>New Meetup</h1>
      <MeetupForm onAddMeetup={handleMeetupRequest}></MeetupForm>
    </div>
  );
};

export default NewMeetups;
