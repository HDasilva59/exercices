import React from "react";

function CardHeader(props) {
  return (
    <div>
      <p>{props.name}</p>
      {props.platformLogos.map((element) => {
        if (element.slug === undefined) {
          return <img key={element.platform_logo + "platformlogo"} src={element.platform_logo} />;
        } else {
          return <img key={element.platform_logo.url + "platformlogo"} src={element.platform_logo.url} />;
        }
      })}
    </div>
  );
}

export default CardHeader;
