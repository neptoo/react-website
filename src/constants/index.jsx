import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Skills", href: "#skills" },
  { label: "Workflow", href: "#workflow" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonialTexts = [
  "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Front-End Frameworks",
    description:
      "Proficient in React and Vue.js, with experience in building responsive and scalable web applications using these frameworks.",
  },
  {
    icon: <Fingerprint />,
    text: "Problem-Solving",
    description:
      "Proficient in systematic problem-solving approaches, including identifying problems, determining root causes, and finding multiple solutions.",
  },
  {
    icon: <PlugZap />,
    text: "Communication and Collaboration",
    description:
      "Proficient in fostering open communication, building strong relationships, and leveraging technology for effective collaboration.",
  },
  {
    icon: <BatteryCharging />,
    text: "Cross-Browser Compatibility",
    description:
      "Ensuring that web applications work seamlessly across different browsers is critical for a wide user base.",
  },
  {
    icon: <ShieldHalf />,
    text: "Code Testing and Debugging",
    description:
      "Strong skills in testing and debugging code are necessary for ensuring the quality and reliability of web applications.",
  },
  {
    icon: <GlobeLock />,
    text: "Graphical Design",
    description:
      "Knowledge of graphical design principles can enhance the visual appeal of web applications.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const projectOptions = [
  {
    title: "ZoomCV",
    id: 0,
    description: "Multi Page Website",
    features: [
      "VanillaJS / JQuery / TailwindCSS",
      "CryptoJS / Websocket / ECharts",
      "Fullscreen Carousel",
      "Responsive",
    ],
  },
  {
    title: "Admin Dashboard",
    id: 1,
    description: "Vue JS Project",
    features: [
      "Vue2 / ElementUI / ECharts",
      "Baidu Maps API",
      "Permission Control",
      "Real time Render",
    ],
  },
  {
    title: "zhuo xiao mian",
    id: 2,
    description: "Wechat Mini Program",
    features: [
      "WXML / WXSS / ES6+",
      "Vant Weapp / EChart-for-weixin",
      "Interactive Shopping cart",
      "Optimize bundle size",
    ],
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "About" },
  { href: "#", text: "Blog" },
  { href: "#", text: "Copyright" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Terms of Use" },
];

export const platformLinks = [
  { href: "#", text: "Awards" },
  { href: "#", text: "Logos" },
  { href: "#", text: "Customer" },
  { href: "#", text: "Collaboration" },
  { href: "#", text: "Acknowledgment" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
