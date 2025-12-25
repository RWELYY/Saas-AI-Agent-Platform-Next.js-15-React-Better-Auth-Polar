"use client";

import { useState } from "react"

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input"
import { Button }  from "@/components/ui/button"

export default function Home() {

      const { data: session} = authClient.useSession() 


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password,
    }, {
      onError: () => {
        window.alert("som");
      },
      onSuccess: () => {
        window.alert("Sucess")
      }
    });
  }

  const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () => {
        window.alert("som");
      },
      onSuccess: () => {
        window.alert("Sucess")
      }
    });
  }

  if (session) {
    return (
      <div className="flex flex-col gap-y-4">
        <p>Logged in {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>
          Sign out
        </Button>
      </div>
    )
  }
  return (
    <div className="p-4 flex flex-col gap-y-10">
    <div className="p-4 flex flex-col gap-y-4">
      <Input
      placeholder="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <Input
      placeholder="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <Input
      placeholder="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>create user</Button>

    </div>
      <Input
      placeholder="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <Input
      placeholder="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onLogin}>Login</Button>
    </div>
  )
}