type Theme = "light" | "dark";

document.addEventListener('nav', function () {
  const giscusContainer = document.getElementById('giscus-container');

  if (!giscusContainer) {
    // Comment container is not present in this page
    return
  }

  const updateGiscusTheme = (siteTheme: Theme) => {
    // Remove existing Giscus iframe
    while (giscusContainer.firstChild) {
      giscusContainer.removeChild(giscusContainer.firstChild);
    }

    // Can use themes here from https://giscus.app/
    const giscusTheme = siteTheme === "dark"? "dark" : "light";

    // Re-insert Giscus script with updated theme
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'avcton/avcton.github.io');
    script.setAttribute('data-repo-id', 'R_kgDOME1DnA');
    script.setAttribute('data-category', 'Site Comments');
    script.setAttribute('data-category-id', 'DIC_kwDOME1DnM4CgHjp');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', giscusTheme);
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    giscusContainer.appendChild(script);
  };

  // Apply the current theme to Giscus on page load
  const currentTheme = document.documentElement.getAttribute('saved-theme') as Theme;
  updateGiscusTheme(currentTheme);

  // Listen for theme change events
  document.addEventListener('themechange', (event: CustomEvent<{ theme: Theme }>) => {
    const newTheme = event.detail.theme;
    updateGiscusTheme(newTheme);
  });
});
