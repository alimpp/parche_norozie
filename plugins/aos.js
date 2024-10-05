import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    AOS.init({
      easing: "ease-in-out",
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  });
});
