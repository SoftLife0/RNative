import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import colors from '../utils/colors';
import logo from '../assets/Central-Uni-logo.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function NewLoginScreen() {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    }

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.topView}>
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={handleGoBack}>
                    <FontAwesome name="angle-left" size={30} color={colors.black} />
                </TouchableOpacity>

                <View style={styles.textContainer}>
                    <Text style={styles.headingText}>Login to your account</Text>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    topView: {
        width: '100%',
        height: '40%',
        alignItems: 'center'
    },
    bottomView: {
        width: '100%',
        height: '60%',
        backgroundColor: colors.black,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20
    },
    logo: {
        width: '70%',
        height: '100%',
        resizeMode: 'contain',
    },
    textContainer: {
        marginVertical: 30,
    },
    headingText: {
        fontSize: 30,
        fontWeight: '800',
        color: colors.white,
    },
    buttonWrapper: {
        backgroundColor: colors.white,
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,

    }
}) 