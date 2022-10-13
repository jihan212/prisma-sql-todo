import { Component } from "react";
import {
    addTodo,
    getToDos,
    updateToDo,
    deleteToDo,
} from "./services/todoServices";

class Todo extends Component {
    state = { todos: [], currentTodo: "" }
    
    async componentDidMount() {
        try {
            const { data } = await getToDos();
            this.setState({ todos: data });

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        try {
            this.setState({currentTodo : e.target.value})
        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTodos = this.state.todos
        try {
            const { data } = await addTodo({ Title: this.state.currentTodo });
            const todos = originalTodos;
            todos.push(data);
            this.setState({todos, currentTodo:""})
        } catch (error) {
            console.log(error);
        }
    }

    handleUpdate = async (currentTodo) => {
        const originalTodos = this.state.todos;
        try {
            const todos = [...originalTodos];
            const index = todos.findIndex((todo) => todo.id === currentTodo);
            todos[index] = { ...todos[index] };
            todos[index].status = !todos[index].status;
            this.setState({ todos });
            await updateToDo(currentTodo, { status: todos[index].status });
        } catch (error) {
            this.setState({ todos: originalTodos })
            console.log(error);
        }
    }

    handleDelete = async (currentTodo) => {
        const originalTodos = this.state.todos;
        try {
            const todos = originalTodos.filter(
                (todo) => todo.id !== currentTodo
            );
            this.setState({ todos });
            await deleteToDo(currentTodo);
        } catch (error) {
            this.setState({ todos: originalTodos });
            console.log(error);
        }
    }


}

export default Todo;