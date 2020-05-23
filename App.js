import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons, Fontisto } from "@expo/vector-icons";

import BlogList from './src/screens/BlogList';
import Blog from './src/screens/Blog'
import ListItem from './src/components/ListItem'


const Stack = createStackNavigator()
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: { height: 100 }, title: "Discover", headerTitleStyle: { fontSize: 26, fontWeight: "bold", fontFamily: "serif", },
              headerTintColor: "#424242",
              headerLeft: () => (<TouchableOpacity><Fontisto name="nav-icon-grid-a" style={{ marginLeft: 15 }} size={25} /></TouchableOpacity>),
              headerRight: () => (<TouchableOpacity><Ionicons name="ios-search" style={{ marginRight: 15 }} size={28} /></TouchableOpacity>)
            }}
            component={BlogList} name='blogList' />
          <Stack.Screen component={ListItem} name="listItem" options={{ headerShown: false }} />
          <Stack.Screen component={Blog} name="blog" options={{ headerShown: false }} />
        </Stack.Navigator>

      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
