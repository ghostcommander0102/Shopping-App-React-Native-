import { connect } from 'react-redux'
import SignupScreen from './SignupScreen'
import { register } from "../../actions/auth";

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {isAuthenticated: state.auth.isAuthenticated}
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onRegister: (props) => {
            dispatch(register(props))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SignupScreen)