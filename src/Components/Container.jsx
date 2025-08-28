// Container.js
import AddSection from "./sections/AddSection";
import List from "./sections/List";
import Header from "./Header";
import { useState } from "react";

function Container() {
  const [tasks, setTasks] = useState([]);

  /* Function to store and add Task */
  function addTask(newTask) {
    const newTaskObj = {
      id: Date.now(),
      name: newTask,
      completed: false,
    };
    setTasks((prevTask) => [...prevTask, newTaskObj]);
  }

  /* Function to Remove targeted Task */
  function removeTask(id) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  /* Function to update task completion */
  function toggleComplete(id) {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Count completed tasks
  const todosCompleted = tasks.filter((task) => task.completed).length;

  return (
    <div className="flex flex-col w-full md:w-[90%] lg:w-[1000px] md:shadow-xl md:rounded-md overflow-hidden">
      <Header todosCompleted={todosCompleted} todosCount={tasks.length} />
      <section className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 md:h-150">
        <AddSection displayTasks={addTask} />
        <List
          task={tasks}
          handleRemove={removeTask}
          toggleComplete={toggleComplete}
        />
      </section>
    </div>
  );
}

export default Container;
