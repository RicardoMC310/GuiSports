<script setup lang="ts">
import { Toaster } from "vue-sonner";

import SidebarProvider from "./components/ui/sidebar/SidebarProvider.vue";
import Sidebar from "./components/ui/sidebar/Sidebar.vue";
import SidebarTrigger from "./components/ui/sidebar/SidebarTrigger.vue";
import SidebarHeader from "./components/ui/sidebar/SidebarHeader.vue";
import SidebarContent from "./components/ui/sidebar/SidebarContent.vue";
import SidebarFooter from "./components/ui/sidebar/SidebarFooter.vue";

import Separator from "./components/ui/separator/Separator.vue";

import Avatar from "./components/ui/avatar/Avatar.vue";
import AvatarFallback from "./components/ui/avatar/AvatarFallback.vue";

import { Button } from "@/components/ui/button";
import { Home, LogIn, Moon, Sun, UserCog, UserPlus } from "lucide-vue-next";

import { useDark, useToggle } from "@vueuse/core";
import { useAuthStore } from "./stores/auth";

import DropdownMenu from "./components/ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuTrigger from "./components/ui/dropdown-menu/DropdownMenuTrigger.vue";
import DropdownMenuContent from "./components/ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuGroup from "./components/ui/dropdown-menu/DropdownMenuGroup.vue";
import DropdownMenuLabel from "./components/ui/dropdown-menu/DropdownMenuLabel.vue";
import DropdownMenuItem from "./components/ui/dropdown-menu/DropdownMenuItem.vue";
import { useRoute } from "vue-router";
import Accordion from "./components/ui/accordion/Accordion.vue";
import AccordionTrigger from "./components/ui/accordion/AccordionTrigger.vue";
import AccordionContent from "./components/ui/accordion/AccordionContent.vue";
import AccordionItem from "./components/ui/accordion/AccordionItem.vue";
import SidebarGroup from "./components/ui/sidebar/SidebarGroup.vue";
import SidebarMenuButton from "./components/ui/sidebar/SidebarMenuButton.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { isLogged } = useAuthStore();

const route = useRoute();

</script>

<template>
  <div>
    <SidebarProvider>

      <Sidebar>

        <SidebarHeader>
          <h2>GuiSports</h2>
        </SidebarHeader>

        <SidebarContent class="p-2">

          <Accordion type="single" collapsible>

            <AccordionItem value="geral">

              <AccordionTrigger>Geral</AccordionTrigger>

              <AccordionContent>

                <SidebarGroup>

                  <SidebarMenu>

                    <SidebarMenuItem>
                      <SidebarMenuButton>
                          <RouterLink to="/" class="flex items-center gap-2">
                            <Home /> Home
                          </RouterLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                  </SidebarMenu>

                </SidebarGroup>
                
              </AccordionContent>

            </AccordionItem>

          </Accordion>

        </SidebarContent>

        <Separator />

        <SidebarFooter>

          <div class="flex justify-between">

            <Avatar>
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>

            <DropdownMenu>

              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <UserCog />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>

                <DropdownMenuGroup v-if="isLogged">

                  <DropdownMenuLabel>Conta</DropdownMenuLabel>

                </DropdownMenuGroup>

                <DropdownMenuGroup v-else>

                  <DropdownMenuLabel>Conta</DropdownMenuLabel>

                  <DropdownMenuItem>
                    <RouterLink to="/login">
                      <div class="flex items-center gap-2">
                        <LogIn /> Entrar
                      </div>
                    </RouterLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <RouterLink to="/register">
                      <div class="flex items-center gap-2">
                        <UserPlus /> Registrar
                      </div>
                    </RouterLink>
                  </DropdownMenuItem>

                </DropdownMenuGroup>

              </DropdownMenuContent>

            </DropdownMenu>

          </div>

        </SidebarFooter>

      </Sidebar>

      <div class="flex flex-col flex-1">

        <!-- HEADER -->
        <header class="w-full bg-secondary h-16 flex items-center px-4 justify-between">

          <!-- ESQUERDA -->
          <div class="flex items-center gap-3">
            <SidebarTrigger />

            <div class="flex flex-col leading-tight">
              <h2 class="font-semibold">
                {{ route.meta.headerTitle || "GuiSports" }}
              </h2>
              <h4 class="text-xs opacity-70">{{ route.meta.headerSubTitle || "" }}</h4>
            </div>
          </div>

          <!-- DIREITA -->
          <div class="flex items-center gap-3">

            <!-- THEME TOGGLE -->
            <Button variant="outline" size="icon" @click="toggleDark()">
              <Moon v-if="isDark" class="w-4 h-4" />
              <Sun v-else class="w-4 h-4" />
            </Button>

          </div>

        </header>

        <!-- CONTENT -->
        <main class="flex-1 overflow-auto p-4">
          <router-view />
        </main>

      </div>

      <Toaster position="top-right" rich-colors />

    </SidebarProvider>
  </div>
</template>

<style></style>