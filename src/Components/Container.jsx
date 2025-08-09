import AddSection from "./sections/AddSection";
import List from "./sections/List";
import Header from "./Header";
import { useState } from "react";

/* Parent Component for the Add section and the List Section */
function Container() {
  const [addTask, setAddTask] = useState([]);

  /* function to store and display the tasks */
  function showTasks(newTask) {
    setAddTask((prevTask) => [...prevTask, newTask]);
  }

  return (
    <div className="flex flex-col w-full">
      <Header />
      <section className="flex flex-col gap-10">
        <AddSection adding={showTasks} />
        <List task={addTask} />
      </section>
    </div>
  );
}

export default Container;
