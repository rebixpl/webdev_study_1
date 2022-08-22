import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: "Plan the family trip", id: Math.random() },
    { text: "Go shopping for dinner", id: Math.random() },
    { text: "Go for a walk", id: Math.random() },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, id: Math.random() }]);
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== Number(id);
      })
    );
  };

  return (
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
