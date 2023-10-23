# API Endpoints

## Authentication

- `/api/auth/login` (POST): Admin login.
- `/api/auth/logout` (POST): Admin logout.

## Admin APIs

- `/api/admin/posts` (GET): Fetch all blog posts (for admin).
- `/api/admin/posts/:id` (GET): Fetch a single blog post by ID (for admin).
- `/api/admin/posts` (POST): Create a new blog post (for admin).
- `/api/admin/posts/:id` (PUT): Update an existing blog post (for admin).
- `/api/admin/posts/:id` (DELETE): Delete a blog post (for admin).

## User APIs

- `/api/user/posts` (GET): Fetch all blog posts (for users).
- `/api/user/posts/:id` (GET): Fetch a single blog post by ID (for users).
- `/api/user/posts/:id/like` (POST): Like a blog post (for users).
- `/api/user/posts/:id/comments` (GET): Fetch comments for a blog post (if comments are implemented).

# Data Models

## User Model

- `id` (unique identifier)
- `username`
- `password` (hashed)
- Other user-related fields (e.g., name, email, etc.)

## Blog Post Model

- `id` (unique identifier)
- `title`
- `content`
- `createdAt` (timestamp)
- `updatedAt` (timestamp)
- `authorId` (foreign key to the User model)

## Comment Model (if comments are implemented)

- `id` (unique identifier)
- `text`
- `createdAt` (timestamp)
- `postId` (foreign key to the Blog Post model)
- `userId` (foreign key to the User model)
