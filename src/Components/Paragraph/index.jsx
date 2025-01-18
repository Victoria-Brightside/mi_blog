import classNames from "classnames";
import "./Paragraph.css";

const Paragraph = ({
  as: Component = "span",
  children,
  size = "sm",
  isHelpText,
}) => {
  return (
    <Component
      className={classNames("paragraph", "font-regular", {
        [`paragraph-${size}`]: size,
        "is-help-text": isHelpText,
      })}
    >
      {children}
    </Component>
  );
};

export default Paragraph;
