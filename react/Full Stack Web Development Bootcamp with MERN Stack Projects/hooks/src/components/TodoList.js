import React, { useState, useEffect } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
  // in the list first is the state, then function with which we can change the state
  const [todos, setTodos] = useState([
    {
      text: "Pay bills",
      id: 1,
    },
    {
      text: "Do your homework",
      id: 2,
    },
    {
      text: "Feed the dog",
      id: 3,
    },
  ]);

  const [count, setCount] = useState(0);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        text,
        id: Math.random(),
      },
    ]);
  };

  // for example you can use useEffect to comunicate with the database or use an API endpoint
  useEffect(() => {
    // This component function will run every time the component renders or rerenders
    console.log("use effect", todos);
  }, [todos]); // we will only run this useEffect when todos state data changes

  useEffect(() => {
    console.log("use effect", count);
  }, [count]); // we will only run this useEffect when count state data changes

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
      <AddNewTodo addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Score: {count}</button>
    </div>
  );
};

export default TodoList;
