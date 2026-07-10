import api from "./axios";

export const login = (data: {
    email: string,
    password: string
}) => {
    return api.post("/login", data)
}

export const register = (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
}) => {
    return api.post("/register", data)
}

export const logout = () => {
    return api.post("/logout")
}