import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, Image, Alert, ScrollView } from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import fonts from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import OverlayModal from '../components/OverlayModal';


export default function SignUpScreen() {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayType, setOverlayType] = useState('');
  const [overlayMessage, setOverlayMessage] = useState('');
  const toggleOverlay = () => setOverlayVisible(!overlayVisible);


  const validateForm = async () => {
    if (!email || !name || !password1 || !password2) {
        setOverlayType('error');
        setOverlayMessage('Please fill in all fields.');
        setOverlayVisible(true);      
        return;
    }
    if (password1.length < 6) {
        setOverlayType('error');
        setOverlayMessage('Password must be at least 6 characters.');
        setOverlayVisible(true);
        return;
    }

    if (password1 !== password2) {
        setOverlayType('error');
        setOverlayMessage('Passwords do not match.');
        setOverlayVisible(true);
        return;
    }

    await handleSignUp();
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password1);      
      await updateProfile(userCredential.user, { displayName: name });
      console.log('User created:', userCredential.user);
      setOverlayType('success');
      setOverlayMessage('User account created successfully!');
      setOverlayVisible(true);
      setTimeout(() => { 
        toggleOverlay();
        navigation.navigate('Login');
      }, 2000);
    } catch (error) {
      console.error('Error signing up:', error.message);
      setOverlayType('error');
      setOverlayMessage(error.message);
      setOverlayVisible(true);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCreate = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20 }}>
        <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
          <Icon name="arrow-back" size={23} color={colors.white} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.subText}>Sign Up 🥳</Text>
          <Text style={styles.headingText}>Create an account</Text>
        </View>

        <ScrollView style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Icon name="person" size={23} color={colors.black} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your Name"
              onChangeText={setName}
              value={name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="mail" size={23} color={colors.black} />
            <TextInput
              onChangeText={setEmail}
              value={email}
              style={styles.textInput}
              placeholder="Enter Email Address"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock-closed" size={23} color={colors.black} />
            <TextInput
              onChangeText={setPassword1}
              value={password1}
              style={styles.textInput}
              placeholder="Enter Password"
              secureTextEntry={secureEntry}
            />
            <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
              <FontAwesome name={secureEntry ? 'eye-slash' : 'eye'} size={20} color={colors.black} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock-closed" size={23} color={colors.black} />
            <TextInput
              onChangeText={setPassword2}
              value={password2}
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry={secureEntry}
            />
            <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
              <FontAwesome name={secureEntry ? 'eye-slash' : 'eye'} size={20} color={colors.black} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buttonWrapper} onPress={validateForm}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.continueText}>or Continue with</Text>

          <TouchableOpacity style={styles.googleButton}>
            <Image style={styles.googleImage} source={require('../assets/google.png')} />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.dontText}>Already have an account?</Text>
            <Text style={styles.createText} onPress={handleCreate}>Login</Text>
          </View>
        </ScrollView>

        <StatusBar style="auto" />

        <OverlayModal
            isVisible={overlayVisible}
            type={overlayType}
            message={overlayMessage}
            onClose={toggleOverlay}
        />
      </View>
    </SafeAreaView>
  );
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
    marginTop: 40,
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.black,
  },
  formContainer: {
    marginTop: 0,
  },
  inputContainer: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
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
  buttonWrapper: {
    backgroundColor: colors.black,
    paddingVertical: Platform.OS === 'ios' ? 20 : 15,
    borderRadius: 10,
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
    borderRadius: 10,
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
    gap: 5,
    marginTop: 20,
  },
  dontText: {
    color: colors.gray,
    fontWeight: '600',
  },
  createText: {
    color: colors.black,
    fontWeight: '800',
    fontFamily: fonts.Bold,
  },
});
