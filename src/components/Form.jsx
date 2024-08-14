import React, { useState } from 'react';

const Form = ({ createTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(value);
    createTodo(value);
    setValue(' ');
  };
  return (
    <form className="font-primary flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요."
        className="outline-none bg-transparent border border-gray-500 p-4 w-[80%] text-gray-600 rounded placehorder:text-gray-400"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-700 border-none p-2 text-gray-300  rounded ml-2 w-[20%]">
        할일 추가
      </button>
    </form>
  );
};

export default Form;