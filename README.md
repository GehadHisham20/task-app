# Task App

## Overview

This project is a React.js frontend application that provides functionality for managing tasks. Users can access the application through a web browser.

## Routes

1. `/` - Public home page

   - Description: This route serves as the landing page for the application.
   - Access: Public

2. `/login` - Login page

   - Description: This route allows users to log in to their accounts.
   - Access: Public

3. `/user` - User tasks page
   - Description: This route displays tasks and task management functionalities for authenticated users.
   - Access: Private (requires authentication)

## Installation

1. Clone the repository: `https://github.com/GehadHisham20/task-app.git`
2. Install dependencies: `pnpm install`
3. Start the application: `pnpm run dev`

## Configuration

- Ensure you have Node.js and pnpm installed on your machine.

## Dependencies

- React.js
- React Router (for routing)
- antd
- @ant-design/icons
- zustand
- uuid (for generate ids)
- dayjs

## Usage

- To access the application, navigate to `http://localhost:5173` in your web browser.
- Use the login page to authenticate and access the user tasks page.
- Perform tasks management operations as needed.
  - Add new task
  - edit task
  - delete task
  - filter by status
  - sort by time of task (asc or desc)
