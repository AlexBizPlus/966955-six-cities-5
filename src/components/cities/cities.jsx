import React from "react";
import {connect, useSelector, useDispatch} from "react-redux";
import {setActiveCity} from "../../store/actions/city-actions";
import classNames from "classnames";
import {CITIES_LIST} from "../../const";
import "./cities.css";
import mapDispatchToProps from "./cities.connect";

const Cities = () => {

  const activeCity = useSelector((state) => state.CITY.activeCity);
  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LIST.map((item) => {
        return <li className="locations__item" key={item}>
          <button
            type="button"
            className={classNames(`locations__item-link`, `tabs__item`, `button_link`, {"tabs__item--active": item === activeCity})}
            value={item}
            onClick={(evt) => dispatch(setActiveCity(evt.currentTarget.value))}
          >
            <span>{item}</span>
          </button>
        </li>;
      })}
    </ul>
  );
};

const mapStateToProps = ({CITY}) => {
  return {
    activeCity: CITY.activeCity
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cities);
