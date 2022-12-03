import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground ,FlatList } from 'react-native';
import MealItem from '../Components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({route,navigation}) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >=0
    });

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title;

        navigation.setOptions({
            title:categoryTitle,
        })
    },[catId,navigation])

    function renderMealItem(itemData) {
        const mealItemProps={
            title:itemData.item.title,
            id:itemData.item.id,
            imageUrl:itemData.item.imageUrl,
            duration:itemData.item.duration,
            complexity:itemData.item.complexity,
            affordability:itemData.item.affordability
        }

        return <MealItem {...mealItemProps} /> 
    }
    return(
    <View  style={styles.container}>
        <Text>
            MealsOverviewScreen - {catId}
        </Text>

        <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem} />
    </View>
    )
}


const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, },
});
