# Counter App

A simple React-based counter application that allows users to increment and decrement a counter value. The counter is visually represented with a heart icon, which changes color based on the counter's value. This project also serves as a learning exercise for Redux, focusing on understanding and implementing state management in a React application.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Learning Redux](#learning-redux)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```plaintext
├── public
│   ├── images/
│   └── ...
├── src
│   ├── pages/
│   │   └── counter.tsx
│   ├── states/
│   │   ├── counter/
│   │   │   └── counterSlice.tsx
│   │   └── store.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── App.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.json
├── README.md
├── tailwind.config.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.json
```

### Key Files:

- **src/pages/counter.tsx:** Contains the main `Counter` component with increment and decrement functionality.
- **src/states/counter/counterSlice.tsx:** Manages the counter state using Redux Toolkit.
- **src/states/store.tsx:** Configures the Redux store.
- **src/App.tsx:** The main application component.
- **src/index.css & src/App.css:** Styles for the application.
- **vite.config.json:** Configuration for Vite, the build tool.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Brielle28/CounterApp-LearningRedux.git
   ```
2. Navigate to the project directory:
   ```bash
   cd counter-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

This will start the Vite server, and the application will be accessible at `http://localhost:3000`.

## Usage

- **Increment the Counter:** Click the `+` button to increase the counter value by 1.
- **Decrement the Counter:** Click the `-` button to decrease the counter value by 1.
- The heart icon changes color based on whether the counter is positive or zero.

## Features

- **Responsive Design:** The counter adjusts its layout for different screen sizes.
- **State Management:** Uses Redux Toolkit to manage the counter's state.
- **Dynamic Styling:** The heart icon's color changes dynamically based on the counter value.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vite**: A fast build tool for modern web projects.

## Learning Redux

This project is a key part of my journey to learn Redux. By implementing Redux for state management in this counter app, I'm gaining hands-on experience with:

- **Creating Slices:** Understanding how to organize state logic using `createSlice`.
- **Configuring the Store:** Learning how to set up a Redux store with reducers.
- **Connecting React Components:** Practicing the use of `useSelector` and `useDispatch` to interact with the Redux store.

My goal is to deepen my understanding of Redux and improve my ability to manage state effectively in more complex applications.


## Live Demo
You can try out the live demo of the Counter App here: counter-app-learning-redux-ld4hbf606-brielle28s-projects.vercel.app

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any features, bug fixes, or improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
