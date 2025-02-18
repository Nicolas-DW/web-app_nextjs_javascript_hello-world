import axios from "axios";
import { useState, useEffect } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/blog");
        setPosts(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    posts,
    isLoading,
    isError,
  };
}
