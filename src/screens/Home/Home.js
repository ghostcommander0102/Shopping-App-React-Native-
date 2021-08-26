import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'
import { getCategories, setCategory, setSubCategory } from "../../actions/categories";
import { AsyncStorage } from 'react-native';
import { getRecentProducts, getProduct } from '../../actions/product';

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {
        token: state.auth.token,
        categories: state.categories.categories,
        recent_products: state.product.recent_products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        getCategories: (props) => {
            dispatch(getCategories(props))
        },
        setCategory: (props) => {
            dispatch(setCategory(props));
        },
        getRecentProducts: (props) => {
            dispatch(getRecentProducts(props));
        },
        getProduct: (props) => {
            dispatch(getProduct(props))
        },
        setSubCategory: (props) => {
            dispatch(setSubCategory(props))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)