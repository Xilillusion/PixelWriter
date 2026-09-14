(() => {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const links = [
    ["index.html", "Tools"],
    ["txt-to-png.html", "TXT to PNG"],
    ["pdf-to-png.html", "PDF to PNG"],
    ["md-to-png.html", "MD to PNG"]
  ];
  const navigation = document.querySelector("[data-site-nav]");
  if (!navigation) return;

  navigation.innerHTML = `
    <a class="brand" href="index.html">PixelWriter</a>
    <div class="nav-links">
      ${links.map(([href, label]) =>
        `<a href="${href}"${href === currentPage ? ' aria-current="page"' : ""}>${label}</a>`
      ).join("")}
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <a href="https://github.com/Xilillusion/PixelWriter.git" target="_blank" rel="noreferrer">
        GitHub · Xilillusion/PixelWriter
      </a>
    </footer>
  `);
})();
