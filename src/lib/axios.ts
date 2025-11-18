import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:
        import.meta.env.MODE === "production"
            ? "https://apicatchtat.onrender.com/api"
            : "http://localhost:5000/api", // ← dev local → backend local
    withCredentials: true, //accepte les cookie

})
