import './Calculadora.css';
import { useState } from 'react';


export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');


function calcularIMC(){
  const alt = altura / 100;
  const imc = peso / (alt * alt);
  
  if (imc <= 18.5){
    setMensagem(`CUIDADO! Você está abaixo do peso. | IMC: ${imc.toFixed(1)}`)
  }else if (imc >= 18.6 && imc <= 24.9){
    setMensagem(`PARABÉNS! Você está no peso ideal. | IMC: ${imc.toFixed(1)}`)
  }else if (imc >= 25 && imc <= 29.9){
    setMensagem(`ATENÇÃO! Você está levemente acima do peso. | IMC: ${imc.toFixed(1)}`)
  }else if (imc >= 30 && imc <= 34.9){
    setMensagem(`CUIDADO! Você está acima do peso. | IMC: ${imc.toFixed(1)}`)
  }else if (imc >= 35 && imc <= 39.9){
    setMensagem(`PERIGO! Você está com obesidade severa. | IMC: ${imc.toFixed(1)}`)
  }else{
    setMensagem(`RISCO A VIDA! Você está com obesidade mórbida. | IMC: ${imc.toFixed(1)}`)
  }
}

  return(
    <div className="app">

      <h1>Calculadora IMC</h1>

      <span>vamos calcular seu imc</span>

      <div className="area-input">

        <input
        type="text"
        placeholder="digite o peso | ex: 86"
        value={peso}
        onChange={ (e) => setPeso(e.target.value)}/>

        <input
        type="text"
        placeholder="digite a altura | ex: 175"
        value={altura}
        onChange={ (e) => setAltura(e.target.value)}/>

        <button onClick={calcularIMC}> calcular </button>

      </div>

      <h2>{mensagem}</h2>      
      <footer>programmed by © Ney Marlon</footer>
    </div>
  )
}