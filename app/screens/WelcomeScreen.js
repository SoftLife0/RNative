import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
                {/* Overlay for darkening the background image */}
                <View style={styles.overlay} />

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/Central-Uni-logo.png')} />
                    <Text style={styles.text}>Login to your Portal</Text>
                </View>

                {/* <View> */}
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.linkText}>Create an account</Text>
                {/* </View> */}

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
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity to make the background darker
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    logo: {
        width: 230,
        height: 100,
        color: 'white',
    },
    text: {
        color: 'white',
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
    },
    loginButton: {
        width: '70%',
        height: 70,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#4ecdc4',
        fontSize: 16,
        paddingBottom: 20,
    },
});

export default WelcomeScreen;
