import React from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { BsTrash3 } from 'react-icons/bs';

const Todo = ({ task, deleteTodo, editTodo, isComplete }) => {
  console.log(task);
  return (
    <div
      style={{ textDecoration: 'lineThrough' }}
      className="flex justify-between items-center bg-slate-500 text-gray-300 py-3 px-4 rounded-md my-1"
    >
      <p>{task.task}</p>
      <div className="flex items-center gap-x-4">
        <button onClick={() => editTodo(task.id)}>수정</button>
        <button className="text-xl" onClick={() => deleteTodo(task.id)}>
          삭제
        </button>
        <button onClick={() => isComplete(task.id)}>완료</button>
      </div>
    </div>
  );
};

export default Todo;
