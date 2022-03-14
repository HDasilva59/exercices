import React from "react";

const CardBody = (props) => {
  const [hidden, isHidden] = React.useState(0);

  return (
    <div className="card-body">
      <img src={props.cover} />
      {zeldaGenres(props.genres)}
      <p>{props.firstReleaseDate}</p>
      <p>{props.summary}</p>
      <div>
        <button onClick={() => isHidden(hidden + 1)}>Click me to {hideOrShow(hidden, props)} the screenshots</button>
        {results(hidden)}
      </div>
    </div>
  );
};

export default CardBody;

function zeldaGenres(genres) {
  return <p>{genres.map((element) => element.name)}</p>;
}

function results(isHidden, props) {
  if (isHidden % 2 === 0) {
    {
      return props.screenshots.map((element) => {
        <img key={element.url + "screenshot"} src={element.url} />;
      });
    }
  } else {
    return;
  }
}

function hideOrShow(hidden) {
  if (hidden % 2 === 0) {
    return "hide";
  } else {
    return "show";
  }
}
