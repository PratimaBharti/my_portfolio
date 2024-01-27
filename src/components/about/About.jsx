import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/pratima_resume.pdf";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            {/* <span className="section__subtitle">My Introduction</span> */}
        
            <div className="about__container container grid">
            <h3 className="contact__title">Let me introduce myself</h3>
                
                <div className="about__box">

                I love programming, and throughout my journey, I have gained a solid understanding
                 of various programming languages such as C,C++, JavaScript,Python,Socket Programming.My main areas of interest 
                  revolves around Security,Web applications as well as exploring the potential use of blockchain technology in various fields.

                </div>
            </div>
        </section>
    )
}

export default About;