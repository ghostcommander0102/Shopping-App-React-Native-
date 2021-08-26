import { connect } from 'react-redux'
import LoginScreen from './LoginScreen'
import { login } from "../../actions/auth";

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {isAuthenticated: state.auth.isAuthenticated}
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onLogin: (props) => {
            dispatch(login(props))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(LoginScreen)