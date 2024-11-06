import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let isInvalid = false;
  return (
    <main>
      <h1>User Login</h1>
      <form>
        <label>
          Username:
          <input className={ isInvalid ? 'invalid' : undefined} type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
