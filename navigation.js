import React from "react";
import Main from "./components/Main"
import FindPage from "./components/Find_Page";
import Settings from "./components/Settings";


import {createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name = "Main"
            component = {Main}
            options = {{title: 'Main'}} 
            />
            <Stack.Screen 
            name = "FindPage"
            component = {FindPage}
            options = {{title: 'FindPage'}} 
            />
            <Stack.Screen 
            name = "Settings"
            component = {Settings}
            options = {{title: 'Settings'}} 
            />
        </Stack.Navigator>
    </NavigationContainer>
} 