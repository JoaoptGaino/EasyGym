import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

export default function Muscles() {

    const navigation = useNavigation();
    function handleNavigateToBack() {
        navigation.navigate('Back');
    }
    function navigateToHome() {
        navigation.navigate('Home');
    }
    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

            <View style={styles.container}>
                <TouchableOpacity onPress={navigateToHome} style={styles.backButton}>
                    <Icon name="arrow-left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Easy Gym</Text>
                <View style={styles.main}>
                    <Text style={styles.description}>Which muscle will you be training today?</Text>
                    <RectButton style={styles.button} onPress={handleNavigateToBack}>
                        <Text style={styles.buttonText}>
                            Back
                    </Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleNavigateToBack}>
                        <Text style={styles.buttonText}>
                            Chest
                    </Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleNavigateToBack}>
                        <Text style={styles.buttonText}>
                            Biceps
                    </Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleNavigateToBack}>
                        <Text style={styles.buttonText}>
                            Back
                    </Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleNavigateToBack}>
                        <Text style={styles.buttonText}>
                            Back
                    </Text>
                    </RectButton>
                </View>
            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        paddingTop: 16,
        fontWeight: '700',
        fontSize: 32
    },
    description: {
        paddingBottom:12,
        justifyContent:'center',
        textAlign:'center',
        color:'white'

    },
    button: {
        backgroundColor: 'black',
        opacity: 0.7,
        padding: 24,
        marginTop:5
    },
    buttonText: {
        textAlign: "center",
        color: 'white',
        fontWeight: '700'
    }

});
