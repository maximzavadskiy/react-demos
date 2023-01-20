import React from 'react';
import logo from './logo.svg';
import './App.css';

type ButtonPropsStandalone = {
  type?: null | undefined,
  children: string, // label
  onClick: () => void,
}

type ButtonPropsForm = {
  type: 'submit',
  children: string, // label
}

type ButtonProps = ButtonPropsStandalone | ButtonPropsForm 

function Button(props: ButtonProps) {
  return (
    <button 
      {...(props.type !== 'submit' ? {onClick:props.onClick} : {})}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >{props.children}</button>
  );
}

export default Button;
