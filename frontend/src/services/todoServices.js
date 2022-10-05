import axios from "axios";
const apiUrl = "http://localhost:5000/api/todos";

export function getToDos() {
    return axios.get(apiUrl);
}

export function addTodo(todo) {
    return axios.post(apiUrl, todo);
}

export function updateToDo(id, todo) {
    return axios.put(apiUrl + "/" + id, todo);
}

export function deleteToDo(id) {
    return axios.delete(apiUrl + "/" + id);
}