import { Link } from "react-router-dom";
import { useBridges } from "../store/content/hooks";
import "./bridges.css";

export function Bridges() {
  const { data: bridges } = useBridges();

  return (
    <section className="page" id="bridges">
      <article className="title">
        <div className="content">
          <h1>Ponte</h1>
          <nav className="bridges-nav">
            <ul>
              {Object.entries(bridges).map(([key, bridge]) => (
                <li key={key}>
                  <Link to={`/bridges/${key}`}>{bridge.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
      {Object.entries(bridges).map(([key, bridge]) => (
        <article className="bridge" key={bridge.name} id={`bridges-${key}`}>
          <div className="content">
            <div className="thumbnail">
              <img
                src={`${process.env.PUBLIC_URL}/imgs/${bridge.schema}`}
                alt=""
              />
            </div>
            <div className="description">
              <div className="bridge-header">
                <div className="bridge-titles">
                  <h2>{bridge.name}</h2>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: bridge.description || "" }}
              />
            </div>
            <div className="thumbnail">
              <img src={`${bridge.photo}`} alt={bridge.name} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
