import { connect } from 'react-redux'
import ProfileScreen from './ProfileScreen'
import { update } from "../../actions/auth";

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return { 
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdate: (props) => {
            dispatch(update(props))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileScreen)