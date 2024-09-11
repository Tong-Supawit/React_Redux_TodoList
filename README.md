# React and Redux Counter and Todo List App with Cat API

This project is a **counter and todo list** application built with **React** on the frontend and integrated with **The Cat API** to fetch and display random cat pictures whenever the counter changes. It includes state management using **Redux** and allows users to interact with both the counter and a task management system (todo list).

--

## Features

### Frontend (React, Redux, Axios):

**Counter**:
- Users can increment, decrement, and set specific counter values.
- Random cat images are fetched from **The Cat API** and displayed each time the counter changes, adding an engaging visual element.

**Todo List**:
- Users can manage a todo list, with features to add, remove, and modify tasks directly in the app.
- Redux handles state management to ensure changes to the todo list are updated across the app efficiently.

--

### API Integration:

- **Axios** is used for making HTTP requests to **The Cat API**. A random cat image is retrieved and displayed whenever the counter value is updated, giving the app a fun and dynamic experience.

--

## API Endpoints (Cat API)

The app integrates with **The Cat API** to retrieve random cat images whenever the counter value is changed. This adds a fun and visually appealing feature to the application.

- **GET** `/v1/images/search`: This endpoint fetches a random cat image from **The Cat API**, which is then displayed in the app alongside the counter.

--

## Acknowledgments

Special thanks to **The Cat API** for providing random cat images that enhance the user experience in this project. For more information or to use **The Cat API** in your own projects, visit [The Cat API](https://thecatapi.com/).
