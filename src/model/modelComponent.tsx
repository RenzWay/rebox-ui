import { LuPlus } from "react-icons/lu";
import { TbCards } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { GrTooltip } from "react-icons/gr";
import { SiModal } from "react-icons/si";

const modelComponent = [
  {
    title: "Button",
    icon: <LuPlus />,
    decs: "A clickable element used to trigger actions or events.",
    badge: "5 variants",
    link: "/button",
  },
  {
    title: "Card",
    icon: <TbCards />,
    decs: "Cards are flexible containers for grouping related content. Rebox cards are built with clean structure and minimal CSS, making them easy to extend and style.",
    badge: "3 variants",
    link: "/",
  },
  {
    title: "Badge",
    icon: <SlBadge />,
    decs: "Badges are small labels used to highlight status, categories, or metadata. Rebox badges are lightweight and designed to blend naturally with any UI.",
    badge: "2 variants",
    link: "/button",
  },
  {
    title:"Modal",
    icon:<SiModal />,
    decs: "Modals are overlay components that display content on top of the main page. Rebox modals are built with accessibility in mind, ensuring a seamless user experience.",
    badge: "1 variants",
    link: "/",
  },
  {
    title: "Tooltip",
    icon: <GrTooltip />,
    decs: "Tooltips are small pop-up messages that appear when a user hovers over an element. Rebox tooltips are designed to be informative and unobtrusive.",
    badge: "1 variants",
    link: "/button",
  },
];

export default modelComponent;
