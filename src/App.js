/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  // function toggleTaskCompleted(id) {
  //   console.log(props.tasks[0]);
  // }
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      // deleteTask={deleteTask}
      // toggleTaskCompleted={toggleTaskCompleted}
    />
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // function deleteTask(id) {
  //   console.log(id);
  // }

  // const taskNoun = taskList.length === 1 ? "task" : "tasks";
  // const headingText = `${taskList.length} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton status="true" category="All" />
        <FilterButton status="false" category="Incomplete" />
        <FilterButton status="false" category="Completed" />
      </div>
      {/* <h2 id="list-heading">{headingText}</h2> */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
