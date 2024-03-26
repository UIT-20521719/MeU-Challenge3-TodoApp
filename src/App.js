import { TaskProvider } from './contexts/TaskContext';
import TodoPage from './pages/TodoPage';
import './scss/index.scss';

function App() {
  return (
    <TaskProvider>
      <div className="">
        <TodoPage />
      </div>
    </TaskProvider>
  );
}

export default App;
