import { Link } from "react-router";
import ExperienceSection from "../components/ExperienceSection";
import { experienceByTrack } from "../data/experience";

export default function ProjectManager() {
  return (
    <div className="track-pm">
      <section className="hero wrap">
        <div className="track-switch">
          <Link to="/">← Profile</Link>
        </div>
        <h1>
          Project Manager, (ongoing)
        </h1>
        <p className="lead">
         Understanding of the project management requirements. Deeper understanding of agile and scrum technologies. Also how to make the project a sucess and the profitable.
        </p>
      </section>

      <ExperienceSection title="What the course covered" items={experienceByTrack["project-manager"]} />

      <section className="wrap">
        <h2>Why it matters alongside development</h2>
        <p className="about-text">
          Understanding of the project is planned, estimated and structured makes it easier to work well inside. Whether that a group coursework project a real product team. It is the same instinct for structure that runs through my accounting background and administrative work applied to how work itself gets organised.
        </p>
      </section>
    </div>
  );
}
