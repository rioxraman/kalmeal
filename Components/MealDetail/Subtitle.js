import { StyleSheet, Text, View, ImageBackground ,FlatList } from 'react-native';
function Subtitle({children}) {
    return(
        <View style={styles.subtitleContainer}>
             <Text style={styles.subtitle}>{children}</Text>
             </View>
    )
}
export default Subtitle;
const styles = StyleSheet.create({
    subtitle:{color:'#708819',fontSize:18,fontWeight:'bold',textAlign:'center'},
    subtitleContainer:{
       margin:4 , padding: 6 , marginHorizontal:12, marginVertical:4, borderBottomColor:'#ccc', borderBottomWidth: 2, 
    }   
});