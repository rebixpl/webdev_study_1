import React, { createContext, useReducer } from "react";
import { todosReducer } from "../reducers/todosReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { text: "Plan the family trip", id: Math.random() },
    { text: "Go shopping for dinner", id: Math.random() },
    { text: "Go for a walk", id: Math.random() },
  ]);

  //   const [todos, setTodos] = useState([
  //     { text: "Plan the family trip", id: Math.random() },
  //     { text: "Go shopping for dinner", id: Math.random() },
  //     { text: "Go for a walk", id: Math.random() },
  //   ]);

  //   const addTodo = (todo) => {
  //     setTodos([...todos, { text: todo, id: Math.random() }]);
  //   };

  //   const removeTodo = (id) => {
  //     setTodos(
  //       todos.filter((todo) => {
  //         return todo.id !== Number(id);
  //       })
  //     );
  //   };

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
