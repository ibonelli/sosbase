import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";
import { Container } from '@mui/material';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          {/* Falta la ruta de editar... */}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}