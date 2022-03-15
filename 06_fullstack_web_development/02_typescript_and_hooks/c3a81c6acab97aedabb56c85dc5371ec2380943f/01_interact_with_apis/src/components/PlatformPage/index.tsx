import React from "react";

const PlatformPage = () => {
  const [platforms, setPlaforms] = React.useState([null]);
  const [slug, setSlug] = React.useState([null]);

  React.useEffect(() => {
    fetch("https://videogame-api.fly.dev/platforms", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        return myJson.platforms;
      })
      .then((platform) => {
        if (Array.isArray(platform)) {
          setPlaforms(platform.map((element) => element.name));
          setSlug(platform.map((element) => element.slug));
        }
      });
    return () => {
      console.log("oui");
    };
  }, []);

  return (
    <>
      {platforms.map((element) => (
        <li key={element + "listeplatforms"} onClick={}>
          {element}
        </li>
      ))}
    </>
  );
};

export default PlatformPage;
