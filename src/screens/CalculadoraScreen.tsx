import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) => {
        // no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                //evaluar si es otro 0 y tiene un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                // numero diferente de 0 y no existe un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

                // evitar 00000,000
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);

            } else {
                setNumero(numero + numeroTexto);

            }



        } else {
            setNumero(numero + numeroTexto)
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);

        }
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}

                <BotonCalc texto="C" color="#9b9b9b" accion={limpiar} />
                <BotonCalc texto="+/-" color="#9b9b9b" accion={positivoNegativo} />
                <BotonCalc texto="del" color="#9b9b9b" accion={limpiar} />
                <BotonCalc texto="/" color="#FF9427" accion={limpiar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />
                <BotonCalc texto="x" color="#FF9427" accion={limpiar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />
                <BotonCalc texto="-" color="#FF9427" accion={limpiar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#FF9427" accion={limpiar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}
                <BotonCalc texto="0" accion={armarNumero} ancho />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#FF9427" accion={limpiar} />

            </View>


        </View>
    )
}

// #2D2D2D gris oscur
// #FF9427 naranja
