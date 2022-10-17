import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksList from "./components/TasksList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksList />} />
      </Routes>
    </BrowserRouter>
  )
}