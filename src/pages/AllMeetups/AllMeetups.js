import { useState, useEffect } from "react";

import MeetupList from "../../components/reusables/MeetupList/MeetupList";
import { API_URL } from "../../data/constants/constants";
import classes from "./AllMeetups.module.scss";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => {
        console.log("error: " + error.json());
      });
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }
  return (
    <div className={classes.meetupListContainer}>
      <h1 className="mainTitle">All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;
