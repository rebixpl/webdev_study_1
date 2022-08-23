import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

// class TodoList extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: "140px",
//           textAlign: "center",
//         }}
//       >
//         <p className="item">Plan the family trip</p>
//         <p className="item">Go shopping for dinner</p>
//         <p className="item">Go for a walk</p>
//         <button className="ui button primary" onClick={changeTheme}>
//           Change The Theme
//         </button>
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const [todo, setTodo] = useState("");

  const { todos, dispatch } = useContext(TodoListContext);

  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todo });
    setTodo("");
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              key={todo.id}
              className="item"
              id={todo.id}
              onClick={handleRemoveTodo}
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos. Yay 🤪  </div>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo">Add todo: </label>
        <input type="text" id="todo" value={todo} onChange={handleChange} />
        <input
          type="submit"
          value="Add new todo"
          className="ui button primary"
        />
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        Change The Theme
      </button>
    </div>
  );
};

export default TodoList;
