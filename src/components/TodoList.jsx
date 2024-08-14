import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
uuidv4();

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);
  const createTodo = (todo) => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEdit: false, isDone: false },
    ]); // todoValue 빈 배열에 todo를 합산하여 새로운 배열 생성
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    );
  };

  const editTask = (editValue, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id
          ? { ...todo, task: editValue, isEdit: !todo.isEdit }
          : todo
      )
    );
  };
  const isComplete = (a, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id
          ? { ...todo, task: a, isEdit: !todo.isEdit, isDone: !todo.isDone }
          : todo
      )
    );
  };

  // todoValue 배열에서 id가 일치하는 것만 찾아내서 isEdit 불리안 값을 반대로 변경
  // console.log(todoValue);
  return (
    <div className="container">
      <Form createTodo={createTodo} />

      {todoValue.map((todo, idx) =>
        todo.isEdit ? (
          <Edit key={idx} editTask={editTask} task={todo} />
        ) : (
          <Todo
            key={idx}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            isComplete={isComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
