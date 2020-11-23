import {connect} from "react-redux";
import {loginAction} from "@actions/user-actions";
import Login from "./login";

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (params) => dispatch(loginAction(params)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
