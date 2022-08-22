import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: "Plan the family trip", id: Math.random() },
    { text: "Go shopping for dinner", id: Math.random() },
    { text: "Go for a walk", id: Math.random() },
  ]);
  return (
    <TodoListContext.Provider value={{ todos }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
