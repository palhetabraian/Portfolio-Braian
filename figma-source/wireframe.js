const page = document.body;
const themeButtons = document.querySelectorAll("[data-theme-toggle]");
const menu = document.querySelector(".mobile-menu");
const navigationLinks = document.querySelectorAll(".nav-links a, .mobile-menu-panel a");
const searchInput = document.querySelector(".search input");
const projectList = document.querySelector("[data-project-list]");
const searchStatus = document.querySelector("#projects-search-status");
const githubReposUrl = "https://api.github.com/users/palhetabraian/repos?sort=updated&per_page=100";
const githubReadmeHeaders = {
  Accept: "application/vnd.github+json",
};
const knownTechnologyKeywords = [
  "React",
  "Vite",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Next.js",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Sass",
  "SCSS",
  "Express",
  "Fastify",
  "NestJS",
  "JWT",
  "Zod",
  "SQLite",
  "MongoDB",
  "Redis",
  "Jest",
  "Vitest",
  "Cypress",
];

let projectRows = [];

function applyTheme(theme) {
  const isLight = theme === "light";

  page.classList.toggle("theme-light", isLight);
  page.classList.toggle("theme-dark", !isLight);
  document.documentElement.style.colorScheme = theme;

  themeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(isLight));
    button.setAttribute("aria-label", isLight ? "Ativar tema escuro" : "Ativar tema claro");
  });
}

function formatNumber(value) {
  return new Intl.NumberFormat("pt-BR").format(value);
}

