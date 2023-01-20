import React, { InputHTMLAttributes } from 'react';

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (<input
    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    {...props}/>);
}

export default Input;
