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

</script>

<template>
  <div>
    <sidebar-provider>

      <sidebar>

        <sidebar-header>
          <h2>GuiSports</h2>
        </sidebar-header>

        <sidebar-content>
          
        </sidebar-content>

        <separator />

        <sidebar-footer>

          <avatar>
            <avatar-fallback>AC</avatar-fallback>
          </avatar>

        </sidebar-footer>

      </sidebar>

      <sidebar-trigger />

      <router-view />
      <Toaster position="top-right" rich-colors />
    </sidebar-provider>
  </div>
</template>

<style></style>
