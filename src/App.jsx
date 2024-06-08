import { useState, createContext } from "react";
import "./App.css";
import { Paper } from "@mui/material";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

export const TodoContext = createContext();
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Menyelesaikan materi Progate React",
      completed: false,
    },
    {
      id: 2,
      title: "Makan siang dengan Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Belajar materi React bersama dengan Ninja Ken",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <Paper style={styles.container}>
        <h1 style={styles.title}>Todo List App</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
      </Paper>
    </TodoContext.Provider>
  );
}

const styles = {
  container: {
    margin: "32px 0 64px 0",
    padding: "64px",
  },
  title: {
    margin: "0",
    marginBottom: "16px",
    textAlign: "center",
  },
};

export default App;
