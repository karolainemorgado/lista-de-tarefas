"use client";

import FormInput from "@/components/FormInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    // if(!email || password) {
    //  return alert("Digite email")
    // }
    
    router.push("/home");
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div>
        <div className="flex w-60 flex-col">
          <FormInput
            type={"email"}
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type={"password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="mt-4 rounded-sm bg-blue-500 text-white"
            type="submit"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
