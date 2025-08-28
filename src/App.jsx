import Container from "./Components/Container";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:items-center md:justify-center gap-4 bg-[#ECD8B1] md:bg-[#fff4dd]">
      <main className="w-full flex items-start md:items-center justify-center font-roboto  ">
        <Container />
      </main>
      <footer className="flex justify-center md:justify-between w-full md:w-[90%] lg:w-[1000px] items-center text-amber-950 opacity-50">
        <p>
          <span className="font-roboto-bold">
            &copy; {new Date().getFullYear()} Todo App.
          </span>
          All rights reserved.
        </p>
        <p className="hidden md:inline">
          Built by <span className="font-roboto-bold">Jido</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
