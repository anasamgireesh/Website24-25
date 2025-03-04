import React from 'react'
import styles from '../pages/About_us.module.css'
import { FaUserCircle } from "react-icons/fa";
import Footer from '../components/Footer';


function About_us() {
  return (
    <>
    <body>
    <header className={styles.navbar}>
        <nav>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Members</a></li>
          </ul>
        </nav>
        <div className={styles.user_icon}><FaUserCircle /></div>
    </header>
    <div className={styles.main_content}>
        <div className={styles.grid_container}>
            <div  className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
        </div>
        <div className={styles.grid_container}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
        </div>
        <div className={styles.grid_container}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
        </div>
        <div className={styles.grid_container}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
        </div>

        <div className={styles.main_content}>
            <div className={styles.content_section}>
            <h1>NSS at NITT</h1>
                <p>
                    The National Service Scheme (NSS) is a mandatory and integral part of the academic curriculum at the National Institute of Technology. 
                    Tiruchirappalli (NIT-T). It is designed to instill social responsibility and community engagement in students. NSS encourages active 
                    participation in community development, enriching academic knowledge, and fostering a positive contribution to society.
                </p><br/>
                <p>
                    NSS at NIT-T is actively involved in the upliftment of surrounding villages, promoting government initiatives like Jai Shakti, Ek Bharat 
                    Shreshtha Bharat, and Swachh Bharat. Additionally, the NSS unit conducts awareness sessions on personal hygiene, benefiting the 
                    community's overall well-being. The NSS NIT-T unit has adopted several villages, including Thirunedungulam, Arasangudi, 
                    Vasalivannankottai, Pathalaiapatti, and Thondaimanpatti.
                </p><br/>
                <p>
                    National Service Scheme (NSS) at NIT Tiruchirappalli exemplifies its commitment to social responsibility through regular 
                    and impactful initiatives. One of its flagship activities involves volunteers dedicating their time and effort to teaching children at REC Middle 
                    School, located on the campus. This initiative not only strengthens the educational foundation of young minds but also fosters 
                    a meaningful connection between the students of NIT-T and the local community.
                </p><br/>
                <p>
                    At the National Institute of Technology, Tiruchirappalli (NITT), the National Service Scheme (NSS) operates as a student-driven 
                    organization aimed at fostering social responsibility and holistic development among students. Here's an overview of how NSS NITT functions:

                </p><br/>
                

                <h1 className={styles.information}>Activities and Initiatives</h1>

                <table>
                    <tr>
                        <td className={styles.table_background1}>
                            <h3>Community Outreach</h3>
                            <p>Organizing awareness drives on health, education, and environmental issues.</p>
                            <p>Conducting blood donation camps, eye check-up & donation camps, and health check-up drives.</p>
                            <p>Supporting underprivileged communities through educational and developmental programs.</p>
                        </td>
                        <td className={styles.table_background2}>
                            <h3>Environmental Conservation</h3>
                            <p>Tree plantation drives.</p>
                            <p>Cleanliness campaigns under the Swachh Bharat Abhiyan.</p>
                            <p>Promoting sustainable practices like waste segregation and energy conservation.</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.table_background2}>
                            <h3>Special Campaigns</h3>
                            <p>Organizing rallies, marathons, and events for causes like road safety, gender equality, and climate change.</p>
                            <p>Observing national and international days of importance like NSS Day, Earth Day, etc.</p>
                        </td>
                        <td className={styles.table_background1}>
                            <h3>Skill Development</h3>
                            <p>Workshops for teaching basic computer literacy, soft skills, and vocational training to nearby communities.</p>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.table_background1}>
                            <h3>Disaster Relief</h3>
                            <p>Participating in relief efforts during natural disasters, such as distributing aid and organizing rehabilitation programs.</p>
                        </td>
                        <td className={styles.table_background2}>
                            <h3>Annual Special Camp</h3>
                            <p>NSS NITT conducts a 7-day special camp annually in nearby villages.</p>
                            <p>Volunteers work on rural development projects, including building infrastructure, promoting hygiene, and creating awareness about social issues.</p>
                        </td>
                    </tr>
                </table>

                <br/>
           <br/>
 
                            <p>The NSS at NIT-T seamlessly integrates academic learning with practical community involvement, providing students with opportunities to apply their knowledge and skills in real-world scenarios. Through this approach, the program cultivates a deep sense of social consciousness, empathy, and responsibility among its volunteers. Students not only enhance their understanding of societal challenges but also develop leadership and problem-solving skills that prepare them to become agents of change.<br/><br/>
                            Moreover, the unit actively aligns its initiatives with government programs and national priorities, participating in campaigns like Swachh Bharat Abhiyan, Digital India, and health awareness drives. By consistently engaging with adopted villages and collaborating with government bodies, NSS contributes to the holistic development of society.<br/><br/>
                            The vision of NSS at NIT-T goes beyond short-term interventions; it aims to build a future where communities thrive through collective efforts. By empowering students and supporting local communities, NSS envisions a society that values compassion, inclusivity, and progress.</p>


            </div>
        </div>


    </div>

    <Footer/>
    </body>
    
    
    </>
  )
}

export default About_us