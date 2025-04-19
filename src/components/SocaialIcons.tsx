import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SocialIcons = () => {
  const iconStyle = "text-black group-hover:text-white text-xl";

  const icons = [
    { icon: <FaGithub className={iconStyle} />, link: "https://github.com/tyeasmino" },
    { icon: <FaLinkedinIn className={iconStyle} />, link: "https://www.linkedin.com/in/tamima-yeasmin-286123168/" },
    { icon: <FaFacebookF className={iconStyle} />, link: "https://www.facebook.com/tyeasmino106/" },
  ];

  return (
    <div className="flex gap-4 mt-6">
      {icons.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-10 h-10 flex items-center justify-center border border-black rounded transition-all duration-300 hover:bg-black dark:bg-white dark:hover:border-1 dark:border-white"
        > 
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
