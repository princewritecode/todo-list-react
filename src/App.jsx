import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";



function App()
{

  const todoItems = [
    {
      name: 'buy milk', dueDate: "4/10/23"
    },
    {
      name: 'buy bread', dueDate: "4/10/23"
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>

    </center >
  );
}

export default App;