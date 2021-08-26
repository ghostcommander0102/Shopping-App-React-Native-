import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableHighlight,

} from 'react-native';
import styles from './styles';
export default class CreateAdsSubCategoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        try{
            return {
                headerTitle: this.props.category.Title,
            }
        }catch(e){
            return {
                headerTitle: "Select Category"
            }
        }
    };


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        try{
            this.props.navigation.setOptions({title: this.props.category.Title});
        }catch(e){

        }
    }


    onPressSubCategory = (item) => {
        const category = item;
        this.props.setCategory({ category });
        this.props.navigation.navigate('SectionDetail');
    };

    renderSubCategory = ({ item, index }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressSubCategory(item)}>
            <View style={styles.itemcontainer}>
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
                    numColumns={1}
                    data={this.props.category.children}
                    renderItem={this.renderSubCategory}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        );
    }
}
