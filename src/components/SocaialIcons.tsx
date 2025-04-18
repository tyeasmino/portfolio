import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SocialIcons = () => {
  const iconStyle = "text-black group-hover:text-white text-xl";

  const icons = [
    { icon: <FaGithub className={iconStyle} />, link: "https://github.com" },
    { icon: <FaLinkedinIn className={iconStyle} />, link: "https://linkedin.com" },
    { icon: <FaFacebookF className={iconStyle} />, link: "https://facebook.com" },
  ];

  return (
    <div className="flex gap-4 mt-6">
      {icons.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-10 h-10 flex items-center justify-center border border-black rounded transition-all duration-300 hover:bg-black"
        > 
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
