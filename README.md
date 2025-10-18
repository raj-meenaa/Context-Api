# React Context API Examples

A comprehensive collection of React Context API implementation examples demonstrating state management patterns in modern React applications. This repository contains two practical projects showcasing different use cases of Context API for managing global state without external libraries.

## Project Description

This repository serves as a learning resource for developers looking to understand and implement React's Context API. It features two fully functional examples that demonstrate how to use Context API for different real-world scenarios: user authentication state management and theme switching functionality. Each example is built with React 19, Vite, and follows modern React best practices.

## Features

### 1. User Authentication Context (01contextApi)

**What it does:**
- Manages user authentication state across components without prop drilling
- Provides login functionality with username and password input
- Displays user profile information conditionally based on authentication status

**How it works:**
- Creates a `UserContext` using `React.createContext()` to establish a global state container
- Implements a `UserContextProvider` component that wraps the application and provides access to user state
- Uses React's `useState` hook to manage the user data (username) in the provider
- Child components (`Login` and `Profile`) consume the context using `useContext` hook

**How to use:**
1. The `UserContextProvider` wraps all components that need access to user state
2. The `Login` component captures username and password, then calls `setUser()` from context when form is submitted
3. The `Profile` component reads the `user` value from context and displays welcome message if user is logged in
4. Behind the scenes:
   - When user submits login form, `setUser(username)` updates the context state
   - Context automatically re-renders all consuming components (`Profile`) with new user data
   - React's context propagation ensures efficient updates only to components using the context

**Technical implementation:**
```javascript
// Context creation with default values
const UserContext = React.createContext();

// Provider manages state and exposes setters/getters
<UserContext.Provider value={{user, setUser}}>
  {children}
</UserContext.Provider>

// Components consume context
const {user, setUser} = useContext(UserContext);
```

### 2. Theme Switcher Context (themeSwitcher)

**What it does:**
- Implements a dark/light theme toggle for the entire application
- Persists theme preference and applies it to all styled components
- Provides a smooth visual transition between themes

**How it works:**
- Creates a `themeContext` using `createContext()` with default theme mode and toggle functions
- Exports a custom `useTheme` hook for easy context consumption
- Uses a `ThemeProvider` to wrap the application and distribute theme state
- Implements theme switching via CSS classes on the HTML element

**How to use:**
1. The `ThemeProvider` wraps the application and provides `themeMode`, `lightMode`, and `darkMode` functions
2. The `ThemeBtn` component displays a toggle switch that users can click to change themes
3. The `Card` component applies theme-specific Tailwind CSS classes that respond to the current theme
4. Behind the scenes:
   - When toggle is clicked, `onChangeBtn()` handler checks checkbox state and calls `darkMode()` or `lightMode()`
   - These functions update `themeMode` state in the context
   - A `useEffect` hook watches `themeMode` changes and updates the HTML element's class
   - Tailwind CSS dark mode (`dark:` prefix) automatically applies appropriate styles
   - All components using theme-aware classes re-render with new theme styling

**Technical implementation:**
```javascript
// Context with default values and methods
export const themeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {}
});

// Custom hook for consuming theme
export default function useTheme() {
  return useContext(themeContext);
}

// Theme application via DOM manipulation
useEffect(() => {
  document.querySelector('html').classList.remove('light', 'dark');
  document.querySelector('html').classList.add(themeMode);
}, [themeMode]);
```

### 3. React 19 and Modern Tooling

**What it does:**
- Utilizes the latest React 19 features for optimal performance
- Leverages Vite for lightning-fast development and optimized builds
- Includes ESLint configuration for code quality and consistency

**How it works:**
- Vite provides instant hot module replacement (HMR) during development
- React 19's improved concurrent features ensure smooth UI updates
- ESLint enforces code standards and catches common React mistakes

**How to use:**
1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start the development server with HMR
3. Run `npm run build` to create optimized production builds
4. Run `npm run lint` to check code quality and fix issues

## Folder Structure

```
Context-Api/
│
├── 01contextApi/                  # User Authentication Example
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── Login.jsx        # Login form component with username/password inputs
│   │   │   └── Profile.jsx      # Profile display component showing user info
│   │   ├── context/             # Context API implementation
│   │   │   ├── UserContext.js   # Context object creation
│   │   │   └── UserContextProvider.jsx  # Provider component with state management
│   │   ├── App.jsx              # Main app component wrapping with provider
│   │   └── main.jsx             # Application entry point
│   ├── package.json             # Project dependencies and scripts
│   └── vite.config.js           # Vite configuration
│
├── themeSwitcher/                # Theme Switcher Example
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── ThemeBtn.jsx    # Toggle button for theme switching
│   │   │   └── Card.jsx        # Demo card component with theme-aware styling
│   │   ├── context/            # Context API implementation
│   │   │   └── theme.js        # Theme context, provider, and custom hook
│   │   ├── App.jsx             # Main app with theme provider and effect
│   │   └── main.jsx            # Application entry point
│   ├── package.json            # Project dependencies (includes Tailwind CSS)
│   └── vite.config.js          # Vite configuration
│
└── README.md                    # This file - comprehensive documentation
```

### Key Files Explained

**Context Files:**
- `UserContext.js` / `theme.js`: Core context objects that create the global state container
- `UserContextProvider.jsx`: Wrapper component that manages and provides user authentication state
- `theme.js`: Contains context, provider export, and custom `useTheme` hook for simplified consumption

**Component Files:**
- `Login.jsx`: Captures user credentials and updates context state on submission
- `Profile.jsx`: Reads user state from context and conditionally renders content
- `ThemeBtn.jsx`: Interactive toggle switch that triggers theme changes in context
- `Card.jsx`: Example component demonstrating theme-responsive styling with Tailwind

**Configuration Files:**
- `package.json`: Lists all dependencies (React 19, Vite, ESLint, Tailwind for themeSwitcher)
- `vite.config.js`: Configures Vite build tool and React plugin
- `eslint.config.js`: Defines code quality rules and React-specific linting

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raj-meenaa/Context-Api.git
cd Context-Api
```

2. Install dependencies for User Authentication example:
```bash
cd 01contextApi
npm install
npm run dev
```

3. Install dependencies for Theme Switcher example:
```bash
cd themeSwitcher
npm install
npm run dev
```

### Available Scripts

Each project includes the following npm scripts:

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Technology Stack

- **React 19.1.1** - Latest version of React with improved concurrent features
- **Vite 7.1.7** - Next-generation frontend build tool
- **Tailwind CSS 4.1.14** - Utility-first CSS framework (themeSwitcher only)
- **ESLint** - Code quality and consistency tool

## Learning Outcomes

By exploring these examples, you will learn:

1. **Context API Fundamentals**
   - How to create context using `React.createContext()`
   - How to provide context values with Provider components
   - How to consume context using `useContext` hook

2. **State Management Patterns**
   - Managing authentication state without prop drilling
   - Implementing theme preferences across an application
   - Creating custom hooks for cleaner context consumption

3. **React Best Practices**
   - Component composition and separation of concerns
   - Using effects for side effects (DOM manipulation)
   - Conditional rendering based on global state

4. **Modern React Development**
   - Working with React 19 features
   - Building with Vite for optimal performance
   - Styling with Tailwind CSS utility classes

## License

This project is open source and available for educational purposes. Feel free to use, modify, and distribute as needed for learning and development.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

## Author

**Raj Meena**
- GitHub: [@raj-meenaa](https://github.com/raj-meenaa)

---

**Happy Learning! 🚀**
