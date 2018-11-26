import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export default class Login extends Component {
    static navigationOptions = ({navigation}) => {
        let headerTitle = 'Login';
        let headerStyle = { backgroundColor: 'orange', borderBottomColor: 'white'}
        return {headerTitle, headerStyle};
    }

    

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo} 
                    source={{uri: 'https://marketplace.canva.com/MACH_tsT_hw/1/0/thumbnail_large/canva-sunset-colors-photo-calendar-MACH_tsT_hw.jpg'}}
                    />    
                </View>
                <View style={styles.formContainer}>    
                    <TextInput 
                    style={styles.input} 
                    placeholder="Username/Brugernavn" 
                    returnKeyType="next" 
                    onSubmitEditing={()=> this.passwordInput.focus()}>
                    </TextInput>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Password/Kodeord" 
                    secureTextEntry returnKeyType="go" 
                    ref={(input)=>this.passwordInput = input}>
                    </TextInput>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text 
                        style={styles.buttonText} 
                        onPress={()=>this.props.navigation.navigate('TodayScreen')}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        padding: 20,
        backgroundColor: 'orange', 
        flex: 1, 
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    formContainer: {
        color: 'white',
        fontWeight: '200'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 30,
        color: '#FFF',
        paddingHorizontal: 50
      }, 
      buttonContainer: {
        backgroundColor: 'black',
        marginBottom: 40,
        paddingVertical: 15
      },
      buttonText: {
        color: 'orange',
        textAlign: 'center',
      } 
});