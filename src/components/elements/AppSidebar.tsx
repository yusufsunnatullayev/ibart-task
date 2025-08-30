"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Home,
  BookOpen,
  FileText,
  CheckCircle,
  HelpCircle,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Courses", url: "/courses", icon: BookOpen },
  { title: "Mock IELTS", url: "/mock-ielts", icon: FileText },
  { title: "Level Check", url: "/level-check", icon: CheckCircle },
  { title: "About", url: "/about", icon: HelpCircle },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1];

  return (
    <Sidebar className="border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarContent className="w-64">
        <SidebarGroup className="px-3 py-6">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = `/${currentPath}` === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="h-12 px-4 rounded-xl">
                      <Link
                        href={item.url}
                        className={`flex items-center gap-3 transition-all duration-200 rounded-xl ${
                          isActive
                            ? "bg-primary/10 text-primary font-medium border-r-4 border-primary"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span className="text-base font-medium">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
