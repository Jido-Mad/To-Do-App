import Task from "../Task.jsx";

function List({ task, handleRemove }) {
  return (
    <div className="shadow-lg h-95 w-[90%] p-4 bg-white text-[#3B2415] rounded-2xl flex flex-col items-center gap-5 self-center">
      <h2 className="font-roboto-bold text-2xl text-shadow-sm">Todos List</h2>
      <hr className="h-[1px] w-[95%] bg-[#e7cd97] border-none" />
      <ul className="w-full flex flex-col items-center gap-5 h-60 overflow-auto py-2">
        {task.map((t, i) => (
          <Task key={i} name={t} taskDel={() => handleRemove(i)} />
        ))}
      </ul>
    </div>
  );
}

export default List;
