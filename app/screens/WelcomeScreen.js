import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View>
        <ImageBackground styles={styles.background} source={require("../assets/background.jpg")}>
                <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View>
        </ImageBackground>
       </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: '100%',
        
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: '100%',
        height: '100%',
        backgroundColor: '#4ecdc4'
    }
})

export default WelcomeScreen;