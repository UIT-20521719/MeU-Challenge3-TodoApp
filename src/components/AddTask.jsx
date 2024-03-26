import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [taskList, setTaskList] = useContext(TaskContext);

  const addTask = (e) => {
    e.preventDefault();
    if (title.trim() === '' || title === undefined) {
      alert('Please add task details.');
      return;
    }

    const newTaskList = [
      ...taskList,
      { id: new Date().getTime().toString(), title: title, completed: false },
    ];
    setTaskList(newTaskList);
    setTitle('');
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="input">
      <input
        placeholder="add details..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <button type="button" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
