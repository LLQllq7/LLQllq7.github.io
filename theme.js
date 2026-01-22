// theme.js
// Handles theme switching: system / classic / plum / mint
// Persists user choice via localStorage

(function () {
  const STORAGE_KEY = "profile-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
  }

  // 1. Apply saved theme on load
  const savedTheme = localStorage.getItem(STORAGE_KEY) || "system";
  applyTheme(savedTheme);

  // 2. Sync dropdown (if exists)
  document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("themeSelect");
    if (!select) return;

    select.value = savedTheme;

    select.addEventListener("change", () => {
      const value = select.value;
      localStorage.setItem(STORAGE_KEY, value);
      applyTheme(value);
    });
  });
})();
