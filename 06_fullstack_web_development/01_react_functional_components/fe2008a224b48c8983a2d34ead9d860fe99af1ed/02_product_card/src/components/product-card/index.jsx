import React from "react";
import CardBody from "./body";
import CardFooter from "./footer";
import CardHeader from "./header";

const ProductCard = (props) => {
  return (
    <div>
      <CardHeader name={props.product.name} platformLogos={props.product.platforms} />
      <CardBody
        cover={props.product.cover.url}
        firstReleaseDate={props.product.first_release_date}
        genres={props.product.genres}
        screenshots={props.product.screenshots}
        summary={props.product.summary}
      />
      <CardFooter slug={props.product.slug} />
    </div>
  );
};

export default ProductCard;
