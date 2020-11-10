import React from "react";
import {connect, useSelector, useDispatch} from "react-redux";
import {setActiveCity} from "../../store/actions/city-actions";
import classNames from "classnames";
import {myPropTypes as PropTypes} from "../../prop";
import {CitiesList} from "../../const";
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

Cities.propTypes = {
  offers: PropTypes.offers,
  classes: PropTypes.classes,
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
