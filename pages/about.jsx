import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data/about";
import React from "react";
import AboutData from "../mapData/aboutData";
import { useState } from "react";


const About = () => {

  const [inform, setInform] = useState(data)

  const aboutElements = inform.map(element => (
    <AboutData
      key={element.id}
      title={element.title}
      inform={element.inform}
    />
  ))

  return (
    <>
      <Head>
        <title>My Portfolio | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="about">
        <div className={styles.container}>
          <h1 className={styles.head}>About Me</h1>
          <div className="about-items">
            {aboutElements}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
