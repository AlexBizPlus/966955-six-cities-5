import React, {PureComponent} from "react";
import {myPropTypes as PropTypes} from "../../prop";
import Card from "../card/card";

class Cards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: 0,
    };
  }

  render() {
    const {offers, classes} = this.props;

    return (
      offers.map((offer, i) => {
        return <Card
          offer={offer}
          key={i}
          classes={classes}
          showActiveCard={(id) => {
            this.setState(() => {
              return {
                activeCard: id
              };
            });
          }}
        />;
      })
    );
  }
}

Cards.propTypes = {
  offers: PropTypes.offers,
  classes: PropTypes.classes,
};

export default Cards;
