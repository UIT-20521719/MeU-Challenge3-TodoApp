import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const getTaskList = JSON.parse(localStorage.getItem('tasks'));
  const [taskList, setTaskList] = useState(getTaskList ? getTaskList : []);

  return (
    <TaskContext.Provider value={[taskList, setTaskList]}>
      {props.children}
    </TaskContext.Provider>
  );
};
