import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

interface Resultados {
  pares: number[];
  impares: number[];
  clasificar: () => void;
}

const clasificarNumeros = (numeros: number[]): Resultados => {
  const [resultados, setResultados] = useState<Resultados>({ pares: [], impares: [], clasificar });

  function clasificar() {
    setResultados({
      pares: numeros.map(numero => (numero % 2 === 0 ? numero : null)).filter(Boolean) as number[],
      impares: numeros.map(numero => (numero % 2 !== 0 ? numero : null)).filter(Boolean) as number[],
      clasificar,
    });
  }

  return resultados;
};

const Primerejercicio = () => {
  const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const { pares, impares, clasificar } = clasificarNumeros(numeros);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <Text style={styles.vectorTexto}>Vector: {numeros.join(', ')}</Text>
      <TouchableOpacity style={styles.button} onPress={clasificar}>
        <Text style={styles.buttonTexto}>CLASIFICAR</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.BotonResultado}>Pares: {pares.join(', ')}</Text>
        <Text style={styles.BotonResultado}>Impares: {impares.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vectorTexto: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonTexto: {
    color: 'white',
    textAlign: 'center',
  },
  BotonResultado: {
    marginBottom: 5,
  },
});

export default Primerejercicio;
