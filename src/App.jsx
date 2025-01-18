import Header from "./Components/Header";
import TagsFilter from "./Components/TagsFilter";
import Card from "./Components/Card"

import articles from "./data/articles.json";
import filters from "./data/filters.json"

const isExtended = (index) => (index + 1) % 4 === 0;
const isReversed = (index) => (index + 1) % 8 === 0;

function App() {


  return (
    <>
      <Header image="/images/logo.png"/>
      <main>
        <section className="featured-posts">
          <article></article>
          <div className="button-container">
            <button>Atras</button>
            <button>Adelante</button>
          </div>
        </section>
        <section className="post-list-container">
          <TagsFilter filters={filters} />
          <div className="post-list">
            {articles.map((article, index) => (
              <Card
                key={index}
                {...article}
                isExtended={isExtended(index)}
                isReversed={isReversed(index)}
              />
            ))}
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );

};

export default App;



