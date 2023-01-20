import React from 'react';
import Button from './Button';

type TodoItem = {
    id: string,
    name: string
}
type ListItemProps = {
    item: TodoItem,
    onRemove: (id: string) => void
}


export const ListItem = React.memo(({ item, onRemove }: ListItemProps) => {
    console.log(`Todo Item is Rendering ${item.name}`);
    return (
        <li className='flex-row justify-between'>
            <span > {item.name} </span>
            <Button onClick={() => onRemove(item.id)}>
                X
            </Button>
        </li >
    );
});

type TodoListProps = {
    list: Array<TodoItem>,
    onRemove: (id: string) => void
}

const TodoList = React.memo(({ list, onRemove }: TodoListProps) => {
    console.log('Todo List is Rendering');
    return (
        <div className="flex-row justify-center mt-4">
            <ul className="w-80">
                {
                    list.map((todo: any) => (<ListItem item={todo} key={todo.id} onRemove={onRemove} />))
                }
            </ul>
        </div>
    );
});

export default TodoList;