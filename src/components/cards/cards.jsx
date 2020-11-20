import React from "react";
import {myPropTypes as PropTypes} from "../../prop";
import Card from "../card/card";

const Cards = ({offers, classes, style}) => {

  return (
    <>
      { offers.map((offer, i) => {
        return <Card
          offer={offer}
          key={i}
          classes={classes}
          style={style}
        />;
      })}
    </>
  );
};

Cards.propTypes = {
  offers: PropTypes.offers,
  classes: PropTypes.classes,
  style: PropTypes.style,
};

export default Cards;
