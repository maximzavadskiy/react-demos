import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import LoginForm from './LoginForm';
import TodosApp from './TodoApp';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl m-12'> React demos </h1>
      <h2 className='text-2xl m-6'> Button </h2>
      <Button onClick={() => window.alert('clicked')}>Click me</Button>
      <h2 className='text-2xl m-6 mt-12'> Form </h2>
      <div className="grid w-screen place-items-center">
        <LoginForm onSubmit={(credentials) => window.alert(`Submitted data: ${JSON.stringify(credentials)}`)} />
      </div>
      <h2 className='text-2xl m-6 mt-12'> useCallback Demo </h2>
      <TodosApp/>
    </div>
  );
}

export default App;
