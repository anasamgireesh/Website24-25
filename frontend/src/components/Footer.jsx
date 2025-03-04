import React from 'react'
import styles from '../components/Footer.module.css'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className={styles.body}>
        <div className={styles.accounts}>
            <a href='' className={styles.account}><FaYoutube/></a>
            <a href='' className={styles.account}><FaInstagram/></a>
            <a href='' className={styles.account}><FaFacebook/></a>
            <a href='' className={styles.account}><FaLinkedin/></a>
        </div>
        <div className={styles.text}>Copyright © NSS NIT Trichy, 2023</div>
    </div>
    </>
  )
}

export default Footer