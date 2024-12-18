import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import logo from '../assets/Central-Uni-logo.png';


function WelcomeScreen(props) {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login')
    }

    const handleSignUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.topNav}>
                <Text style={{fontSize: 25}}>🎓</Text>
                <Text style={{fontSize: 25}}>🔔</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={logo} />
                <Text style={styles.title}>Central Connect</Text>
                <Text style={styles.subTitle}>Lorem ipsum odor amet, consectetuer adipiscing elit. Eros lacus quam venenatis conubia, ac finibus lacus.</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.buttonWrapper, styles.loginButtonWrapper]} onPress={handleLogin}>
                    <Text style={[styles.buttonText, styles.loginButtonText]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonWrapper, styles.signButtonWrapper]} onPress={handleSignUp}>
                    <Text style={[styles.buttonText, styles.signupButtonText]}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 23
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 60,
    },
    image: {
        width: '90%',
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 40,
        fontFamily: fonts.Black,
        color: colors.black,
        marginTop: 50,
        fontWeight: '800',
    },
    subTitle: {
        fontSize: 18,
        fontFamily: fonts.Medium,
        color: colors.black,
        textAlign: 'center',
        width: '80%',
        lineHeight: 25,
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        height: 60,
        borderRadius: 100,
        borderWidth: 1,
        alignSelf: 'center',
        overflow: 'hidden',
        marginTop: 20,
    },
    buttonWrapper: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    loginButtonWrapper: {
        backgroundColor: colors.black,
    },
    signButtonWrapper: {
        backgroundColor: colors.white,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: fonts.Bold,
        fontWeight: '700',
    },
    loginButtonText: {
        color: colors.white,
    },
    signupButtonText: {
        color: colors.black,
    },
});


export default WelcomeScreen;