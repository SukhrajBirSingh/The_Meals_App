import React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const categoriesMealScreen = props => {

    return(
        <View style = {styles.screen}>  
            <Text>The Categories  Meal Screen</Text>
            <Button title = "Go to Meal Deatail" onPress ={()=>{
                props.navigation.navigate('MealDetail')
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

export default categoriesMealScreen;
