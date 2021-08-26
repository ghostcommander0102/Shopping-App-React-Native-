import { connect } from 'react-redux'
import CreateAdsSubCategoryScreen from './CreateAdsSubCategoryScreen'
import { setCategory } from '../../actions/categories'
const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        category: state.categories.subcategories
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        setCategory: (props) => {
            dispatch(setCategory(props));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateAdsSubCategoryScreen)