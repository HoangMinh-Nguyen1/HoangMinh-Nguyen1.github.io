
import Skill1 from "@/assets/images/skill-icon/skill1.svg?react";
import Skill2 from "@/assets/images/skill-icon/skill2.svg?react";
import Skill3 from "@/assets/images/skill-icon/skill3.svg?react";
import Skill4 from "@/assets/images/skill-icon/skill4.svg?react";
import Skill5 from "@/assets/images/skill-icon/skill5.svg?react";
import Skill6 from "@/assets/images/skill-icon/skill6.svg?react";
import Skill7 from "@/assets/images/skill-icon/skill7.svg?react";
import Skill8 from "@/assets/images/skill-icon/skill8.svg?react";
import Skill9 from "@/assets/images/skill-icon/skill9.svg?react";
import Skill10 from "@/assets/images/skill-icon/skill10.svg?react";
import LinkedIn from "@/assets/images/social-icon/linkedin.svg?react";
import Google from "@/assets/images/social-icon/google.svg?react";
import Facebook from "@/assets/images/social-icon/facebook.svg?react";
import dashForImpact from "@/assets/images/projects/dash_for_impact.png"
import photography from "@/assets/images/projects/photography.png"
import graphicDesign from "@/assets/images/projects/graphic_design.png"
import videography from "@/assets/images/projects/videography.png"
import dataVisualization from "@/assets/images/projects/data_visualization.png"

export const projects = [
  {
    image: dashForImpact,
    title: "‘Dash For Impact’ Project",
    desc: "A project of the world's largest international youth organization.",
    skills: [
      {
        title: "Google Suit",
        icon: <Skill8/>,
        link: "",
      },
      {
        title: "Meta",
        icon: <Skill6/>,
        link: "",
      },
      {
        title: "Illustrator",
        icon: <Skill1/>,
        link: "",
      },
      {
        title: "Premiere",
        icon: <Skill4/>,
        link: "",
      },
      {
        title: "mailchimp",
        icon: <Skill5/>,
        link: "",
      },
    ],
    link: "https://drive.google.com/file/d/1zOcHdhiHg68l3moaKUvLjZ00HcnJSCJT/view?usp=drive_link",
  },
  {
    image: photography,
    title: "Media Projects",
    desc: "Overall media projects I have done including photography, videography & graphic design.",
    skills: [
      {
        title: "Lightroom",
        icon: <Skill2/>,
        link: "",
      },
      {
        title: "Photoshop",
        icon: <Skill3/>,
        link: "",
      },
      {
        title: "Illustrator",
        icon: <Skill1/>,
        link: "",
      },
      {
        title: "Figma",
        icon: <Skill7/>,
        link: "",
      },
      {
        title: "Premiere",
        icon: <Skill4/>,
        link: "",
      },
    ],
    link: "https://www.behance.net/hongminhnguyn21/",
  },
  {
    image: dataVisualization,
    title: "Data Visualization",
    desc: "Turning complex data into clear, impactful visuals.",
    skills: [
      {
        title: "Tableau",
        icon: <Skill9/>,
        link: "",
      },
      {
        title: "SPSS",
        icon: <Skill10/>,
        link: "",
      },
    ],
    link: "https://drive.google.com/drive/folders/1QDoYKtI6igtHCxA60TezZr5WBm7vSKCP?usp=sharing",
  },
];