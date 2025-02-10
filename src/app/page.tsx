'use client';
import Image from "next/image";
import {useRef, useState} from "react";

export default function Home() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let usernameInput = useRef<HTMLInputElement>(null); 
  let usernameIsInvalid: boolean = false;

  function handleSubmit(event : React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (usernameInput.current) {
      setUsername(usernameInput.current.value);
      setIsLoggedIn(true);
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col row-start-2 h-screen my-8 px-auto items-center justify-center container mx-auto">
        <h1 className="text-3xl font-bold">User Login</h1>
        {isLoggedIn ? <p>Welcome {username}</p> : <p></p>}
        <form className="flex flex-col bg-slate-100 rounded-md p-8">
          <p className="mt-3">
            <label className={`label ${usernameIsInvalid ? 'invalid' : ''}`}>
              <span className="text-black font-bold mr-4">Username:</span>
              <input ref={usernameInput} className={ usernameIsInvalid ? 'invalid' : undefined} type="text" name="username" />
            </label>
          </p>
          <p className="mt-3">
            <label>
            <span className="text-black font-bold mr-4">Password:</span>
              <input type="password" name="password" />
            </label>
          </p>
          <button className="mt-3 bg-slate-400 py-3 px-5 text-white hover:bg-slate-600" type="submit" onClick={handleSubmit}>Login</button>
        </form>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
