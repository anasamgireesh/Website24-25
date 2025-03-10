import React from "react";
import styles from "../pages/Events_admin.module.css";
import { SlCalender } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function Events_admin() {
  return (
    <>
      {/* NavBar*/}
      <div className={styles.navbar}>Nav_bar</div>

      <div className={styles.body}>
        {/* Create new event button*/}
        <div className={styles.new_event_create_button}>
          <a href="/" className={styles.new_event_create_link}>
            Create New Event…
          </a>
        </div>

        {/* All events list and each event details*/}
        <div className={styles.all_events_list_details}>
          <div className={styles.all_events_list}>

            {/*Event 2 */}
            <div className={styles.event1}>
              {/* Event 1 image */}
              <div className={styles.event1_image}>
                <img src="" alt="" />
              </div>
              {/* Event 1 details */}
              <div className={styles.event1_details}>
                <div className={styles.event1_date_name}>
                  <div className={styles.event1_name}>NSS Blood Camp</div>
                  <div className={styles.event1_date}>
                    {" "}
                    <SlCalender />
                    12/10/24
                  </div>
                </div>
                <div className={styles.event1_reg_time}>
                  <div className={styles.event1_reg}>
                    <IoMdPerson />
                    200 Registered
                  </div>
                  <div className={styles.event1_time}>
                    <IoTimeOutline /> 8 Days left
                  </div>
                </div>
              </div>
            </div>
            
            {/*Event 2 */}
            <div className={styles.event1}>
              {/* Event 1 image */}
              <div className={styles.event1_image}>
                <img src="" alt="" />
              </div>
              {/* Event 1 details */}
              <div className={styles.event1_details}>
                <div className={styles.event1_date_name}>
                  <div className={styles.event1_name}>NSS Blood Camp</div>
                  <div className={styles.event1_date}>
                    {" "}
                    <SlCalender />
                    12/10/24
                  </div>
                </div>
                <div className={styles.event1_reg_time}>
                  <div className={styles.event1_reg}>
                    <IoMdPerson />
                    200 Registered
                  </div>
                  <div className={styles.event1_time}>
                    <IoTimeOutline /> 8 Days left
                  </div>
                </div>
              </div>
            </div>

            {/*Event 3*/}
            <div className={styles.event1}>
              {/* Event 1 image */}
              <div className={styles.event1_image}>
                <img src="" alt="" />
              </div>
              {/* Event 1 details */}
              <div className={styles.event1_details}>
                <div className={styles.event1_date_name}>
                  <div className={styles.event1_name}>NSS Blood Camp</div>
                  <div className={styles.event1_date}>
                    {" "}
                    <SlCalender />
                    12/10/24
                  </div>
                </div>
                <div className={styles.event1_reg_time}>
                  <div className={styles.event1_reg}>
                    <IoMdPerson />
                    200 Registered
                  </div>
                  <div className={styles.event1_time}>
                    <IoTimeOutline /> 8 Days left
                  </div>
                </div>
              </div>
            </div>

            {/*Event 4*/}
            <div className={styles.event1}>
              {/* Event 1 image */}
              <div className={styles.event1_image}>
                <img src="" alt="" />
              </div>
              {/* Event 1 details */}
              <div className={styles.event1_details}>
                <div className={styles.event1_date_name}>
                  <div className={styles.event1_name}>NSS Blood Camp</div>
                  <div className={styles.event1_date}>
                    
                    <SlCalender />
                    12/10/24
                  </div>
                </div>
                <div className={styles.event1_reg_time}>
                  <div className={styles.event1_reg}>
                    <IoMdPerson />
                    200 Registered
                  </div>
                  <div className={styles.event1_time}>
                    <IoTimeOutline /> 8 Days left
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.all_events_details}>
            {/* Event name image place time date*/}
            <div className={styles.each_event_details}>
              <div className={styles.each_event_image_name}>
                <div className={styles.each_event_image}>
                  {" "}
                  <img src="" alt="" />{" "}
                </div>
                <div className={styles.each_event_name}> NSS Blood Camp</div>
              </div>
              <div className={styles.each_event_date_place}>
                <div className={styles.each_event_date}>
                  {" "}
                  <SlCalender />
                  12/10/24
                </div>
                <div className={styles.each_event_place}>
                  {" "}
                  <FaLocationDot />
                  NITT Hospital
                </div>
              </div>
              <div className={styles.each_event_time}>
                {" "}
                <IoTimeOutline /> 9.00AM to 5.00PM
              </div>
            </div>

            {/* Event name image place time date*/}
            <div className={styles.each_event_details}>
              <div className={styles.each_event_content_objectives}>
                <div className={styles.each_event_content}>
                  A <strong>Blood Donation Camp</strong> is a community-driven
                  initiative aimed at saving lives by collecting blood from
                  willing donors. These camps are often organized by hospitals,
                  non-governmental organizations (NGOs), or groups such as the
                  National Service Scheme (NSS), in collaboration with blood
                  banks and healthcare institutions.
                </div>
                <div className={styles.each_event_objectives}>
                  <div className={styles.objectives_title}>Objectives</div>
                  <div className={styles.each_event_objectives_details}>
                    <ol>
                      <li>
                        <strong>Save Lives:</strong> Blood collected is used to
                        save patients undergoing surgeries, trauma victims,
                        cancer patients, and those suffering from severe anemia
                        or blood disorders.
                      </li>
                      <li>
                        <strong>Raise Awareness:</strong> Educating people about
                        the importance of regular blood donation and its
                        positive impact on society.
                      </li>
                      <li>
                        <strong>Promote Health:</strong> Encouraging individuals
                        to adopt a lifestyle that enables them to be eligible
                        donors.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.each_event_details}>
              <div className={styles.event_reg_count}> Registration count - 200</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events_admin;
