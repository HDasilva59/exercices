import React from "react";
import zelda from "../../../data/zelda";
import CardBody from "./body";
import CardFooter from "./footer";
import CardHeader from "./header";

const ProductCard = () => {
  return (
    <div>
      <CardHeader name={zelda.name} platformLogos={zelda.platforms} />
      <CardBody
        cover={zelda.cover}
        summary={zelda.summary}
        screenshots={zelda.screenshots}
        genres={zelda.genres}
        firstReleaseDate={zelda.first_release_date}
      />
      <CardFooter slug={zelda.slug} />
    </div>
  );
};

export default ProductCard;
