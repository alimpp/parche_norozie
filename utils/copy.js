export const copyToClipboard = (value) => {
  let text = value;
  let element = document.createElement("div");
  element.innerHTML = text;
  let result = element.textContent || element.innerText || "";
  navigator.clipboard
    .writeText(result)
    .then(() => {})
    .catch((err) => {
      console.error("Error copying text to clipboard:", err);
    });
};
