import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div style={styles.container}>
      <TextField
        style={styles.todoInput}
        placeholder="Apa yang perlu dilakukan?"
        onChange={(event) => {
          handleChangeTitle(event);
        }}
        value={title}
      />
      <Button
        style={styles.todoSubmit}
        variant="contained"
        onClick={(event) => {
          handleSubmit(event);
        }}>
        <SendIcon />
      </Button>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "16px",
    textAlign: "center",
  },
  todoInput: {
    width: "80%",
  },
  todoSubmit: {
    height: "56px",
    marginLeft: "15px",
  },
};

export default TodoForm;
