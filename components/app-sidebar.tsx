"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, MessageSquare, Settings, User, LogOut, Bell, Search } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center px-4 py-5">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-1.5 rounded-md">
              <MessageSquare size={18} />
            </div>
            <span className="font-bold text-lg text-primary">LeftOnRead</span>
          </div>
          <div className="ml-auto md:hidden">
            <SidebarTrigger />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/">
                <Home />
                <span>Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <a href="/messages">
                <MessageSquare />
                <span>Messages</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/notifications">
                <Bell />
                <span>Notifications</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/search">
                <Search />
                <span>Search</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/profile">
                <User />
                <span>Profile</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/settings">
                <Settings />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2">
          <div className="bg-muted/30 rounded-lg p-3 mb-3">
            <p className="text-xs text-muted-foreground mb-2">Database integration with Drizzle ORM coming soon</p>
            <div className="h-1.5 w-full bg-muted/30 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button>
                <LogOut />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
