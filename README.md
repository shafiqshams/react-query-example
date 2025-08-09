# React Query Example

This is a simple React project demonstrating usage of **React Query** for data fetching, caching, and state management.

## Updated Features (New since last version)

- Refactored `App` component for cleaner structure and improved maintainability  
- Added toggle demo components to interactively show/hide parts of the UI  
- Introduced minimalistic `DemoReactQuery` components showcasing core React Query usage  
- Split todo-related UI into dedicated components for better separation of concerns (SOC)  
- Separated add-todo functionality into its own component with mutation handled via a custom hook  
- Encapsulated React Query logic in a custom hook called `useReactQuery` for reuse and abstraction  
- Improved imports and file structure by moving components/hooks into organized folders  
- Added a global CSS reset and refined styling for consistent look and feel  
- Bug fixes and CSS updates for better UI experience

---

## Development Notes (New additions)

- Modularization efforts enable easier testing and component reusability  
- Custom hooks like `useReactQuery` centralize query and mutation logic for cleaner components  
- Toggle demo components provide an interactive playground to explore React Query features  
- The styling changes include a global reset to avoid browser inconsistencies and polished UI tweaks
 
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
