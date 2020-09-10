import React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const favoritesScreen = props => {

    return(
        <view style = {styles.screen}>  
            <Text>The Favorites Screen</Text>



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

export default favoritesScreen;
