# Secure Task Manager
A secure cloud-backed task manager built with React, TypeScript, and Supabase.  
This project demonstrates full CRUD operations (Create, Read, Update, Delete) on a cloud-hosted PostgreSQL database with Row Level Security (RLS) policies to ensure each user can only access their own tasks. User authentication is implemented with Supabase Auth, making the project both functional and cybersecurity-focused.


## Instructions for Build and Use

Steps to build and/or run the software:

1. Clone this repository:
    git clone <your-repo-url>
2. Navigate into the project folder:
    cd secure-task-manager
3. Install dependencies:
    npm install
4. Add your Supabase project URL and anon key in src/supabaseClient.ts:
    const supabaseUrl = 'YOUR_SUPABASE_URL';
    const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
5. Start the development server:
    npm start

Instructions for using the software:

1. Open the app in your browser (default: http://localhost:3000).

2. Sign up for a new account or sign in using an existing account.

3. Create, view, edit, and delete your own tasks.

4. Sign in as another user to verify that tasks from other users are not visible — enforced by Supabase RLS policies.

## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* Node.js v20.x or later

* npm v9.x or later

* React 18.x

* TypeScript 5.x

* Supabase account with a PostgreSQL project

## Useful Websites to Learn More

I found these websites useful in developing this software:

* https://supabase.com/docs
* https://react.dev/learn
* https://chatgpt.com/

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

*  Add real-time notifications using Supabase's Realtime features

 * Create a second table with a relation to tasks (e.g., categories or tags)

 * Improve UI/UX with better styling, loading states, and error messages

 * Add unit and integration tests for frontend components and database operations