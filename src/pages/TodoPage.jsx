import React, { useState } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import Footer from '../components/Footer';

const TodoPage = () => {
  const [tab, setTab] = useState('all');
  console.log(tab);

  return (
    <div className="container">
      <h1 className="container__header">#todo</h1>
      <div className="container__toggle">
        <div>
          <div
            onClick={(e) => {
              setTab('all');
            }}
          >
            All
          </div>
          <div className={`${tab === 'all' && 'active'}`}></div>
        </div>
        <div>
          <div
            onClick={(e) => {
              setTab('active');
            }}
          >
            Active
          </div>
          <div className={`${tab === 'active' && 'active'}`}></div>
        </div>
        <div>
          <div
            onClick={(e) => {
              setTab('completed');
            }}
          >
            Completed
          </div>
          <div className={`${tab === 'completed' && 'active'}`}></div>
        </div>
      </div>
      <AddTask />
      <TaskList tab={tab} />
      <Footer />
    </div>
  );
};

export default TodoPage;
