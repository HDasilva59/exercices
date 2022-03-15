import React from "react";
import { v4 as uuidv4 } from "uuid";

const CardBody = (props) => {
  const [showScreen, setShowscreen] = React.useState(true);
  return (
    <div>
      <img src={props.cover} />
      <p>{props.firstReleaseDate}</p>
      {props.genres.map((element) => {
        if (element.name === undefined) {
          return <p key={uuidv4()}>{element}</p>;
        } else {
          return <p key={uuidv4()}>{element.genres}</p>;
        }
      })}
      <p>{props.summary}</p>
      <button onClick={() => setShowscreen(!showScreen)}>Click me to {showOrHide(showScreen)}</button>
      {showMyScreens(showScreen, props.screenshots)}
    </div>
  );
};

function showMyScreens(value, values) {
  if (!value) {
    return values.map((element) => <img key={uuidv4()} src={element.url} />);
  } else {
    return;
  }
}

function showOrHide(showScreen) {
  if (showScreen) {
    return "show screenshots";
  } else {
    return "hide screenshots";
  }
}

export default CardBody;
