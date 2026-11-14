
# Personal Task and Study Tracker — Project Plan

**Course:** IS218  
**Project Type:** Individual Creative Programming Project  
**Status:** Planning in progress

## 1. Project Overview

The Personal Task and Study Tracker will be a web application designed for college students. It will help users organize assignments, manage deadlines, and keep track of completed work.

Each student will have an individual account. After signing in, the student will be able to create tasks and view them on a private dashboard.

The main goal is to make managing schoolwork easier through a simple and organized website.

## 2. Intended User

The intended user is a college student who wants a better way to organize assignments and study responsibilities.

The application should be easy to understand, even for someone who has never used a task-tracking website before.

## 3. Main User Stories

### Story 1: Account Registration and Login

As a student, I want to create an account and sign in so that I can access my personal task tracker.

**Planned acceptance checks:**
- A new user can register.
- A registered user can sign in.
- An incorrect login does not provide access.
- A signed-out user cannot access the private dashboard.

### Story 2: Create a Task

As a student, I want to create a task with a title and due date so that I can remember upcoming assignments.

**Planned acceptance checks:**
- A user can enter a task title.
- A user can select a due date.
- The task is saved to the database.
- The saved task appears on the dashboard.

### Story 3: Manage Tasks

As a student, I want to edit, complete, or delete tasks so that I can keep my task list updated.

**Planned acceptance checks:**
- A user can change a task's title or due date.
- A user can mark a task as completed.
- A user can delete a task.
- Changes remain saved after refreshing the page.

### Story 4: View Progress

As a student, I want to see my active and completed tasks so that I can understand my progress.

**Planned acceptance checks:**
- The dashboard displays active tasks.
- Completed tasks are shown separately.
- Upcoming deadlines are easy to identify.
- Only the signed-in user's records are displayed.

### Story 5: Manage Account

As a student, I want to manage my account and sign out so that I can control access to my information.

**Planned acceptance checks:**
- A user can sign out.
- A signed-out user must sign in again to access private information.
- Account settings provide an appropriate way to update account information.
- Password changes follow the authentication provider's supported process.

## 4. Planned Technology Stack

| Technology | Purpose |
|---|---|
| HTML | Build the page structure |
| CSS | Style the website |
| JavaScript | Handle user interactions |
| Supabase Auth | Register and authenticate users |
| PostgreSQL | Store task information |
| Row Level Security | Restrict access to each user's records |

I chose this stack because it provides a way to build the website interface, manage accounts, and store information without creating a separate backend server from scratch.

This is a planned technology choice and still needs to be tested during development.

## 5. Planned Database Structure

The application will need a table called `tasks`.

| Field | Purpose |
|---|---|
| id | Unique identifier for each task |
| user_id | Identifies the account that owns the task |
| title | Stores the task name |
| due_date | Stores the task deadline |
| is_completed | Tracks whether the task is finished |
| created_at | Records when the task was created |

Each task will be connected to its owner through `user_id`.

The database will use Row Level Security policies to restrict users to their own records. The policies will need to cover reading, creating, updating, and deleting tasks.

This structure is a proposal and has not been created or tested yet.

## 6. Architecture

The planned application will follow this general process:

1. A student opens the website.
2. The student registers or signs in through Supabase Auth.
3. The website receives the authenticated session.
4. The student creates or manages tasks.
5. JavaScript sends requests to Supabase.
6. PostgreSQL stores the task information.
7. Row Level Security checks whether the student is allowed to access each record.
8. The dashboard displays the student's permitted task records.

### Architecture Diagram

```text
Student
   |
   v
Website Interface
HTML, CSS, JavaScript
   |
   v
Supabase Authentication
   |
   v
Authenticated User Session
   |
   v
Task Repository
   |
   v
PostgreSQL Database
   |
   v
Row Level Security Policies
   |
   v
Private Task Dashboard
```

## 7. Design Pattern

I plan to investigate the Repository Pattern.

The repository will be responsible for database operations, such as getting, creating, updating, and deleting tasks.

The website interface will call the repository instead of containing database queries throughout the application.

I want to investigate whether this separation makes the application easier to understand, maintain, and test.

## 8. Creative Design Experiment

I plan to compare two dashboard layouts.

**Option A: Basic Task List**
- Displays tasks in a simple list.
- Shows each task's title and due date.
- Allows users to mark tasks complete.

**Option B: Priority and Deadline Dashboard**
- Groups tasks based on priority or due date.
- Makes upcoming assignments easier to notice.
- Separates active tasks from completed tasks.

I am unsure which design will help students find their next task more quickly.

I plan to create a small version of both layouts and ask a classmate to compare them.

**Current status:** Planned. No experiment has been attempted yet.

## 9. Testing and Verification Plan

I will test the application in stages.

| Test | What I will check | Status |
|---|---|---|
| Account registration | A new user can create an account | Planned |
| Login | A registered user can sign in | Planned |
| Task creation | A task can be saved | Planned |
| Task editing | Changes remain saved | Planned |
| Task completion | Completed tasks are updated correctly | Planned |
| Task deletion | Deleted tasks no longer appear | Planned |
| Private records | One user cannot access another user's tasks | Planned |
| Dashboard | Tasks appear in the correct sections | Planned |
| Sign out | Private pages require authentication | Planned |

I will update each status only after attempting the test and recording the result.

## 10. Privacy and Security

The application will store personal task information, so database security is important.

Each task should have an owner ID connected to the authenticated user's account.

Row Level Security policies will be used to restrict access to records. I will test that users cannot read, change, or delete another user's tasks.

I will also avoid placing secret service-role keys in public JavaScript files.

## 11. Project Development Roadmap

### Phase 1: Research and Planning
- Compare project concepts.
- Review official documentation.
- Define user stories.
- Plan the database and architecture.

### Phase 2: Basic Website
- Build the main pages.
- Create the login and registration screens.
- Design the task dashboard.

### Phase 3: Database and Accounts
- Connect Supabase.
- Configure authentication.
- Create the task table.
- Configure and test Row Level Security.

### Phase 4: Task Features
- Add task creation.
- Add task editing and deletion.
- Add task completion.
- Display saved tasks.

### Phase 5: Testing and Review
- Test the main user stories.
- Test access restrictions.
- Compare dashboard layouts.
- Ask a classmate for feedback.
- Record feedback and decisions in GitHub issues.

## 12. AI Assistance

ChatGPT helped brainstorm project ideas, organize the project plan, and explain technical concepts.

I will verify technical decisions against official documentation and test the application myself. I will also record actual peer feedback rather than treating AI-generated feedback as a substitute for a classmate's review.

## 13. Current Project Status

The research website and initial planning documents are being created.

The application itself has not been built. Authentication, database operations, security policies, and dashboard interactions remain planned work.

