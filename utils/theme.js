export const themeConfig = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "main");
  } else {
    return theme;
  }
};
