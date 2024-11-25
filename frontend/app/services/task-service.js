import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchTasks = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      console.error("Token is missing");
      throw new Error("Token is missing");
    }

    // API call to fetch tasks
    const response = await axios.get("http://localhost:5000/tasks", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // return response.data
    if (response.status === 200) {
        console.log("Tasks fetched successfully:", response.data);
        return response.data;
    } else {
        console.error("Failed to fetch tasks: ", response.status);
        throw new Error("Failed to fetch tasks");
    }
  } catch (error) {
    console.error(
        "Error fetching tasks: ",
        error.response?.data || error.message
    );
    throw error;
  }
};

export default fetchTasks;