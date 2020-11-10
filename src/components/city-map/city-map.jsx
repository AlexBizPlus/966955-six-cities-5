import React, {PureComponent} from "react";
import {myPropTypes as PropTypes} from "../../prop";
import L from "leaflet";
import "./city-map.css";

class CityMap extends PureComponent {

  componentDidMount() {
    const {offers} = this.props;

    const city = [52.38333, 4.9];
    const icon = L.icon({
      iconUrl: `../img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = L.map(`mapid`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offers.map((offer) => {
      const offerCords = [];
      offerCords.push(offer[`location`][`latitude`]);
      offerCords.push(offer[`location`][`longitude`]);

      L.marker(offerCords, {icon})
      .addTo(map);
    });
  }

  render() {
    return (
      <div id="mapid"></div>
    );
  }
}

CityMap.propTypes = {
  offers: PropTypes.offers,
};

export default CityMap;
