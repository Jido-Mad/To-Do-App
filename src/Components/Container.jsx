import AddSection from "./sections/AddSection";
import List from "./sections/List";
import Header from "./Header";
import { useState } from "react";

/* Parent Component for the Add section and the List Section */
function Container() {
  const [tasks, setTasks] = useState([]);

  /* Function to store and add Task */
  function addTask(newTask) {
    const newTaskObj = {
      id: Date.now(),
      name: newTask,
    };
    setTasks((prevTask) => [...prevTask, newTaskObj]);
  }

  /* Function to Remove targeted Task */
  function removeTask(id) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  return (
    <div className="flex flex-col w-full md:w-[1000px] md:shadow-xl md:rounded-md overflow-hidden">
      <Header todosCount={tasks.length} />
      <section className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 md:h-150">
        <AddSection displayTasks={addTask} />
        <List task={tasks} handleRemove={removeTask} />
      </section>
    </div>
  );
}

export default Container;
