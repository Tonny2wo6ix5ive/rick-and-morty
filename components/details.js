import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Details = ({navigation}) => {
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
            <Text style={styles.textMeta}>Species:{navigation.getParam('species')}</Text>
            <Text style={styles.textMeta}>Gender:{navigation.getParam('gender')}</Text>
            <Text style={styles.textMeta}>species:{navigation.getParam("origin['name']")}</Text>
            <Text style={styles.textMeta}>species:{navigation.getParam('species')}</Text>
            <Text style={styles.textMeta}>species:{navigation.getParam('species')}</Text>
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
        color:'#FFFFFF',
        fontSize:20,
        fontWeight:'bold',
        marginTop:-25,
        marginLeft:10,
    }
})
 
export default Details;