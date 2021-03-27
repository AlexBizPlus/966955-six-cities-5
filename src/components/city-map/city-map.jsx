import React, {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {myPropTypes as PropTypes} from "@prop";
import L from "leaflet";
import "./city-map.css";
import {ICON_URL, ICON_ACTIVE_URL, ICON_SIZE} from "@const";

const CityMap = ({mode}) => {

  const activeCity = useSelector((state) => state.CITY.activeCity);
  const offer = useSelector((state) => state.HOTELS.offer);
  const mapElement = useRef();

  const offers = mode === `cities`
    ? useSelector((state) => state.HOTELS.hotels).filter((item) => item.city.name === activeCity)
    : useSelector((state) => state.HOTELS.nearby);

  const hover = mode === `cities`
    ? useSelector((state) => state.MAP.hover)
    : [0, 0];

  useEffect(() => {
    if (mapElement.current) {
      mapElement.current.remove();
    }
    if (offers && offers.length > 0) {
      const cityCoordX = offers[0].city.location.latitude;
      const cityCoordY = offers[0].city.location.longitude;

      const city = [cityCoordX, cityCoordY];
      const hotelIcon = L.icon({
        iconUrl: ICON_URL,
        iconSize: ICON_SIZE
      });
      const activeIcon = L.icon({
        iconUrl: ICON_ACTIVE_URL,
        iconSize: ICON_SIZE
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

      offers.map((offerItem) => {

        const offerCords = [offerItem.location.latitude, offerItem.location.longitude];
        const hotelMarker = L.marker(offerCords, {icon: hotelIcon});

        if (offerCords[0] === hover[0] && offerCords[1] === hover[1] && mode === `cities`) {
          hotelMarker.setIcon(activeIcon);
        }

        hotelMarker.addTo(map);
      });

      if (mode === `offer`) {
        L.marker([offer.location.latitude, offer.location.longitude], {icon: activeIcon}).addTo(map);
      }

      mapElement.current = map;
    }
  }, [offers, hover]);

  return (
    <div id="mapid" ></div>
  );
};

CityMap.propTypes = {
  mode: PropTypes.mode,
};

export default CityMap;
