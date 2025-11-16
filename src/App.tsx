import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Auth from './components/Auth';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(res => setUser(res.data.session?.user || null));
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  }, []);

  if (!user) return <Auth onLogin={() => setUser(supabase.auth.getUser())} />;

  return (
    <div>
      <h1>Secure Task Manager</h1>
      <TaskForm onTaskAdded={() => {}} />
      <TaskList />
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default App;
