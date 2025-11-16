import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function TaskForm({ onTaskAdded }: { onTaskAdded: () => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = async () => {
    const user = supabase.auth.getUser();
    const { data, error } = await supabase.from('tasks').insert([
      {
        user_id: (await user).data.user?.id,
        title,
        description,
      },
    ]);
    if (error) alert(error.message);
    else {
      setTitle('');
      setDescription('');
      onTaskAdded();
    }
  };

  return (
    <div>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
