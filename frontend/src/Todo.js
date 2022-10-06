import { Component } from "react";
import {
    addTodo,
    getToDos,
    updateToDo,
    deleteToDo,
} from "./services/todoServices";

class Todo extends Component {
    state = {todos:[], currentTodo:"" }
    
    async componentDidMount() {
        try {
            const { data } = await getToDos();
            this.setState({ todos: data });

        } catch (error) {
            console.log(error);
        }
    }

    hendleChange = ({currentTodo:input}) => {
        this.setState({ currentTodo: input.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTodos = this.state.todos
        try {
            const { data } = await addTodo({ todo: this.state.currentTodo });
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
            todos[index].completed = !todos[index].completed;
            this.setState({ todos });
            await updateToDo(currentTodo, { completed: todos[index].completed });
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