import { useEffect } from "react";

export default function TasksList() {

  const loadTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>TasksList</h1>
    </>
  )
}
