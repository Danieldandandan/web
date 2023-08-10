const skills = [
  { id: "HTML5", content: "HTML", value: "80", stack: "Front End" },
  { id: "CSS3", content: "CSS", value: "75", stack: "Front End" },
  {
    id: "JavaScript",
    content: "JavaScript",
    value: "90",
    stack: "Programming Language",
  },
  {
    id: "ReactJS",
    content: "ReactJS",
    value: "80",
    stack: "Front End",
  },
  {
    id: "Python",
    content: "Python",
    value: "75",
    stack: "Programming Language",
  },
  {
    id: "NodeJs",
    content: "NodeJs",
    value: "85",
    stack: "Back End",
  },
  {
    id: "SQL",
    content: "SQL",
    value: "65",
    stack: "Programming Language",
  },
  {
    id: "Java",
    content: "Java",
    value: "90",
    stack: "Programming Language",
  },
  {
    id: "JavaFx",
    content: "JavaFx",
    value: "60",
    stack: "Front End",
  },
  {
    id: "JavaSpringBoot",
    content: "Spring Boot",
    value: "70",
    stack: "Back End",
  },
  {
    id: "MongoDb",
    content: "MongoDb",
    value: "75",
    stack: "DataBase",
  },
  {
    id: "AWS",
    content: "AWS",
    value: "40",
    stack: "Cloud",
  },
  {
    id: "C",
    content: "C",
    value: "70",
    stack: "Programming Language",
  },
  {
    id: "C ++",
    content: "C ++",
    value: "75",
    stack: "Programming Language",
  },
];

const aboutMe = [
  {
    id: "first-p-about",
    content:
      "Hello, my name is Zhencheng Chu, you may also know me as Daniel. I was Born in China, I embarked on a transformative journey that led me to the United States for high school before pursuing my passion for computer science at UCSC (University of California Santa Cruz). Swiftly completing my degree in three years with an impressive 3.78 GPA, I emerged not only as a diligent student but also as a fervent enthusiast of software development, particularly in the dynamic realm of full stack development.",
  },
  {
    id: "second-p-about",
    content:
      "My hands-on experience as a Full Stack Software Engineer intern further kindled my dedication to this field. Proficient in a spectrum of technologies including React, NodeJs, MongoDb, Java, and Java Spring Boot, I've crafted a robust skill set to propel digital innovation.",
  },
  {
    id: "third-p-about",
    content:
      "Yet, my interests extend beyond the digital landscape. During my leisure, I find solace in the gym, relish spirited basketball matches, and occasionally dive into the immersive world of video games. My insatiable curiosity, coupled with a zeal for continuous learning, consistently fuels my personal and professional growth.",
  },
];

export function getSkills() {
  return skills;
}
export function getUnValuedSkills() {
  skills.sort((a, b) => b.value - a.value);
  let curSkills = [...skills];
  const updatedSkills = curSkills.map((sk) => ({ ...sk, value: 0 }));
  return updatedSkills;
}
export function getAboutMe() {
  return aboutMe;
}
