import { FontAwesome5 } from '@expo/vector-icons';
import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

const Home = () => {

    const idArray = [];

    for(let a = 1; a < 500; a++){
        idArray.push(a)
    }

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${idArray}`).then((value)=>{
            setData(value.data)
        })
    },[])

    return ( 
        <View style={styles.container}>
            <View >
                <FlatList
                    data={data}
                    renderItem={({item})=>(
                        <View style={styles.content}>
                            <Image
                                source={{uri:`${item.image}`}}

                                style={{
                                    width:80,
                                    height:80,
                                    borderRadius:80
                                }}
                            />
                            <Text style={styles.text}>{item.name}</Text>
                            <FontAwesome5 name="arrow-right" size={24} color="black" />
                        </View>
                    )}
                />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1f2230',
    },
    content:{
        borderRadius:10,
        marginVertical:5,
        marginHorizontal:10,
        backgroundColor:'skyblue',
        height:90,
        padding:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
    },
    text:{
        fontSize:15
    }
})
 
export default Home;