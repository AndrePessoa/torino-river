import { Link } from "react-router-dom";
import { useClubs } from "../store/content/hooks";
import "./clubs.css";

export function Clubs() {
  const { data: clubs } = useClubs();

  return (
    <section className="page" id="clubs">
      <article className="title">
        <div className="content">
          <h1>Clubs</h1>
          <nav className="clubs-nav">
            <ul>
              {Object.entries(clubs).map(([key, club]) => (
                <li key={key}>
                  <Link to={`/clubs/${key}`}>{club.name}</Link>
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
              <img
                src={`${process.env.PUBLIC_URL}/imgs/${club.thumbnail}`}
                alt={club.name}
              />
            </div>
            <div className="description">
              <div className="club-header">
                <div className="club-logo">
                  <img
                    src={`${process.env.PUBLIC_URL}/imgs/${club.logo}`}
                    alt={club.name}
                  />
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
              {club.site && (
                <a className="button" href={club.site}>
                  Scopri di più
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
