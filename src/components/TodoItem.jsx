import React, { useContext } from "react";
import { Button, Checkbox, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <ListItem style={styles.todoItem}>
      <Checkbox onChange={() => toggleCompleted(todo.id)} />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <Button variant="contained" color="error" onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

const styles = {
  todoItem: {
    justifyContent: "space-between",
  },
};

export default TodoItem;
