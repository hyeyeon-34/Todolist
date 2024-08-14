import React, { useState } from 'react';

const Edit = ({ editTask, task }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(value);
    editTask(value, task.id);

    setValue(' ');
  };
  return (
    <form className="font-primary flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="수정할 내용을 입력해 주세요."
        className="outline-none bg-transparent border border-gray-500 p-4 w-[80%] text-gray-600 rounded placehorder:text-gray-400"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-700 border-none p-2 text-gray-300  rounded ml-2 w-[20%]">
        수정하기
      </button>
    </form>
  );
};

export default Edit;
