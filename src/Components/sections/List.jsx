import Task from "../Task.jsx";

function List({ task, handleRemove }) {
  return (
    <div className="shadow-lg md:shadow-none h-95 md:h-150 w-[90%] md:w-full p-4 bg-[#fcf7df] text-[#3B2415] rounded-2xl md:rounded-none flex flex-col items-center gap-5 self-center md:self-start">
      <h2 className="font-roboto-bold text-2xl text-shadow-sm">Todos List</h2>
      <hr className="h-[1px] w-full bg-[#e7cd97] border-none" />
      <ul className="w-full flex flex-col items-center gap-5 h-60 md:h-110 overflow-auto py-2">
        {task.map((t, i) => (
          <Task key={i} name={t} taskDel={() => handleRemove(i)} />
        ))}
      </ul>
    </div>
  );
}

export default List;
