import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableHighlight,

} from 'react-native';
import styles from './styles';

export default class CategoriesScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "What are you offering?",
        }
    };


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.navigation.setOptions({title: "What are you offering?"});
    }


    onPressSubCategory = (item) => {
        this.props.setSubCategory({ category: item });
		this.props.navigation.navigate('CreateAdsSubCategory');
    };

    renderCategory = ({ item, index }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressSubCategory(item)}>
            <View style={[styles.itemcontainer, (index % 2) == 0 ? styles.itemRightBorder : ""]}>
                <Image style={styles.categoriesPhoto} source={require('../../../assets/img/logo1.png')} />
                <Text style={styles.categoriesName}>{item.Title}</Text>
            </View>
        </TouchableHighlight>
    );


    render() {
        return (
            <View  style={styles.container}>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={this.props.categories}
                    renderItem={this.renderCategory}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        );
    }
}
