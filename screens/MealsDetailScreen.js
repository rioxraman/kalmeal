import { StyleSheet, Text, View, Button ,ScrollView, Image } from 'react-native';
import {useLayoutEffect} from 'react'
import MealDetails from '../Components/MealDetails';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../Components/MealDetail/Subtitle';
import List from './../Components/MealDetail/List';
import IconButton from '../Components/IconButton';
function MealsDetailScreen({route,navigation}) {
    const  mealId=route.params.mealId;

    const selectedMeal =MEALS.find((meal)=> meal.id = mealId);
    function headerButtonPressHandler(){
      console.log('press');
    } 
    useLayoutEffect(()=>{
         navigation.setOptions({
            headerRight:()=>{ return <IconButton icon="star" color='orange' onPress={headerButtonPressHandler} />}
         })
      },[navigation, headerButtonPressHandler]);
    return (
        <ScrollView style={{marginBottom:32}}>
            <Image  style={styles.image}  source={{uri:selectedMeal.imageUrl}} />
            <Text  style={styles.title}>This is A Meal Detail for {selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailedText} />

            <View>
               <View style={styles.buttonContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data = {selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data = {selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
      ) 
}
export default MealsDetailScreen;
const styles = StyleSheet.create({
   image:{
      width:'100%',
      height:350
   },
   title:{
      fontWeight:'bold',
      fontSize:24,
      margin:8
   },
   detailedText:{
      color:'black',
   
   },
   listOuter:{alignItems:'center'},
   listContainer:{width:'80%'},
  
});
