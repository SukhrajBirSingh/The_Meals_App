import React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const favoritesScreen = props => {

    return(
        <View style = {styles.screen}>  
            <Text>The Favorites Screen</Text>



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

export default favoritesScreen;
