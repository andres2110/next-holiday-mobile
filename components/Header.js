import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
const Header = ({ navigation }) => {

    const fnOpenDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={fnOpenDrawer}>
                <Text style={styles.title}>Next Holiday</Text>
            </TouchableOpacity>

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
        fontSize: 30,
        fontFamily: 'Nunito_400Regular'
    }
})
export default Header;