import React, { useContext } from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { TaskContext } from '../contexts/TaskContext';

const Task = (props) => {
  const [taskList, setTaskList] = useContext(TaskContext);

  const changeCompleted = (e) => {
    const filteredTasks = taskList.map((task) => {
      if (task.id === e.target.id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTaskList(filteredTasks);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const deletedTaskList = taskList.filter((task) => {
      return task.id !== e.currentTarget.id;
    });

    setTaskList(deletedTaskList);
  };

  return (
    <div className="task">
      <div className="task__input">
        <input
          id={props.id}
          type="checkbox"
          checked={props.completed}
          onChange={(e) => changeCompleted(e)}
        />
        <label
          htmlFor={props.id}
          className={`${props.completed && 'completed'}`}
        >
          {props.title}
        </label>
      </div>
      <button type="button" id={props.id} onClick={(e) => handleDelete(e)}>
        <DeleteOutline />
      </button>
    </div>
  );
};

export default Task;
