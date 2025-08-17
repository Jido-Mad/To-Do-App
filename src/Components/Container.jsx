import AddSection from "./sections/AddSection";
import List from "./sections/List";
import Header from "./Header";
import { useState } from "react";

/* Parent Component for the Add section and the List Section */
function Container() {
  const [tasks, setTasks] = useState([]);

  /* Function to store and add Task */
  function addTask(newTask) {
    setTasks((prevTask) => [...prevTask, newTask]);
  }

  /* Function to Remove targeted Task */
  function removeTask(index) {
    setTasks((prevTask) => prevTask.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col w-full md:w-[800px] md:shadow-xl md:rounded-md overflow-hidden">
      <Header />
      <section className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 md:min-h-120">
        <AddSection displayTasks={addTask} />
        <List task={tasks} handleRemove={removeTask} />
      </section>
    </div>
  );
}

export default Container;
