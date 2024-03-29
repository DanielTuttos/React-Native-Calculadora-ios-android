import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#000',
        // padding: 55,
    },
    resultado: {
        color: '#fff',
        fontSize: 60,
        textAlign: "right",
        marginBottom: 5

    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: "right", 

    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent:"flex-end",
    },

    fila:{
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    boton:{
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});