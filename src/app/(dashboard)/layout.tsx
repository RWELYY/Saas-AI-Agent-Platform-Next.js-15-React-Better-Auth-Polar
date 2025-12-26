"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/modules/auth/ui/views/dashboard/ui/components/dashboard-navbar";
import { DashboardSidebar } from "@/modules/auth/ui/views/dashboard/ui/components/dashboard-sidebar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main className="flex flex-col h-screen w-screen bg-muted">
            <DashboardNavbar />
            {children}
            </main>
        </SidebarProvider>
    )
}

export default Layout;