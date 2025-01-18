import classNames from "classnames";
import Tag from "../Tag";
import Author from "../Author";
import Paragraph from "../Paragraph";
import Time from "../Time";
import "./Card.css";

const Card = ({
    unsplashId,
    unsplashAlt,
    tags,
    title,
    extract,
    date,
    author,
    readTime,
    isExtended = false,
    isReversed = false,
  }) => {
    return (
      <article
        className={classNames("card", {
          "is-extended": isExtended,
          "is-reversed": isReversed,
        })}
      >
        <img
          src={`https://source.unsplash.com/${unsplashId}`}
          alt={unsplashAlt}
        />
        <section>
          <div className="card-content">
            <header>
              <div className="card-tags">
                {tags?.map((tag, index) => (
                  <Tag type={isExtended ? "secondary" : "primary"} key={index}>
                    {tag}
                  </Tag>
                ))}
              </div>
              <h2 className="heading heading-sm font-bold">{title}</h2>
              <Time>{date}</Time>
            </header>
            <Paragraph>{extract}</Paragraph>
          </div>
          <footer>
            <Author name={author} />
            <Paragraph size="xs" isHelpText as="span">
              {readTime}
            </Paragraph>
          </footer>
        </section>
      </article>
    );
  };
  
  export default Card;
  