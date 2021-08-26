import { connect } from 'react-redux'
import CategoriesScreen from './CategoriesScreen'
import { setSubCategory } from '../../actions/categories'
const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        categories: state.categories.categories,
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        setSubCategory: (props) => {
            dispatch(setSubCategory(props))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesScreen)