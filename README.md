Here's the updated `README.md` file for the frontend of your User Address Application, reflecting the use of the `fetch` method instead of Axios.

### Frontend README.md

```markdown
# User Address Application - Frontend

This is the frontend part of the User Address Application, built using React and Ant Design. It allows users to register and view their addresses in a structured table format.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration form for submitting addresses
- Display of registered users and their addresses in a responsive table format using Ant Design
- Clean and user-friendly interface

## Technologies Used

- React
- Ant Design
- Fetch API (for API calls)
- React Router (for navigation)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd user-address-app/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the React application**:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

4. **Ensure the backend is running**: Make sure the backend server is running on `http://localhost:3001` for API calls to work.

## Available Scripts

In the project directory, you can run:

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production to the `build` folder.

## Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/       # Contains reusable components
│   ├── services/         # Contains API service files
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point of the application
│   └── ...
└── package.json          # Project metadata and dependencies
```

## API Integration

The frontend communicates with the backend using the following API endpoints:

- **POST /users**: To register a new user.
- **GET /users**: To retrieve a list of all users and their addresses.

### Example of API Request

Here’s how the frontend sends a request to register a new user using the `fetch` method:

```javascript
const registerUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
```

### Customization Tips

1. **Repository URL**: Replace `<repository-url>` with the actual URL of your GitHub repository.
2. **Folder Structure**: Adjust the folder structure section if your project's structure is different.
3. **Additional Features**: If there are any other features or components, feel free to add them to the README.

### Usage

You can create a `README.md` file in the `frontend` directory of your project and copy the above content into it. Modify any sections as necessary to fit your specific project details.

Let me know if you need any further adjustments or assistance!
