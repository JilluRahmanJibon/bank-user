import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthUser from "../Hooks/AuthUser";

const Login = () => {
  const { http, setToken, getToken } = AuthUser();
  const navigate = useNavigate();

  if (getToken()) {
    // setRole(userInfo.role);
    return navigate("/");
  }

  //   handle login from for user
  const handleLoginForm = async (e) => {
    e.preventDefault();
    const username = e?.target?.username?.value;
    const password = e?.target?.password?.value;

    await http
      .post("/login", { username: username, password: password })
      .then((res) => {
        if (res?.data?.status === "success") {
          Swal.fire({
            title: "Success!",
            text: "Welcome to genzam bank!",
            icon: "success",
            confirmButtonText: "Thank you!",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });

          setToken(
            res.data.data.token,
            res.data.data.user
          );
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.message) {
          Swal.fire({
            title: "Error!",
            text: "Your email and password doe's not match!",
            icon: "error",
            confirmButtonText: "Try again",
            confirmButtonColor: "#374151",
            background: "#1f2937",
            color: "#fff",
          });
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLoginForm}
        className="md:w-1/2 shadow-xl rounded mt-[20vh] mx-auto my-auto border-secondary border-2 p-5"
      >
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-secondary p-2 w-full rounded outline-none"
            placeholder="username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-secondary p-2 w-full rounded outline-none"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="flex justify-between">  
        <button
          type="submit"
          className="text-white bg-secondary px-5 py-2 rounded"
        >
          Submit
        </button>
       
        <Link to={'/registration'}
         
          className="text-white bg-secondary px-5 py-2 rounded"
        >
          Registration
        </Link>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
