import AddSection from "./sections/AddSection";
import List from "./sections/List";
import Header from "./Header";

function Container() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <section className="flex flex-col">
        <AddSection />
        <List />
      </section>
    </div>
  );
}

export default Container;
