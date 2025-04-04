import React, { useEffect, useState } from 'react';
import { createTask, getTasks } from './services/taskService';

export default function App() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleAddTask = async () => {
    await createTask('Buy groceries', 'user123');
    const updated = await getTasks();
    setTasks(updated);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.taskName} - {t.isCompleted ? '✅' : '❌'}</li>
        ))}
      </ul>
    </div>
  );
}
