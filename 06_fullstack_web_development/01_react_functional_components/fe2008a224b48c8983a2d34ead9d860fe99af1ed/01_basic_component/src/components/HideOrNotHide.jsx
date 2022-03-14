import React from "react";

export const HideOrNotHide = () => {
  const [hidden, isHidden] = React.useState(0);

  return (
    <div>
      <button onClick={() => isHidden(hidden + 1)}>Click me to {hideOrShow(hidden)}</button>
      {results(hidden)}
    </div>
  );
};

function results(isHidden) {
  if (isHidden % 2 === 0) {
    return (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum quia dicta odio! Iste voluptates
        exercitationem velit ducimus minus dolores atque sint! Vel, iusto ab! Dignissimos repudiandae architecto ut
        adipisci?
      </p>
    );
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
