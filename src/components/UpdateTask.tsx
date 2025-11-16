import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function UpdateTask({
  task,
  onUpdated,
  onCancel
}: {
  task: { id: string; title: string; description: string };
  onUpdated: () => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const updateTask = async () => {
    const { error } = await supabase
      .from('tasks')
      .update({
        title,
        description,
        updated_at: new Date().toISOString()
      })
      .eq('id', task.id);

    if (error) alert(error.message);
    else onUpdated();
  };

  return (
    <div>
      <h3>Edit Task</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <input value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={updateTask}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
