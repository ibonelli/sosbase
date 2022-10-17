import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        {/* Falta la ruta de editar... */}
      </Routes>
    </BrowserRouter>
  )
}