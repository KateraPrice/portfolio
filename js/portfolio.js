const projects = [
  {
    title: "Meme Generator",
    description: "Create and share custom memes using images and text overlays.",
    image: "https://via.placeholder.com/300x200/C1D0B5/4C5C52?text=Meme+Generator",
    link: "https://github.com/kateraprice/meme-generator"
  },
  {
    title: "Caesar Tradional Party",
    description: "Encrypt and decrypt messages with the Caesar Cipher technique.",
    image: "https://via.placeholder.com/300x200/4C5C52/ffffff?text=Caesar+Cipher",
    link: "https://github.com/KateraPrice/Caesar-s-Traditional-Secret-Party"
  },
  {
    title: "Skincare Jeopardy",
    description: "Test your skincare ingredient knowledge in this quiz game.",
    image: "https://via.placeholder.com/300x200/A2674A/ffffff?text=Skincare+Jeopardy",
    link: "https://github.com/kateraprice/skincare-jeopardy"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 4px;" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank" class="cta-button">View Code</a>
  `;
  projectList.appendChild(card);
});


