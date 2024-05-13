import { API_URL, authPaths } from "src/types";
import toast from "react-hot-toast";

export const LoginView = () => {
  async function login(formData: FormData) {
    const rawFormData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    const res = await fetch(API_URL + authPaths.LOGIN, {
      method: "POST",
      body: JSON.stringify(rawFormData),
    });
    const data = await res.json();

    if (!data.error) toast.success("Login successful!");
    else toast.error(data.error);
  }
  return (
    <>
      <h1>Please Login:</h1>
      <form action={login}>
        <label>Username:</label>
        <input type="text" name="username" />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
