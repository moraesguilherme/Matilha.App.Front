import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
// import PhoneInput from 'react-phone-input-2';

const formatPhoneNumber = (phoneNumber) => {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        padding: 5,
        border: '1px solid #ccc',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      text: {
        fontSize: 9,
        marginLeft: 5,
      },
      textField: {
        fontSize: 10,
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'red' // Adicionando negrito ao textField
      },
});

const ClienteInfoPdf = ({ cliente }) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.textField}>Nome: </Text>
            <Text style={styles.text}>{cliente.nomeCliente}</Text>
        </View>
        <View>
            <Text style={styles.textField}>Email:</Text>
            <Text style={styles.text}>{cliente.email}</Text>
        </View>
        <View>
            <Text style={styles.textField}>Telefone:</Text>
            <Text style={styles.text}>{formatPhoneNumber(cliente.telefoneCliente)}</Text>
        </View>
    </View>
  );
};

export default ClienteInfoPdf;
