import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Overlay, Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const OverlayModal = ({ isVisible, type, message, onClose }) => {
  return (
    <SafeAreaView>
     <Overlay isVisible={isVisible} onBackdropPress={onClose} overlayStyle={styles.overlay}>
        <Icon name={type === 'success' ? 'check-circle' : 'error'} type="material" color={type === 'success' ? 'green' : 'red'} size={40}/>
        <Text style={[ styles.title, type === 'success' ? styles.successText : styles.errorText, ]} >
          {type === 'success' ? 'Success' : 'Error'}
        </Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.buttonWrapper} onPress={onClose}>
          <Text style={styles.overlayButtonText}>Close</Text>
        </TouchableOpacity>
    </Overlay>

      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: '80%',
    height: '30%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
  },
  errorText: {
    color: 'red',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonWrapper: {
    backgroundColor: colors.black,
    paddingVertical: Platform.OS === 'ios' ? 20 : 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  overlayButtonText: {
      color: colors.white,
      fontWeight: '600',
      fontFamily: fonts.Bold,
      fontSize: 18,
  },
});

export default OverlayModal;
