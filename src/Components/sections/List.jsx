import Task from "../Task.jsx";

function List({ task, handleRemove }) {
  return (
    <div className="shadow-lg md:shadow-none h-95 md:h-150 w-[90%] md:w-[50%] p-4 bg-[#fcf7df] text-[#3B2415] rounded-2xl md:rounded-none flex flex-col items-center gap-5 self-center md:self-start">
      <h2 className="font-roboto-bold text-2xl text-shadow-sm">Todos List</h2>
      <ul className="md:w-full bg-white flex flex-col items-center gap-5 h-60 md:h-[85%] md:shadow-md md:rounded-2xl overflow-auto p-4">
        {task.map((task) => (
          <Task
            key={task.id}
            name={task.name}
            taskDel={() => handleRemove(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
