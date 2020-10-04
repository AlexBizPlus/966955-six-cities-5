import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {RENTAL_OFFERS_NUMBER} from "./const";

ReactDOM.render(
    <App rentalOffersNumber={RENTAL_OFFERS_NUMBER} />,
    document.querySelector(`#root`)
);
