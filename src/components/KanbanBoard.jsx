import TempleteContainer from "./TempleteContainer";

export default function KanbanBoard({ tasks }) {
  const todos = tasks.filter((item) => item.status === "To-do");
  const inProgress = tasks.filter((item) => item.status === "In Progress");
  const done = tasks.filter((item) => item.status === "Done");
  //   console.log(todos);

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        {/* <!-- Todo Column --> */}
        <TempleteContainer todos={todos} title={"To-do"} />
        {/* <!-- Todo Column --> */}
        <TempleteContainer todos={inProgress} title={"In Progress"} />
        {/* <!-- Todo Column --> */}
        <TempleteContainer todos={done} title={"Done"} />
      </div>
    </div>
  );
}
