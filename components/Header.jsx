import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
const Header = () => {
    return(
        <View style ={styles.container}>
            <Text style = {styles.title}>Next Holiday</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#92dccd',
        height: 80,
        paddingTop: 38,
    },
    title: {
        color: 'white',
        fontSize: 35
    }
})
export default Header;