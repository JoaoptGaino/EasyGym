import React, { useState, useEffect } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import axios from 'axios';

export default function Back() {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        axios.get('https://easy-gym-api.herokuapp.com/api')
            .then(response => {
                setExercises(response.data.Back);
            })
    }, [])
    const navigation = useNavigation();
    function navigateToMuscles() {
        navigation.navigate('Muscles');
    }
    function handleClick(how) {
        alert(how);
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

            <View style={styles.container}>
                <TouchableOpacity onPress={navigateToMuscles} style={styles.backButton}>
                    <Icon name="arrow-left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Back</Text>
                <View style={styles.exercises}>
                    {
                        exercises.map((exer, i) => (
                            <TouchableOpacity onPress={() => handleClick(exer.howto)} key={i} style={styles.exerButton}>
                                <Text style={styles.exerText}>{exer.name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32
    },
    backButton: {
        marginTop: 10
    },
    title: {
        textAlign: 'center',
        marginTop: 64,
        fontWeight: '700',
        fontSize: 32
    },
    exercises: {
        marginTop: 32
    },
    exerButton: {
        backgroundColor: 'black',
        opacity: 0.8,
        padding: 28,
        margin: 2
    },
    exerText: {
        color: 'white',
        textAlign: 'center'
    }
})