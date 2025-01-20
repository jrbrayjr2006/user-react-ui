import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let usernameIsInvalid = false;
  return (
    <main className={styles.main}>
      <h1>User Login</h1>
      <form>
        <p>
          <label className={`label ${usernameIsInvalid ? 'invalid' : ''}`}>
            Username:
            <input className={ usernameIsInvalid ? 'invalid' : undefined} type="text" name="username" />
          </label>
        </p>
        <p>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </p>
        <button type="submit">Login</button>

      </form>
    </main>
  );
}
