import { connect } from 'react-redux'
import DrawerContainer from './DrawerContainer'
// import { getProducts } from "../../actions/product";
// import { AsyncStorage } from 'react-native';
import { logout } from '../../actions/auth'
const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {
        // categories: state.categories.categories
        user: state.auth.user
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        logOut: (props) => {
            dispatch(logout(props))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerContainer)