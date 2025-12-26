import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar"; 
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { ChevronDownIcon, CreditCardIcon } from "lucide-react";
import router from "next/router";

export const DashboardUserButton = () => {
    const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) return null;

  const onLogout = () =>  {
    authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                Router.push("/sign-in");
            }
        }
    });
  }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex
            items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
                {data.user.image ? (
  <Avatar className="size-9 mr-3">
    <AvatarImage src={data.user.image} />
  </Avatar>
) : (
  <GeneratedAvatar
    seed={data.user.name}
    variant="initials"
    className="size-9 mr-3"
  />
)}

<div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
  <p className="text-sm truncate w-full">
    {data.user.name}
  </p>
  <p className="text-xs truncate w-full">
    {data.user.email}
  </p>
</div>
           <ChevronDownIcon className="size-4 shrink-0"/>

        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="right" className="w-72">
            <DropdownMenuLabel>
                <div className="flex flex-col gap-1">
                    <span className="font-medium truncate">{data.user.name}</span>
                    <span className="text-sm font-normal text-muted-foreground truncate">{data.user.email}</span>

                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
                Billing
                <CreditCardIcon className="size-4"/>
            </DropdownMenuItem>
             <DropdownMenuItem
             onClick={onLogout}
             className="cursor-pointer flex items-center justify-between">
                Logout
                <CreditCardIcon className="size-4"/>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}