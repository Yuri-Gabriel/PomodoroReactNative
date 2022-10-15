/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { useState } from 'react';

import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Estilos from './style';

import ChangeTheNumber from '../ChangeTheNumber';

const Home = ({navigation}) => {

    const [workTime, setWorkTime] = useState(0);
    const [sessions, setSessions] = useState(0);
    const [breaks, setBreaks] = useState(0);

    return (
        <SafeAreaView style={Estilos.Container} >
            <View style={Estilos.Header} >
                <Text style={Estilos.Title}>
                    Pomodoro
                </Text>
            </View>
            <View style={Estilos.ChangeTheNumbersContainer} >
                <ChangeTheNumber
                    number={workTime}
                    setNumber={setWorkTime}
                    title="Minutos"
                />
                <ChangeTheNumber
                    number={sessions}
                    setNumber={setSessions}
                    title="Sessões"
                />
                <ChangeTheNumber
                    number={breaks}
                    setNumber={setBreaks}
                    title="Pausas"
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Timer', {
                            workTime: workTime,
                            sessions: sessions,
                            breaks: breaks
                        });
                    }}
                    style={Estilos.NavigationButton}
                >
                    <Text style={Estilos.NavigationButtonText} >
                        Iniciar
                    </Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}

export default Home;