# Personal Task & Study Tracker

## IS218 Creative Project

A web application project exploring how college students can organize assignments, manage deadlines, and track academic progress.

## Research Question

How can a small web application help college students organize coursework and study tasks while keeping each user's records private and secure?

## Project Overview

The goal is to build a task management website where students can:

- Create an account and log in.
- Add assignments and due dates.
- View saved tasks in a dashboard.
- Keep their task information private.
- Eventually edit, complete, and delete tasks.

## Technology

| Technology | Purpose |
|---|---|
| HTML | Website structure |
| CSS | Website design |
| JavaScript | Interactive features |
| Supabase Auth | User registration and login |
| PostgreSQL | Store task information |
| Row Level Security | Protect users' private records |

## Current Implementation

The initial application is located in the `app` folder.

Current features include:

- Account registration and sign-in forms.
- A dark-themed task dashboard.
- A task creation form with an optional due date.
- A task list that retrieves records from Supabase.
- A TaskRepository class that organizes database operations.
- A sign-out button.
- A Supabase tasks table with Row Level Security policies.

## Running the Application Locally

1. Clone this repository.
2. Open the `app` folder in Terminal.
3. Make sure `config.js` contains the Supabase project URL and public publishable key.
4. Start a local server:

   `python3 -m http.server 8000`

5. Open `http://localhost:8000` in your browser.

Do not place a Supabase service-role key or other secret keys in public JavaScript files.

## Testing Status

The application successfully loaded through a local development server, and the JavaScript syntax check passed.

Account registration was attempted but returned a Supabase `email rate limit exceeded` error. Successful authentication, task persistence, reopening saved tasks, and access restrictions have not yet been verified.

Task editing, deletion, completion, and classmate peer review remain future work.

See [Project Plan](docs/project-plan.md) for the detailed implementation and verification record.

## Project Documents

- [Research Notes](docs/research-notes.md)
- [Project Plan](docs/project-plan.md)

## Design and Architecture

The application uses a TaskRepository class to separate database operations from the rest of the application.

Row Level Security policies are configured to restrict task records to their authenticated owners.

## Creative Experiment

The original design experiment compares two dashboard concepts:

1. A basic task list.
2. A priority and deadline dashboard.

The goal is to understand which design helps students decide what to work on next.

## Research Sources

- [Supabase Authentication](https://supabase.com/docs/guides/auth)
- [Supabase Sessions](https://supabase.com/docs/guides/auth/sessions)
- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)

## Project Website

The research website is intended to be published using GitHub Pages.

## AI Assistance

ChatGPT helped brainstorm project ideas, organize research, explain technical concepts, and assist with application code. Technical decisions and application behavior will be checked through documentation and testing.

## Current Status

The project has moved from research and planning into initial application development. The first application structure and database configuration are in place. The complete sign-in-to-saved-result workflow still needs to be tested.
