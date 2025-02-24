import classNames from "classnames";
import "./Tag.css";

const Tag = ({ children, type = "primary", link = "#" }) => {
  return (
    <span
      className={classNames("tag", {
        [`tag-${type}`]: type,
      })}
    >
      <a href={link}>{children}</a>
    </span>
  );
};

export default Tag;