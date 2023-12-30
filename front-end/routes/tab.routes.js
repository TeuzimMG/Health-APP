import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import PageIMC from "../pages/PageIMC";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="IMC"
                component={PageIMC}
            />
            <Tab.Screen
                name="IMC"
                component={PageIMC}
            />
        </Tab.Navigator>
    )
}