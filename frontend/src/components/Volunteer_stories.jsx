import React from "react";
import styles from "./Volunteer_stories.module.css";

function Volunteer_stories(props) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.stories}>
          <div className={styles.image}>
            <img src="" alt="" />
          </div>
          <div className={styles.story}>
            {props.story}
          </div>
          <div className={styles.name}>{props.name}</div>
        </div>
      </div>
    </>
  );
}

export default Volunteer_stories;
