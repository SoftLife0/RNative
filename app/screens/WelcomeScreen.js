import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/Central-Uni-logo.png')} />
                    <Text>Login to your Portal</Text>
                </View>
                <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    logo: {
        width: 230,
        height: 100,
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    }
})

export default WelcomeScreen;
