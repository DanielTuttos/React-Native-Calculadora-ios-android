import { useRef, useState } from "react";


enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const UltimaOperacion = useRef<Operadores>(); // use ref se usa cuando mi componente no va a renderizan nievamente

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
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

    const btnDel = () => {

        if (numero.length === 2) {
            let numeros = numero.split('');
            if (numeros[0] === '-') {
                setNumero('0');
                return;
            }
        }
        if (numero.length === 1) {
            setNumero('0');
            return;
        }
        setNumero(numero => numero.slice(0, -1));
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        UltimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        UltimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        UltimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        UltimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (UltimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;

            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;

            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;

        }

        setNumeroAnterior('0');
    }
    return {
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
    }
}