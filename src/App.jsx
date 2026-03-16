import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import Sidebar from "./components/Sidebar";
import { AddTaskContext } from "./context/addTaskContext";
import { initialData } from "./data/data";

export default function App() {
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [tasks, setTasks] = useState(initialData);
  function handleAddNewTask(newTask) {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  return (
    <>
      <AddTaskContext.Provider value={{ addTaskOpen, setAddTaskOpen }}>
        {addTaskOpen ? (
          <AddTask onHandleAddNewTask={handleAddNewTask} />
        ) : (
          <div className="min-h-screen flex flex-col lg:flex-row">
            <Sidebar />
            <main className="flex-1 flex flex-col min-h-0">
              <Header />
              <KanbanBoard tasks={tasks} />
            </main>
          </div>
        )}
      </AddTaskContext.Provider>
    </>
  );
}
