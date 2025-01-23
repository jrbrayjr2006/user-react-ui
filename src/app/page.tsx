'use client';

import styles from "./page.module.css";
import { useRef, useState } from "react";


export default function Home() {
  const [username, setUsername] = useState('');
  let usernameInput = useRef();
  let usernameIsInvalid = false;

  function handleSubmit(event) {
    event.preventDefault();
    setUsername(usernameInput.current.value);
  }
  return (
    <main className={styles.main}>
      <h1>User Login</h1>
      <p>Welcome {username}</p>
      <form>
        <p>
          <label className={`label ${usernameIsInvalid ? 'invalid' : ''}`}>
            Username:
            <input ref={usernameInput} className={ usernameIsInvalid ? 'invalid' : undefined} type="text" name="username" />
          </label>
        </p>
        <p>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </p>
        <button type="submit" onClick={handleSubmit}>Login</button>

      </form>
    </main>
  );
}
