import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import colors from '../utils/colors';
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image style={styles.image} resizeMode="contain" source={require('../assets/ade.jpg')}/>
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
    },
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})