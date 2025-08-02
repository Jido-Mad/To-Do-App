import Task from "../Task";

function List() {
  return (
    <div className="shadow-lg h-95 w-[90%] p-4 bg-[#ECD8B1] text-[#3B2415] rounded-2xl flex flex-col items-center gap-5 self-center">
      <h2 className="font-roboto-bold text-2xl text-shadow-sm">Todos</h2>
      <hr className="h-[1px] w-[90%] bg-[#3B2415] opacity-[30%] border-none" />
      <ul className="w-full flex flex-col items-center gap-5 h-full  overflow-auto">
        <p className="m-auto opacity-[30%] text-xl">
          Your Tasks Will Appear Here
        </p>
      </ul>
    </div>
  );
}

export default List;
