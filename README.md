# React Query Example

This is a simple React project demonstrating usage of **React Query** for data fetching, caching, and state management.

## Features

- Mock API simulation for fetching todos
- Usage of `useQuery` to fetch and map todos data
- Custom `TodoCard` component to display individual todos
- Loading state handling with `isLoading` and conditional rendering
- Mutation to add todos with `useMutation` and `handleAddTodo`
- Query invalidation on success to refetch todo list
- Usage of `useQueryClient` to manage query cache
- Toggle component visibility dynamically
- Button component with a disabled prop for UI control
- Customizable staleTime and garbage collection time settings for cache
- Basic app styling and UI improvements
- Logs added to track fetching and reduced timeout duration for faster responses
## Getting Started

To get started with this repo, follow these steps:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/shafiqshams/tictactoe-react
cd react-query-example
```

### 2. Install dependencies

Install all required packages using Yarn:

```bash
yarn install
```

### Run the app

Start the development server:

```bash
yarn run dev
```

The app will be available at http://localhost:5173 (or your default Vite dev port).
