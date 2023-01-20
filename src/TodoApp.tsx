/* 
  Use case demo for useMemo and useCallback
*/

import React, { useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import TodoList from './TodoList';
import Input from './Input';


const TodosApp = () => {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([
    { id: "todo-1", name: "First Todo" },
    { id: "todo-2", name: "Second Todo" }
  ]);
  
  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleAddTodo = () => {
    setTodos(todos.concat({ id: "todo-" + todos.length + 1, name: text }));
    setText("");
  };
  const handleRemoveTodo = useCallback(
    (id: string) => setTodos(
      todos => todos.filter(todo => todo.id !== id)
    )
    , []);

  return (
    <div>
      <Input type="text" value={text} placeholder="New todo title" onChange={ handleChangeText} />
      <Button onClick={handleAddTodo}> Add Todo </Button>
      <TodoList list={todos} onRemove={handleRemoveTodo} />
    </div >
  );
}

export default TodosApp;
