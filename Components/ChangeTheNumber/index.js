/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React from 'react';

import {
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';

import Estilos from './style';

const ChangeTheNumber = ({number, setNumber, title}) => {
    return (
        <View style={Estilos.ChangeTheNumberMainContainer} >
            <View style={Estilos.TittleContainer} >
                <Text style={Estilos.Tittle} >{title}</Text>
            </View>
            <View style={Estilos.ChangeTheNumberContainer} >
                <View style={Estilos.ButtonsContainer} >
                    <TouchableOpacity
                        onPress={() => {
                            setNumber(++number);
                        }}
                    >
                        <Image
                            source={require('../../Media/arrow_upward.png')}
                            style={Estilos.ButtonOfChange}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setNumber(number === 0 ? number : --number);
                        }}
                    >
                        <Image
                            source={require('../../Media/arrow_upward.png')}
                            style={[Estilos.ButtonOfChange, {
                                transform: [
                                    { rotate: '180deg' }
                                ]
                            }]}
                        />
                    </TouchableOpacity>
                </View>
                <View style={Estilos.NumberTextContainer} >
                    <Text style={Estilos.NumberText} >{number < 10 ? `0${number}` : number}</Text>
                </View>
            </View>
        </View>
    );
}

export default ChangeTheNumber;
