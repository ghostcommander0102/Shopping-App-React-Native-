import { connect } from 'react-redux'
import AdsListScreen from './AdsListScreen'
import { getAdsProducts, getProduct } from "../../actions/product";

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        products: state.product.adsproducts,
        category: state.categories.category,
        loading: state.product.loading
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        getAdsProducts: (props) => {
            dispatch(getAdsProducts(props))
        },
        getProduct: (props) => {
            dispatch(getProduct(props))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdsListScreen)