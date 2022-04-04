import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { chageFavorite } from "../../redux/actions/holidays";
import { AntDesign } from '@expo/vector-icons';

const Holiday = (props) => {
    const [isFavorite, setFavorite] = React.useState(props.isFavorite)
    const fnDispatch = useDispatch()
    const fnHandleFavorite = () => {
        setFavorite((prev) => !prev)
        fnDispatch(chageFavorite(props.id))
    }
    return (
        <View style={styles.card}>
             <Text style={styles.monthText} >{props.month}</Text>
            <AntDesign name={isFavorite ? 'star' : 'staro'} size={20} color="yellow" style={styles.icon} onPress={fnHandleFavorite}/>
            <Text style={styles.nameText} >{props.name}</Text>
            <View style={styles.numberContainer}>
                <Text style={styles.numberText} >{props.date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: 90,
        backgroundColor: '#92dccd',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 5,
        marginLeft: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameText: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 13
    },
    numberText: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 16
    },
    monthText:{
        fontFamily: 'Nunito_700Bold',
        color:'white',
        position:'absolute',
        top: 1,
        left:1
    },
    numberContainer: {
        position: 'absolute',
        bottom: 3,
        width: 20,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        borderRadius: 12
    },
    icon: {
        position:'absolute',
        top: 1,
        right: 3
    }
})

export default Holiday