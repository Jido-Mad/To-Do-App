import { IoIosAdd } from "react-icons/io";

function AddSection() {
  return (
    <div className="flex flex-col items-center p-4 gap-6">
      <h2 className="font-roboto-bold text-xl">Add a Todo:</h2>
      <label htmlFor="todo-input" className="sr-only">
        Enter a new task
      </label>
      <input
        id="todo-input"
        type="text"
        placeholder="Type Here..."
        className="w-70 h-10 p-2 border border-[#ECD8B1] rounded-md outline-none "
      />
      <button className="text-white font-roboto-bold bg-[#693F26] w-70 h-10 rounded-md shadow-md ">
        Add to list
      </button>
    </div>
  );
}

export default AddSection;
