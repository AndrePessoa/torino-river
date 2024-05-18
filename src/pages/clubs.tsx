import { clubs } from "../data";
import "./clubs.css";

export function Clubs() {
  return (
    <section className="page" id="clubs">
      <article className="title">
        <div className="content">
          <h1>Clubs</h1>
          <nav className="clubs-nav">
            <ul>
              {Object.entries(clubs).map(([key, club]) => (
                <li key={key}>
                  <a href={`#clubs/${key}`}>{club.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
      {Object.entries(clubs).map(([key, club]) => (
        <article className="club" key={club.name} id={`clubs-${key}`}>
          <div className="content">
            <div className="thumbnail">
              <img src={club.thumbnail} alt={club.name} />
            </div>
            <div className="description">
              <div className="club-header">
                <div className="club-logo">
                  <img src={club.logo} alt={club.name} />
                </div>
                <div className="club-titles">
                  <h2>{club.name}</h2>
                  <p>{club.description}</p>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: club.content || "" }} />
              {club.activities && (
                <ul>
                  {club.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              )}

              <a className="button" href={club.site}>
                Scopri di più
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