function createIcon(symbolId) {
  return `<svg class="ui-icon" aria-hidden="true"><use href="#${symbolId}"></use></svg>`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

function decodeBase64Unicode(value) {
  const binary = atob(value.replace(/\s/g, ""));
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

function stripMarkdown(value) {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~|-]/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getReadmeSummary(readme) {
  const paragraphs = readme
    .split(/\n{2,}/)
    .map(stripMarkdown)
    .filter((paragraph) => paragraph.length > 48);
  const summary = paragraphs[0] || stripMarkdown(readme);

  if (summary.length <= 180) return summary;
  return `${summary.slice(0, 177).trim()}...`;
}

function normalizeTechnologyName(name) {
  const aliases = {
    JavaScript: "JavaScript",
    TypeScript: "TypeScript",
    CSS: "CSS",
    HTML: "HTML",
    Dockerfile: "Docker",
    SCSS: "SCSS",
    Shell: "Shell",
    "Tailwind CSS": "TailwindCSS",
    tailwindcss: "TailwindCSS",
    tailwind: "TailwindCSS",
    nodejs: "Node.js",
    node: "Node.js",
    nextjs: "Next.js",
    postgres: "PostgreSQL",
  };

  return aliases[name] || aliases[name.toLowerCase()] || name;
}

function getTechnologyKeywordsFromReadme(readme) {
  const plainReadme = stripMarkdown(readme).toLowerCase();

  return knownTechnologyKeywords.filter((technology) => {
    const normalizedTechnology = technology.toLowerCase().replace(".", "\\.");
    const pattern = new RegExp(`(^|[^a-z0-9])${normalizedTechnology}([^a-z0-9]|$)`, "i");
    return pattern.test(plainReadme);
  });
}

function getRepoDescription(repo) {
  return escapeHtml(
    repo.readmeSummary || repo.description || "Repositório público sem README ou descrição definida."
  );
}

function getRepoTags(repo) {
  const tags = [
    ...(repo.technologyTags || []),
    repo.language,
    ...(repo.topics || []),
  ]
    .filter(Boolean)
    .map(normalizeTechnologyName);

  return [...new Set(tags)];
}

function createRepoRow(repo) {
  const tags = getRepoTags(repo);
  const tagList = tags.length
    ? `<ul class="project-techs">${tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>`
    : "";
  const demoLink = repo.homepage
    ? `<a class="project-link" href="${escapeHtml(repo.homepage)}" target="_blank" rel="noopener noreferrer">${createIcon("icon-external")}Demo</a>`
    : "";

  return `
    <article class="wireframe-project-row" data-project-row>
      <div class="project-main">
        <div>
          <h3>
            <a class="project-title-link" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">
              ${escapeHtml(repo.name)}
              <span aria-hidden="true">↗</span>
            </a>
          </h3>
          <p>${getRepoDescription(repo)}</p>
        </div>
        ${tagList}
      </div>
      <div class="project-side">
        <div class="project-stats" aria-label="Estatísticas do repositório">
          <span class="project-stat">${createIcon("icon-star")}${formatNumber(repo.stargazers_count)}</span>
          <span class="project-stat">${createIcon("icon-code")}${formatNumber(repo.forks_count)}</span>
        </div>
        <div class="project-links">
          <a class="project-link" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">${createIcon("icon-external")}Repo</a>
          ${demoLink}
        </div>
      </div>
    </article>
  `;
}

async function fetchRepoReadmeSummary(repo) {
  try {
    const response = await fetch(`${repo.url}/readme`, {
      headers: githubReadmeHeaders,
    });

    if (!response.ok) return repo;

    const readme = await response.json();
    if (!readme.content) return repo;
    const readmeText = decodeBase64Unicode(readme.content);

    return {
      ...repo,
      readmeText,
      readmeSummary: getReadmeSummary(readmeText),
    };
  } catch {
    return repo;
  }
}

async function fetchRepoLanguages(repo) {
  try {
    const response = await fetch(repo.languages_url, {
      headers: githubReadmeHeaders,
    });

    if (!response.ok) return repo;

    const languages = await response.json();

    return {
      ...repo,
      technologyTags: Object.keys(languages),
    };
  } catch {
    return repo;
  }
}

async function enrichRepo(repo) {
  const repoWithReadme = await fetchRepoReadmeSummary(repo);
  const repoWithLanguages = await fetchRepoLanguages(repoWithReadme);
  const readmeTechnologies = repoWithLanguages.readmeText
    ? getTechnologyKeywordsFromReadme(repoWithLanguages.readmeText)
    : [];

  return {
    ...repoWithLanguages,
    technologyTags: [...(repoWithLanguages.technologyTags || []), ...readmeTechnologies],
  };
}

function updateSearchStatus(visibleCount) {
  if (!searchStatus) return;
  searchStatus.textContent =
    visibleCount === 1 ? "1 repositório exibido." : `${visibleCount} repositórios exibidos.`;
}

function bindSearch() {
  projectRows = Array.from(document.querySelectorAll("[data-project-row]"));
  updateSearchStatus(projectRows.length);
}

function filterProjects() {
  const query = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  let visibleCount = 0;

  projectRows.forEach((row) => {
    const matches = row.textContent.toLocaleLowerCase("pt-BR").includes(query);
    row.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  updateSearchStatus(visibleCount);
}

function renderProjectFallback() {
  if (!projectList) return;

  projectList.innerHTML = `
    <article class="wireframe-project-row project-empty">
      <div>
        <h3>Não foi possível carregar os repositórios agora.</h3>
        <p>A estrutura já está pronta para consumir a API do GitHub no desenvolvimento em React.</p>
      </div>
      <span>GitHub API</span>
    </article>
  `;
  projectList.removeAttribute("aria-busy");
  updateSearchStatus(0);
}

async function loadGithubRepos() {
  if (!projectList) return;

  try {
    const response = await fetch(githubReposUrl, {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!response.ok) throw new Error(`GitHub API respondeu ${response.status}`);

    const repos = await response.json();
    const visibleRepos = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 12);

    if (!visibleRepos.length) {
      renderProjectFallback();
      return;
    }

    const reposWithReadmes = await Promise.all(visibleRepos.map(enrichRepo));

    projectList.innerHTML = reposWithReadmes.map(createRepoRow).join("");
    projectList.removeAttribute("aria-busy");
    bindSearch();
    filterProjects();
  } catch (error) {
    console.warn(error);
    renderProjectFallback();
  }
}

const savedTheme = localStorage.getItem("portfolio-theme");
applyTheme(savedTheme === "light" ? "light" : "dark");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = page.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });
});

document.querySelectorAll(".mobile-menu-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu) menu.open = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu?.open) {
    menu.open = false;
    menu.querySelector("summary")?.focus();
  }
});

document.addEventListener("click", (event) => {
  if (menu?.open && !menu.contains(event.target)) menu.open = false;
});

searchInput?.addEventListener("input", filterProjects);

const observedSections = document.querySelectorAll("#inicio, #projetos");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navigationLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: [0, 0.25, 0.5] }
);

observedSections.forEach((section) => sectionObserver.observe(section));
loadGithubRepos();
