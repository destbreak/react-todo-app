import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  return (
    <List style={styles.todoList}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </List>
  );
};

const styles = {
  todoList: {
    padding: "0",
  },
};

export default Todos;
