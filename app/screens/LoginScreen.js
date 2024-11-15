import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, View, TouchableOpacity, TextInput, Platform, Image } from 'react-native'
import colors from '../utils/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import fonts from '../utils/fonts';

export default function LoginScreen() {
    const [secureEntry, setSecureEntry] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
        <View style={{padding: '30'}}>
            <View>
                <TouchableOpacity style={styles.backButtonWrapper}>
                    <Icon name="arrow-back" size={23} color={colors.white} />
                </TouchableOpacity>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.subText}>Welcome 👋</Text>
                <Text style={styles.headingText}>Login to your account</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Icon name="mail" size={23} color={colors.black} />
                    <TextInput style={styles.textInput} placeholder="Enter Email Address" keyboardType="email-address" />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock-closed" size={23} color={colors.black} />
                    <TextInput style={styles.textInput} placeholder="Enter Password" secureTextEntry={secureEntry} />
                    <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                        <FontAwesome name="eye" size={23} color={colors.black}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgetText}>Forgot Password ?</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.continueText}>or Continue with</Text>

                <TouchableOpacity style={styles.googleButton}>
                    <Image style={styles.googleImage} source={require('../assets/google.png')} />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text>Dont have an account</Text>
                    <Text>Create Account</Text>
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
    backButtonWrapper: {
        backgroundColor: colors.black,
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginVertical: 30,
    },
    subText: {
        fontSize: 20,
        color: colors.black,
        fontWeight: '600',
        marginBottom: 10,
    },
    headingText: {
        fontSize: 30,
        fontWeight: '800',
        color: colors.black,
    },
    formContainer: {
        marginTop: 30,
    },
    inputContainer: {
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 100,
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === 'ios' ? 15 : 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        marginLeft: 15,
        fontWeight: '500',
        fontSize: 18,
    },
    forgetText: {
        textAlign: 'right',
        marginTop: 10,
        color: colors.black,
        fontWeight: '600',
    },
    buttonWrapper: {
        backgroundColor: colors.black,
        paddingVertical: Platform.OS === 'ios' ? 20 : 15,
        borderRadius: 100,
        marginTop: 20,
        alignItems: 'center',
    },
    loginText: {
        color: colors.white,
        fontWeight: '600',
        fontFamily: fonts.Bold,
        fontSize: 18,
    },
    continueText: {
        textAlign: 'center',
        marginTop: 20,
        color: colors.gray,
        fontWeight: '600',
    },
    googleButton: {
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 100,
        paddingVertical: Platform.OS === 'ios' ? 20 : 15,
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    googleText: {
        color: colors.black,
        fontWeight: '600',
        fontFamily: fonts.Bold,
        fontSize: 18,
    },
    googleImage: {
        width: 20,
        height: 20,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 20,
    }
})