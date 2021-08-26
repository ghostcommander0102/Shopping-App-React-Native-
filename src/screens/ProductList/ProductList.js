import { connect } from 'react-redux'
import ProductListScreen from './ProductListScreen'
import { getProducts, getProduct } from "../../actions/product";
import { AsyncStorage } from 'react-native';

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {
        token: state.auth.token,
        products: state.product.products,
        category: state.categories.category,
        loading: state.product.loading
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        getProducts: (props) => {
            dispatch(getProducts(props))
        },
        getProduct: (props) => {
            dispatch(getProduct(props))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ProductListScreen)