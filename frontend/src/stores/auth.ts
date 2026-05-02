import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const isLogged = ref(sessionStorage.getItem("isLogged") === "true");

    const login = () => {
        isLogged.value = true;
        sessionStorage.setItem("isLogged", "true");
    }

    const logout = () => {
        isLogged.value = false;
        sessionStorage.setItem("isLogged", "false");
    }

    return {isLogged, login, logout};
});