"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
    const router = useRouter();
  const { data : session } = authClient.useSession();

  if(!session) {
    return (
      <p>loading...</p>
    )
  }
  return (
    <div className="flex flex-col gap-y-4">
        <p>Logged in {session.user.name}</p>
        <Button onClick={() => authClient.signOut({
            fetchOptions: {
                onSuccess: () => router.push("/sign-in"),
            }
        })
        }>
          Sign out
        </Button>
      </div>
  )
}
