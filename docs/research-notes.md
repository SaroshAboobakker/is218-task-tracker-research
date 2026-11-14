
# Personal Task and Study Tracker — Research Notes

**Course:** IS218  
**Project:** Personal Task and Study Tracker  
**Research checked:** November 14, 2026  
**Status:** Research and planning in progress

## 1. Research Question

How can a small web application help college students organize coursework and study tasks while keeping each user's records private and secure?

The purpose of this research is to understand which technologies and design choices can support a useful task tracker. The research focuses on user accounts, task storage, database security, and dashboard design.

## 2. Intended Audience

The intended audience is college students who need help keeping track of assignments, study sessions, and deadlines.

The application should make it easy to:
- Create and manage personal tasks.
- Set and review due dates.
- Mark assignments as completed.
- View active and completed work.
- Keep personal task records separate from other users.

## 3. Comparing the Two Concepts

### Concept A: Private Group Chat

This idea would allow four users to enter a group chat, send messages, and save conversations.

**Possible benefits:**
- Allows users to communicate in one place.
- Provides experience with accounts and saved information.
- Could explore real-time communication.

**Challenges:**
- Requires message storage and conversation management.
- Requires deciding which users can access each conversation.
- Real-time messaging adds another technical feature to manage.

### Concept B: Personal Task and Study Tracker

This idea would allow students to create tasks, set deadlines, complete assignments, and view their progress.

**Possible benefits:**
- Solves a common organization problem for students.
- Has a clear set of features and user stories.
- Provides experience with accounts, databases, and private records.
- Can be tested through simple user interactions.

**Challenges:**
- Each task must be connected to the correct account.
- Database permissions must prevent users from seeing other people's tasks.
- The dashboard must present tasks in a useful way.

### Final Choice

I selected the Personal Task and Study Tracker.

I chose it because it has a focused purpose and a clear audience. It also gives me an opportunity to explore database design, authentication, and security without making real-time messaging a requirement.

## 4. Research Findings and Sources

### Finding 1: User Authentication

**Source:** Supabase Authentication Documentation  
https://supabase.com/docs/guides/auth

**Date checked:** November 14, 2026

**Verified fact:** Supabase Auth provides ways to authenticate users, including passwords, magic links, and other sign-in methods. It uses JSON Web Tokens (JWTs) for authentication.

**My interpretation:** Supabase Auth could handle account registration and sign-in so I do not have to build an entire authentication system myself.

**Project connection:** Students will need an account to access their personal task dashboard.

### Finding 2: User Sessions

**Source:** Supabase User Sessions Documentation  
https://supabase.com/docs/guides/auth/sessions

**Date checked:** November 14, 2026

**Verified fact:** Supabase creates a session when a user signs in. A session uses an access token and a refresh token.

**My interpretation:** The application needs to recognize when a student is signed in and manage access to the dashboard accordingly.

**Project connection:** Users should be able to sign in, remain signed in according to the session settings, and sign out when finished.

### Finding 3: Database Security

**Source:** Supabase Row Level Security Documentation  
https://supabase.com/docs/guides/database/postgres/row-level-security

**Date checked:** November 14, 2026

**Verified fact:** Row Level Security (RLS) allows database policies to control which rows users can access. Supabase documents using the authenticated user's ID in policies to restrict access to records belonging to that user.

**My interpretation:** Each task should have an owner ID. Database policies should use the signed-in user's identity to control access to those tasks.

**Project connection:** A student should only be able to view and manage their own tasks.

**Important security consideration:** RLS must be enabled and correctly configured with appropriate database permissions and policies. Authentication by itself does not guarantee that records are private.

## 5. Facts, Interpretations, and Assumptions

### Verified Facts
- Supabase Auth supports user authentication.
- Supabase sessions use access and refresh tokens.
- PostgreSQL supports row-level security policies.
- Supabase provides the `auth.uid()` helper function for identifying the user making a database request.

### My Interpretations
- Supabase is a reasonable option for managing accounts and storing task records.
- A private dashboard would make the application more useful.
- Separating database operations from the interface could make the code easier to maintain.

### Current Assumptions
- College students would find a simple task tracker useful.
- Students may prefer seeing upcoming deadlines before completed tasks.
- A basic task list and a priority-based dashboard may provide different experiences.

These assumptions still need to be checked through feedback or a small experiment.

## 6. Planned Technology Choices

| Technology | Planned Purpose |
|---|---|
| HTML | Structure the website |
| CSS | Design the pages |
| JavaScript | Handle interactions |
| Supabase Auth | Manage user accounts |
| PostgreSQL | Store task records |
| Row Level Security | Restrict access to personal records |

These are proposed choices, not completed implementation decisions. I will review them as the project develops.

## 7. Architecture Decision

The planned application will connect the website interface to Supabase.

A student will sign in through Supabase Auth. The application will then use the authenticated session when requesting task records. PostgreSQL will store the tasks, while RLS policies will control which records the user can access.

### Design Pattern: Repository Pattern

I plan to investigate the Repository Pattern.

The idea is to keep database operations separate from the website's display code. For example, the interface could request a student's tasks through a task repository instead of containing database queries throughout the page.

I expect this separation could make the project easier to organize and test. This is a design decision I still need to evaluate during implementation.

## 8. Creative Experiment

I want to compare two dashboard layouts:

**Option A: Basic Task List**
- Shows tasks in a simple list.
- Displays the task name and due date.
- Allows students to mark tasks complete.

**Option B: Priority and Deadline Dashboard**
- Groups tasks by due date or priority.
- Makes upcoming assignments easier to notice.
- Separates active and completed tasks.

I do not know which design will be more useful. I plan to create a small prototype of each and ask a classmate which makes it easier to identify the next task.

**Status:** Planned, not attempted.

## 9. Verification Plan

| Check | Status | Evidence Needed |
|---|---|---|
| Review Supabase Auth documentation | Observed | Official documentation reviewed |
| Review Supabase session documentation | Observed | Official documentation reviewed |
| Review Supabase RLS documentation | Observed | Official documentation reviewed |
| Test account registration and login | Planned | Successful test account |
| Test creating and saving a task | Planned | Task appears after refreshing |
| Test that one user cannot access another user's tasks | Planned | Access-denial test |
| Compare the two dashboard layouts | Planned | Prototype and peer feedback |

A planned check is not a completed test. I will update this table when I have actual results.

## 10. AI Assistance

ChatGPT helped brainstorm project concepts, organize the research question, develop user stories, and plan the architecture.

I used official Supabase documentation to check the technical claims about authentication, sessions, and database security. I will continue checking technical decisions against original sources instead of relying only on AI-generated explanations.

## 11. Next Steps

1. Finish the project plan and research website.
2. Review the database structure needed for personal tasks.
3. Investigate how to implement authentication and RLS.
4. Create a small dashboard prototype.
5. Ask a classmate to review the research and design.
6. Record their feedback in a GitHub issue.
7. Update the project based on the feedback and verify any changes.

