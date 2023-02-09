import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../home";
import Details from '../details'

const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Rick & Morty'
        }
    },
    Details:{
        screen:Details,
        navigationOptions:{
            title:"Character details"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'skyblue',
        headerStyle:{
            backgroundColor:'#1f2230',
        }
    }
});

export default createAppContainer(HomeStack);

