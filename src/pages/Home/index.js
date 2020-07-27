import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();
    function handleNavigateToMuscles() {
        navigation.navigate('Muscles');
    }
    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

            <View style={styles.container}>
                <Text style={styles.title}>Easy Gym</Text>
                <View style={styles.main}>

                    <Text style={styles.description}>How about some training?</Text>

                    <RectButton style={styles.button} onPress={handleNavigateToMuscles}>
                        <Text style={styles.buttonText}>
                            Let's go!
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
    title:{
        textAlign:'center',
        paddingTop:16,
        fontWeight:'700',
        fontSize:32
    },
    description:{
        textAlign:'center',
        paddingBottom:10,
        fontSize:16,
        color:'white',
        fontWeight:'500'
    },
    button:{
        backgroundColor:'black',
        opacity:0.7,
        padding:24
    },
    buttonText:{
        textAlign:"center",
        color:'white',
        fontWeight:'700'
    }

});
