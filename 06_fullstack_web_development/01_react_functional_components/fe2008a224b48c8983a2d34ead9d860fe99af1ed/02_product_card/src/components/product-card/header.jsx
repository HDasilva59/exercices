import React from "react";

function CardHeader(props) {
  return (
    <div className="card-header">
      <p>{props.name}</p>
      {logoPlatforms(props.platformLogos)}
    </div>
  );
}

function logoPlatforms(platfomsArray) {
  return platfomsArray.map((element) => <img key={element.platform_logo + "logo"} src={element.platform_logo} />);
}

export default CardHeader;
