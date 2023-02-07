import { StyleSheet, View, Image, Text } from "react-native";

const  NavBar= () => {

    

    return ( 
        <View style={styles.navbar}>
            <Text style={styles.text}>Rick & Morty Character Catalog</Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    navbar:{
        height:70,
        backgroundColor:'skyblue',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    text:{
        color:'#1f2230',
        fontWeight:'bold',
        fontSize:17
    }
})
export default NavBar;