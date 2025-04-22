export default defineNuxtRouteMiddleware((to) => {
    if (!process.client) return;

    const accessToken = localStorage.getItem("access_token");
    const publicPaths = ["/login", "/regis",'/auth/vk/login/callback'];

    if (publicPaths.includes(to.path)) {
        if (accessToken) {
            return navigateTo("/");
        }
        return;
    }

    if (!accessToken && to.path !== "/auth/vk/login/callback") {
        return navigateTo("/login");
    }
});
