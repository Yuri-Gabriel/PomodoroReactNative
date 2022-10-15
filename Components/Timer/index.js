/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react';

import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Estilos from './style';

const Timer = ({ route }) => {

    const ViewsBreak = [];
    for (let i = 0; i < route.params.breaks; i++) {
        ViewsBreak.push(
            <View style={Estilos.BreaksBall}>
                <Text>oi</Text>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text>Tempo</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Trabalho</Text>
                </View>
                <View>
                    {ViewsBreak.map(e => e)}
                </View>
                <View>
                    <TouchableOpacity>
                        <Image
                            source={require('../../Media/pause_circle.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Timer;