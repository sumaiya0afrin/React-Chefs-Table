# React + Vite Project

# Chefs Table 🍽️

Welcome to Chef's Table! This is an interactive React-based web platform showcasing a curated selection of delicious recipes, complete with cooking time, ingredients, and calorie details. Whether you're a seasoned chef or a beginner, Chef's Table helps you prepare delightful meals with ease using custom-created data for a smooth user experience.

## Features

- 🕒 Cooking Time & Calories: Each recipe displays cooking time and calorie details.
- 📋 Ingredients List: View all the required ingredients before you start cooking.
- 🍳 Progress Tracker: Track what you're currently cooking and what's on the list to cook next.
- 📱 Responsive Design: Fully responsive design to provide the best experience on any device.

## Technologies Used

- Frontend: Frontend: React, Tailwind CSS, Daisy UI
- State Management: React Hooks, Context API
- Data: Fake created JSON data
- Icons & Graphics: FontAwesome
- Version Control: Git, GitHub

## Challenges

#### State Management in React

Managing different states for recipe selection, cooking progress, and user interactions was complex. I implemented React's state hooks (useState) and effect hooks (useEffect) to handle changes dynamically, ensuring that the user experience was smooth and responsive.

#### Handling Fake Data

As the project uses fake created data instead of an API, I needed to ensure the data structure was realistic enough to simulate a true experience.
I carefully crafted mock data with various details like ingredients, cooking times, and calories to mimic a real-world dataset, which was integrated into React state management.

## Screenshots

![App Screenshot](https://i.postimg.cc/tTHWFyss/Chefs-Table.png)

## Deployment

This project is deployed on Surge, making it easily accessible online. To check out the live version, visit:

```bash
  https://spotless-cars.surge.sh/
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
