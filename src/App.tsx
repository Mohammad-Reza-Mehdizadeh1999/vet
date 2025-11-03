import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/authentication/AuthContainer";

export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/auth" element={<AuthPage />}/>
      </Routes>
      
    </div>
  )
}
