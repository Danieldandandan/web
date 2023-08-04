const skills = [
  { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
  { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
  {
    id: "JavaScript_skill",
    content: "JavaScript",
    porcentage: "90%",
    value: "90",
  },
  { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
  {
    id: "ReactJS_skill",
    content: "ReactJS",
    porcentage: "80%",
    value: "80",
  },
  {
    id: "Python_skill",
    content: "Python",
    porcentage: "75%",
    value: "75",
  },
  {
    id: "VanillaJS_skill",
    content: "VanillaJS",
    porcentage: "85%",
    value: "85",
  },
  {
    id: "Wordpress_skill",
    content: "Wordpress",
    porcentage: "80%",
    value: "80",
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
  let curSkills = [...skills];
  const updatedSkills = curSkills.map((sk) => ({ ...sk, value: 0 }));
  return updatedSkills;
}
export function getAboutMe() {
  return aboutMe;
}
