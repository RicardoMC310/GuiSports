import { Link } from "react-router";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "./ui/sidebar";
import { Home, LogIn, LogOut, Settings } from "lucide-react";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "./ui/popover";

export default function SidebarUI() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="px-2 py-2">
                    <h1 className="text-lg font-bold tracking-tight">
                        GuiSports
                    </h1>
                    <p className="text-xs text-muted-foreground">
                        Dashboard
                    </p>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>User</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link to="/">
                                        <span className="flex items-center gap-2">
                                            <LogIn size="14" />
                                            Login
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link to="/">
                                        <span className="flex items-center gap-2">
                                            <LogOut size="14" />
                                            Logout
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
            <SidebarRail />
        </Sidebar>
    );
}