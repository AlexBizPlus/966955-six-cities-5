import React from "react";
import {myPropTypes as PropTypes} from "../../prop";
import {Route, Redirect} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {AuthorizationStatus, Routes} from "../../const";

const PrivateRoute = ({path, exact, component: Component}) => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => authorizationStatus === AuthorizationStatus.AUTH
        ? <Component {...props} />
        : <Redirect to={Routes.LOGIN} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.exact,
  path: PropTypes.path,
  component: PropTypes.component,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export default connect(mapStateToProps)(PrivateRoute);
