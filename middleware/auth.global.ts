export default defineNuxtRouteMiddleware((to) => {
    if (!process.client) return;

    const accessToken = localStorage.getItem("access_token");
    const publicPaths = ["/login", "/regis"];

    if (publicPaths.includes(to.path)) {
        if (accessToken) {
            return navigateTo("/");
        }
        return;
    }

    if (!accessToken) {
        return navigateTo("/login");
    }
});
