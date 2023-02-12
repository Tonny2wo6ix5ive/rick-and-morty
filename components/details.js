import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from '@use-expo/font';

const Details = ({navigation}) => {

let [fontLoaded] = useFonts({
    'sty':require('./style.ttf')
})

    if (!fontLoaded) {
        return <Text>Loading...</Text>;
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.bgimg}>
                <ImageBackground 
                    style={
                        {
                            width:300,
                            height:300,
                        }
                    }
                    source={{uri:`${navigation.getParam('image')}`}}
                >
                </ImageBackground>
                <Text style={styles.charName}>{navigation.getParam('name')}</Text>
            </View>
            <View style={styles.meta}>
            <Text style={styles.textMeta}>Status: {navigation.getParam("status")}</Text>
            <Text style={styles.textMeta}>Species: {navigation.getParam("species")}</Text>
            <Text style={styles.textMeta}>Gender: {navigation.getParam("gender")}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.back}>
                    <Text style={styles.text}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'skyblue',
    },
    bgimg:{
        marginTop:25,
        marginHorizontal:30
    },
    charName:{
        fontFamily:'sty',
        color:'#1f2230',
        fontSize:23,
        marginTop:-30,
        marginLeft:10,
    },
    meta:{
        width:300,
        marginHorizontal:30,
        marginTop:20,
    },
    textMeta:{
        fontFamily:'sty',
        fontSize:18
    },
    text:{
        fontFamily:'sty',
        fontSize:20,
        textAlign:'center',
        color:'white'
    },
    back:{
        marginHorizontal:30,
        marginVertical:20,
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'#1f2230'
    }
})
 
export default Details;