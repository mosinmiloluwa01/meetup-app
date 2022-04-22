import { useRef } from "react";
import classes from "./MeetupForm.module.scss";

const MeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const titleInput = titleInputRef.current.value;
    const imageInput = imageInputRef.current.value;
    const addressInput = addressInputRef.current.value;
    const descriptionInput = descriptionInputRef.current.value;

    const meetupData = {
      title: titleInput,
      image: imageInput,
      address: addressInput,
      description: descriptionInput,
    };

    props.onAddMeetup(meetupData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.formDiv}>
        <label>Meetup Title</label>
        <input
          type="text"
          className={`formControl`}
          id="title"
          ref={titleInputRef}
          required
        ></input>
      </div>
      <div className={classes.formDiv}>
        <label>Meetup Image</label>
        <input
          type="url"
          className={`formControl`}
          id="image"
          ref={imageInputRef}
          required
        ></input>
      </div>
      <div className={classes.formDiv}>
        <label>Address</label>
        <input
          type="text"
          className={`formControl`}
          id="title"
          ref={addressInputRef}
          required
        ></input>
      </div>
      <div className={classes.formDiv}>
        <label>Description</label>
        <textarea
          className={`formControl`}
          id="description"
          ref={descriptionInputRef}
          required
        ></textarea>
      </div>
      <div className={classes.buttonRow}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
};

export default MeetupForm;
