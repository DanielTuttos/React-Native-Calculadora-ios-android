import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDel,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        calcular
    } = useCalculadora();


    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
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
                <BotonCalc texto="del" color="#9b9b9b" accion={btnDel} />
                <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />
                <BotonCalc texto="x" color="#FF9427" accion={btnMultiplicar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />
                <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>
                {/* botones */}
                <BotonCalc texto="0" accion={armarNumero} ancho />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#FF9427" accion={calcular} />

            </View>


        </View>
    )
}

// #2D2D2D gris oscur
// #FF9427 naranja
