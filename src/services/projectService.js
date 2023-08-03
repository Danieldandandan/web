const projects = [
  {
    title: "Personal Website",
    skills: ["React", "HTML", "CSS", "JQuery"],
    GitHub: "https://github.com/Danieldandandan/web",
    publishLink: "https://google.com",
    img: require("../img/personalWeb.png"),
  },
  {
    title: "Scrum Board",
    skills: ["React", "HTML", "CSS", "NodeJs", "MongoDb"],
    GitHub: "https://github.com/Danieldandandan/Board",
    publishLink: "https://google.com",
    img: require("../img/scrumBoard.png"),
  },
];

export function getProjects() {
  return projects;
}
