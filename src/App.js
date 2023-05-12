import { Navigate, Route, Routes } from "react-router-dom";
import privateRoutes from "./Routes/privateRoutes";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Registration from "./Authentication/Registration";
import Login from "./Authentication/Login";
import AdminRoute from "./Routes/AdminRoute";


function App() {
  const user = localStorage.getItem("access");
  return (
    <div>
      <Routes>
        <Route path={"/registration"} element={<Registration />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        {user &&
          privateRoutes.map(({ Component, path }, index) => (
            <Route key={index * 33494} path="/" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path={path} element={<Component />}></Route>
            </Route>
          ))}
      </Routes>
    </div>
  );
}

export default App;