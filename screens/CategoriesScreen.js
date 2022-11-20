import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import CategoryGridTile from '../Components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';


function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title}  color={itemData.item.color}/>
}

function CategoriesScreen() {
    return(
        <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2} />
    )
}
export default CategoriesScreen;

const styles = StyleSheet.create({
});