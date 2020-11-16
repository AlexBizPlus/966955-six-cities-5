import React from "react";
import {connect, useSelector, useDispatch} from "react-redux";
import {setActiveCity} from "cityActions";
import classNames from "classnames";
import {CitiesList} from "const";
import "./cities.css";

const Cities = () => {

  const activeCity = useSelector((state) => state.city.activeCity);
  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CitiesList.map((item) => {
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

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {setActiveCity: (city) => dispatch(setActiveCity(city))};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
