import React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const categoriesMealScreen = props => {

    return(
        <view style = {styles.screen}>  
            <Text>The Categories  Meal Screen</Text>



        </view>
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
