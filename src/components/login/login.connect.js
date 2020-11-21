import {loginAction} from "../../store/actions/user-actions";

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (params) => dispatch(loginAction(params)),
  };
};

export default mapDispatchToProps;
