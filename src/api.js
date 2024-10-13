import axios from "axios";

const api = axios.create({
  baseURL: "https://formserver.fly.dev/",
});

const handleApiRequest = async (request) => {
  try {
    const response = await request;
    return response;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

export const updateItem = (id, data) =>
  handleApiRequest(api.put(`/items/${id}`, data));
export const createItem = (data) => {
  console.log(data);
  handleApiRequest(api.post("/items", data));
};
export const getItemById = (id) => handleApiRequest(api.get(`/items/${id}`));
export const getItems = () => handleApiRequest(api.get("/items"));
