
# Personal Task & Study Tracker

## IS218 Creative Project

A research and planning project exploring how a web application can help college students organize assignments, manage deadlines, and track academic progress.

## Research Question

How can a small web application help college students organize coursework and study tasks while keeping each user's records private and secure?

## Project Overview

The goal is to plan a task management website where students can:

- Create an account and log in.
- Add assignments and due dates.
- Edit, complete, and delete tasks.
- View their academic progress through a dashboard.
- Keep their task information private.

This repository currently contains the research and planning for the project. The working application has not been built yet.

## Planned Technology

| Technology | Purpose |
|---|---|
| HTML | Website structure |
| CSS | Website design |
| JavaScript | Interactive features |
| Supabase Auth | User registration and login |
| PostgreSQL | Store task information |
| Row Level Security | Protect users' private records |

## Project Documents

- [Research Notes](docs/research-notes.md)
- [Project Plan](docs/project-plan.md)

## Design and Architecture

The proposed application will use authentication, a task repository, and a PostgreSQL database.

Row Level Security will help ensure that users can only access their own task records.

The Repository Pattern will also be researched as a way to separate database operations from the rest of the application.

## Creative Experiment

I plan to compare two dashboard designs:

1. A basic task list.
2. A priority and deadline dashboard.

The goal is to understand which design helps students decide what to work on next.

## Research Sources

- [Supabase Authentication](https://supabase.com/docs/guides/auth)
- [Supabase Sessions](https://supabase.com/docs/guides/auth/sessions)
- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)

## Project Website

The website will be published using GitHub Pages.

## AI Assistance

AI tools were used to help organize research, explain technical concepts, plan the project structure, and assist with website code. Research claims and implementation details should be checked against the original sources.

## Current Status

**Research and planning in progress.**

The website and planning documents have been created. Application development, testing, and peer review are still planned.

