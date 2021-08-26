import { connect } from 'react-redux'
import ProductScreen from './ProductScreen'
// import { getProducts } from "../../actions/product";
// import { AsyncStorage } from 'react-native';

const mapStateToProps = (state) => {
    // console.log(state.auth)
    return {
        token: state.auth.token,
        product: state.product.product,
        category: state.categories.category,
        loading: state.product.loading
    }
}

// const mapDispatchToProps = (dispatch,props) => {
//     return {
//         getProduct: (props) => {
//             dispatch({type: })
//         }
//     }
// }

export default connect(
    mapStateToProps
)(ProductScreen)