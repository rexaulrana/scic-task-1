import axios from "axios";
//https://task-management-server-mu-six.vercel.app
const axiosSecure = axios.create({
  baseURL: "https://task-management-server-mu-six.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
