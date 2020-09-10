import React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const filterScreen = props => {

    return(
        <View style = {styles.screen}>  
            <Text>The Filter Screen</Text>



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

export default filterScreen;
