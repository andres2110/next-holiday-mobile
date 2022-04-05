import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
const HolidayDetails = ({navigation}) => {

    return(
        <View style={styles.container}>
            {/* <Text>Holidays Details</Text> */}
            <Text style={styles.header}>{navigation.getParam('name')}</Text>
            <Text>{navigation.getParam('duration')}</Text>
            <Text>{navigation.getParam('date')}</Text>
            <Text>{navigation.getParam('type')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    header:{
        fontFamily: "Nunito_700Bold",
        fontSize: 22,
        color: "black",
    },
    text:{
        fontFamily:"Nunito_400Regular",
        fontSize:20
    }

})
export default HolidayDetails;