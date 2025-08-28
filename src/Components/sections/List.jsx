// List.js
import Task from "../Task.jsx";

function List({ task, handleRemove, toggleComplete }) {
  return (
    <div className="shadow-lg md:shadow-none h-95 sm:h-120 md:h-150 w-[90%] sm:w-[70%] md:w-[50%] p-4 bg-[#fcf7df] text-[#3B2415] rounded-2xl md:rounded-none flex flex-col items-center gap-5 self-center md:self-start">
      <h2 className="font-roboto-bold text-2xl text-shadow-sm">Todos List</h2>
      <ul
        className={`w-full md:bg-white flex flex-col items-center ${
          !task.length ? "justify-center" : "justify-start"
        } gap-5 h-60 sm:h-120 md:h-[90%] md:shadow-md md:rounded-2xl overflow-auto p-4`}
      >
        {!task.length ? (
          <span className="text-xl md:text-xl lg:text-2xl text-gray-300 font-roboto-bold">
            Tasks will be displayed here.
          </span>
        ) : (
          task.map((task) => (
            <Task
              key={task.id}
              task={task}
              taskDel={() => handleRemove(task.id)}
              toggleComplete={() => toggleComplete(task.id)}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default List;
