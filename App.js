import React, {useState, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default function App(){
    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [area, setArea] = useState('');

    const baseInputRef = useRef();
    
    function CalcularArea(){
        if (base > 0 && altura > 0){
            const areaCalculada = (parseFloat(base) * parseFloat(altura)) / 2;
            setArea(areaCalculada.toString());
            setAltura('');
            setBase('');
            baseInputRef.current.clear();
            baseInputRef.current.focus();
        }else {
            if(base == '' || altura == ''){
                alert("Insira todos os dados! 🤢🤮");
            }else{
                setArea('');
            }
        }
    }
}