import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

type Credentials = {
  username: string,
  password: string
}

type LoginFormProps = {
  onSubmit: (credentials: Credentials) => void
}

function LoginForm(props: LoginFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
        <input 
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          name="username" 
          type="text" 
          placeholder="Username"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input 
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
          name="password" 
          type="password" 
          placeholder="******************"/>
      </div>
      <Button type="submit">Sign in</Button>

    </form>
  );
}

export default LoginForm;
