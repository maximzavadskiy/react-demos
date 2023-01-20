import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Input from './Input';

type Credentials = {
  username: string,
  password: string
}

type LoginFormProps = {
  onSubmit: (credentials: Credentials) => void
}

function LoginForm(props: LoginFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.onSubmit({
      username: String(data.get('username')),
      password: String(data.get('password'))
    });
  }

  return (
    <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <Input 
          required
          name="username" 
          type="text" 
          placeholder="Username"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <Input 
          required
          name="password" 
          type="password" 
          placeholder="******************"/>
      </div>
      <Button type="submit">Sign in</Button>

    </form>
  );
}

export default LoginForm;
