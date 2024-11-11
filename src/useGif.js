import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "V2NGE3Cc0wYpois2DAySTjnISDQiFOe0";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&random_id=${new Date().getTime()}`;

export const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (tag) => {
    setLoading(true);
    try {
      console.log("Fetching new GIF...");
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
