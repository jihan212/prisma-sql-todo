import axios from "axios";
const apiUrl = "http://localhost:5000/api/todos";

export function getToDos() {
    return axios.get(apiUrl);
}

export function addTodo(Title) {
    return axios.post(apiUrl, Title);
}

export function updateToDo(id, todo) {
    return axios.put(apiUrl + "/" + id, todo);
}

export function deleteToDo(id) {
    return axios.delete(apiUrl + "/" + id);
}