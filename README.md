# GIF Generator

Welcome to the **GIF Generator** project! This web app allows users to generate random GIFs, either completely at random or based on a text input tag. It is built using React and leverages the Giphy API to fetch the GIFs dynamically.

## Features

- **Random GIF Generation:** Fetch a random GIF with a single click.
- **Tagged GIF Generation:** Enter a keyword and get a GIF related to that tag.
- **Loading Indicator:** Displays a spinner while the GIF is being fetched.
- **Custom Hook Implementation:** Created a custom hook for fetching GIFs to simplify and modularize the logic.

## Built With

- **React**
- **Giphy API**
- **Axios** for HTTP requests
- **Tailwind CSS** for styling

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gif-generator.git
   cd gif-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Get a Giphy API key from [Giphy Developers](https://developers.giphy.com/). Replace `API_KEY` in `useGif.js` with your actual key.

4. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## Project Structure

- `App.js`: Main entry component that renders the application layout and includes `Random` and `Tag` components.
- `Random.js`: Displays a random GIF without any specific tag. Uses the `useGif` hook for fetching GIF data.
- `Tag.js`: Displays a GIF based on user-provided text input. Also uses the `useGif` hook.
- `useGif.js`: Custom hook for fetching GIFs from the Giphy API.
- `Spinner.js`: A simple loading spinner component displayed while fetching GIFs.

## Usage

### Random GIFs
Click on the "Generate" button under **Random GIF** to get a random GIF.

### Tagged GIFs
1. Enter a keyword in the text input under **Random Tag GIF**.
2. Click on the "Generate" button to fetch a GIF related to that keyword.

## Code Highlights

### Custom Hook (`useGif.js`)

The `useGif` hook manages the GIF-fetching logic and state. It makes an API request to Giphy using either a random ID or a specified tag and returns the GIF URL and loading status.

```javascript
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "Your_Giphy_API_Key";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (tag) => {
    setLoading(true);
    try {
      const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
      setGif(output.data.data.images.downsized.url);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return { gif, loading, fetchData };
};
```

### Components

- `Random.js` and `Tag.js` both use the `useGif` hook, passing a `tag` only in `Tag.js` based on user input.
- Button click events trigger `fetchData` to load a new GIF.

## Screenshots

![GIF Generator Screenshot](path_to_screenshot.png)
![Screenshot 2024-11-12 003415](https://github.com/user-attachments/assets/51867120-c2e1-447e-9093-f227dd0f8a5f)
![Screenshot 2024-11-12 003427](https://github.com/user-attachments/assets/aff35a66-e7ec-479a-8716-b16f649e733b)
![Screenshot 2024-11-12 003538](https://github.com/user-attachments/assets/a02e374d-5440-4fb5-abb6-5ad5e135e07f)
![Screenshot 2024-11-12 003538](https://github.com/user-attachments/assets/64c96b07-1a47-4fc6-8299-9d527eecbb1a)

## License![Screenshot 2024-11-12 003449](https://github.com/user-attachments/assets/27b9dd38-3524-49a7-b14e-c8fc91680d4a)


This project is licensed under the MIT License.
