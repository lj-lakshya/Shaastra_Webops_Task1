import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email && password) {

      localStorage.setItem("isLoggedIn", "true");

      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-zinc-900 p-10 rounded-2xl w-[400px] shadow-2xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-zinc-800 outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-zinc-800 outline-none"
          />

          <button
            onClick={handleLogin}
            className="bg-emerald-500 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}