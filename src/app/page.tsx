"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import Logo from "./assets/Logo.png";
import Zerou from "./assets/Zerou.png";
import { ButtonNewTask } from "./components/ButtonNewTask";
import { InputSearch } from "./components/InputSearch";
import { Options } from "./components/Options";
import { Task } from "./components/Task";

interface Task {
  completed: boolean;
  id: number;
  text: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("Todos");

  const handleFilterTasks = (option: string) => {
    setFilter(option);
  };

  const filteredTasks = useMemo(() => {
    const filteredByFilter =
      filter === "Abertas"
        ? tasks.filter(task => !task.completed)
        : filter === "Concluídas"
        ? tasks.filter(task => task.completed)
        : tasks;

    if (searchValue.trim()) {
      return filteredByFilter.filter(task =>
        task.text.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }

    return filteredByFilter;
  }, [filter, tasks, searchValue]);

  const handleTaskInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewTaskText(event.target.value);
  };

  const handleCreateTask = () => {
    if (newTaskText.trim() === "") {
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <main className="flex flex-col min-h-screen p-24 bg-[#0D0D0D]">
      <div className="flex justify-between text-[#FBFBFF] ">
        <div className="w-full">
          <div>
            <Image
              src={Logo}
              alt=""
              width={161}
              height={24}
              quality={100}
              className="object-contain"
            />
          </div>

          <h2 className="text-1xl mt-28">Fala futuro Ubuntu,</h2>
          <h1 className="text-2xl font-bold">
            Produtividade é o nome do jogo!
          </h1>
          <div className="flex flex-row items-center">
            <h1 className="font-bold text-3xl text-[#9AFF89]">#</h1>
            <h1 className="font-bold text-3x ml-1">Partiu</h1>
          </div>

          <div className="flex flex-row justify-end">
            <Options
              text="Todos"
              number={tasks.length}
              onClick={() => handleFilterTasks("Todos")}
              selected={filter === "Todos"}
              disabled={filter === "Todos"}
            />
            <Options
              text="Abertas"
              number={tasks.length - completedCount}
              onClick={() => handleFilterTasks("Abertas")}
              selected={filter === "Abertas"}
              disabled={filter === "Abertas"}
            />
            <Options
              text="Concluídas"
              number={completedCount}
              onClick={() => handleFilterTasks("Concluídas")}
              selected={filter === "Concluídas"}
              disabled={filter === "Concluídas"}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-6 justify-between">
        <div className="flex flex-row gap-4">
        <input
          className="border border-[#373737] rounded-md p-2 focus:outline-none focus:border-[#9AFF89] bg-[#181818] w-[590px] text-white"
          type="text"
          value={newTaskText}
          onChange={handleTaskInputChange}
          placeholder="Nome da tarefa"
        />

        <ButtonNewTask
          onClick={handleCreateTask}
          text="Criar nova tarefa"
          children
        />
        </div>
        <InputSearch
          onChange={handleSearchChange}
          placeholder="Pesquisar"
          value={searchValue}
        />
      </div>

      <div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <Task
              key={task.id}
              text={task.text}
              onClick={() => handleDeleteTask(task.id)}
              completed={task.completed}
              onToggle={() => handleTaskCompletion(task.id)}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-96 mt-12">
            <Image alt="" src={Zerou} />
          </div>
        )}
      </div>
    </main>
  );
}
