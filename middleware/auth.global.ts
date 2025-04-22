export default defineNuxtRouteMiddleware((to) => {
    if (!process.client) return;
  
    const accessToken = localStorage.getItem("access_token");
  
    const publicPaths = ["/login", "/regis", "/auth/vk/login/callback"];
  
    // Allow access to public pages without token
    if (publicPaths.includes(to.path)) {
      return;
    }
  
    // If no access token and not a public page, redirect to login
    if (!accessToken) {
      return navigateTo("/login");
    }
  });
  