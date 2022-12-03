import { StyleSheet, Text, View, ImageBackground ,FlatList, Pressable , Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();  
function CategoryGridTile({title,color,onPress}) {
    return(

        <View style={styles.gridItem}>
            <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>[styles.button,pressed? styles.buttonPressed:null]} onPress={onPress} >
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategoryGridTile;
const styles = StyleSheet.create({
    gridItem: {flex: 1, margin:16, height:150, borderRadius:8,elevation:4,shadowColor:'#ccc',shadowOpacity:0.25,shadowOffset:{width:1,height:2},shadowRadius:8,backgroundColor:'white', overflow:Platform.OS==='android' ?'hidden':'visible' },
    button:{flex:1},
    buttonPressed:{opacity:0.50},
    innerContainer: {flex: 1, padding:1, borderRadius:8,justifyContent:'center', alignItems:'center',elevation:4 },
    title:{fontWeight:'bold',fontSize:18,}
});