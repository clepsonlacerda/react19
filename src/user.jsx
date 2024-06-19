import { use } from "react";
import { useFormStatus } from "react-dom"
import { AuthContext } from "./context/authContext";

export function User() {
  const { user, handleLogin } = use(AuthContext);

  return (
    <div>
      <h1>usuario online: {user}</h1>

      <button onClick={handleLogin}>
        acessar
      </button>
    </div>
  );
}