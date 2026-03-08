import teamData from "./CollegeBasketballTeams.json";
import "./App.css";

interface TeamCardProps {
  school: string;
  name: string;
  city: string;
  state:string;
}

interface Team extends TeamCardProps {
  tid: number;
}

function Header() {
  return(
    <header className="header">
      <h1>College Basketball Teams</h1>
      <p>
        Browse the complete directory of college basketball programs 
        across the nation.<br />
        Each card shows the school name, mascot, and location.
      </p>
    </header>
  );
}

function TeamCard({ school, name, city, state }: TeamCardProps) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p className="mascot">{name || "N/A"}</p>
      <p className="location">
        {city}, {state}
      </p>
    </div>
  );
}

function TeamList({ teams }: { teams: Team[] }) {
  return (
    <div className="team-list">
      {teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <TeamList teams={teamData.teams} />
    </div>
  );
}

export default App;