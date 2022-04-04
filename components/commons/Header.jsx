import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Header = ({ navigation }) => {
    const fnOpenDrawer = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={fnOpenDrawer} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>Next Holiday</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        header: {
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerText: {
            fontSize: 25,
            color: 'white',
            letterSpacing: 1,
            fontFamily: 'Nunito_700Bold'
        },
        icon: {
            color: 'white',
            marginRight: '50%'
        }
    })
export default Header;