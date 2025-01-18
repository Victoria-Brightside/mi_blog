import classNames from "classnames"
import "./Link.css";

const Link = ({ children, href = "#", isActive }) => {
  return (
    <a
      href={href}
      className={classNames("text-button text-button-md font-bold", {
        "is-active": isActive,
      })}
    >
      {children}
    </a>
  );
};

export default Link;
