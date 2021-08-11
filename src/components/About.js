import React from "react";
import Links from "./Links"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {displayBio(props)}
      {/* {props.bio ? <p>{props.bio}</p> : null} */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.links.linkedin} github={props.links.github} />
    </div>
  );
}

function displayBio(props) {
  if (props.bio) {
    return <p>{props.bio}</p>
  }
}

export default About;
