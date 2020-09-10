import React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const categoriesScreen = props => {

    return(
        <View style = {styles.screen}>  
            <Text>The Categories Screen</Text>
            <Button title = "Go to Meals!" onPress = {() => {
                props.navigation.navigate('CategoriesMeals')
            }}/>
            



        </View>
    )



};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }

});

export default categoriesScreen;
