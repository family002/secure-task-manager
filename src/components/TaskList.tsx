import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import UpdateTask from './UpdateTask';

type Task = {
  id: string;
  title: string;
  description: string;
};

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editing, setEditing] = useState<Task | null>(null);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) alert(error.message);
    else setTasks(data);
  };

  const deleteTask = async (id: string) => {
    const { error } = await supabase.from('tasks').delete().eq('id', id);
    if (error) alert(error.message);
    else fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (editing) {
    return (
      <UpdateTask
        task={editing}
        onUpdated={() => {
          setEditing(null);
          fetchTasks();
        }}
        onCancel={() => setEditing(null)}
      />
    );
  }

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button onClick={() => setEditing(task)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
