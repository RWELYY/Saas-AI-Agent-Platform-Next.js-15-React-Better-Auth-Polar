"use client";

import Link from "next/link";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react"
import Image from "next/image";
import { cn } from "@/lib/utils"
import { DashboardUserButton } from "./dashboard-user-button";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const firstSection = [
    {
        icon: VideoIcon,
        label: "Meeting",
        href: "/meetings",
    },
    {
        icon: BotIcon,
        label: "Agents",
        href: "/agents",
    },
];

const secondSection = [
    {
        icon: StarIcon,
        label: "Updgrade",
        href: "/upgrade",
    },
];

export const DashboardSidebar = () => {
    // const pathname = usePathname();
    const pathname = "/"
    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                    <Image src="/logo.svg" width={36} height={36} alt="RWELYYAI" />
                    <p className="text-2xl font-semibold">RwelyyAI</p>
                </Link>
            </SidebarHeader>

            <div className="px-4 py-2">
                <Separator className="opacity-10 text-[#5D6B68]" />
            </div>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                    asChild
                                        className={cn(
                                        "h-10 border border-transparent hover:border-[#5D6B68]/10 hover:bg-gradient-to-r from-sidebar-accent/5 via-sidebar/50 to-sidebar/50",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10"
                                        )}
                                        isActive={pathname === item.href}
                                        >
                                        <Link href={item.href}>
                                        <item.icon className="size-5" />
                                            <span className="text-sm font-medium tracking-tight">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="px-4 py-2">
                <Separator className="opacity-10 text-[#5D6B68]" />
            </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                    asChild
                                        className={cn(
                                        "h-10 border border-transparent hover:border-[#5D6B68]/10 hover:bg-gradient-to-r from-sidebar-accent/5 via-sidebar/50 to-sidebar/50",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10"
                                        )}
                                        isActive={pathname === item.href}
                                        >
                                        <Link href={item.href}>
                                        <item.icon className="size-5" />
                                            <span className="text-sm font-medium tracking-tight">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="text-white">
                <DashboardUserButton />
            </SidebarFooter>
        </Sidebar>

    )
}