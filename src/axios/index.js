import axios from "axios";
import store from "../store";

const instance = axios.create({
    baseURL: "http://192.168.0.141:8080/",
});


export default instance;
