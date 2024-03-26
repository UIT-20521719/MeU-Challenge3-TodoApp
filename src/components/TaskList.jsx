import React, { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../contexts/TaskContext';

const TaskList = ({ tab = 'all' }) => {
  const [taskList, setTaskList] = useContext(TaskContext);

  const handleDeleteCompleted = (e) => {
    e.preventDefault();

    const deletedTaskList = taskList.filter((task) => {
      return task.completed !== true;
    });

    setTaskList(deletedTaskList);
  };

  return (
    <div>
      {taskList.length >= 1 ? (
        tab === 'active' ? (
          taskList.map((task) => {
            if (!task.completed) {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  completed={task.completed}
                />
              );
            }
          })
        ) : tab === 'completed' ? (
          <div>
            {taskList.map((task) => {
              if (task.completed) {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                  />
                );
              }
            })}
            <div className="delete">
              <button onClick={handleDeleteCompleted}>Delete All</button>
            </div>
          </div>
        ) : (
          taskList.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
              />
            );
          })
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskList;
