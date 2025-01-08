import Card from "./Components/Card/Card"

function App() {


  return (
    <>
      <div className="main-container">
        <header className="main-navbar">
          <img
            src="/images/logos/undefined-shell.svg"
            alt="Logo de Undefined Shell"
          />
          <nav>
            <ul className="nav-list">
              <li>
                <Link isActive={true}>Inicio</Link>
              </li>
              <li>
                <Link>Suscribirse</Link>
              </li>
              <li>
                <Button>Undefined Academy</Button>
              </li>
              <li>
                <Button type="secondary">Discord</Button>
              </li>
            </ul>
             </nav>
        </header>
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
      </div>
      <footer></footer>
    </>
  );
  
};

export default App;



