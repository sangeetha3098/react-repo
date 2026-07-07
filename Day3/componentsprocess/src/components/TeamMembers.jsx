import "./TeamMembers.css";

import member1 from "../assets/forest.jpg";
import member2 from "../assets/path.jpg";
import member3 from "../assets/falls.jpg";
import member4 from "../assets/bridge.jpg";

const TeamMembers = () => {
  const team = [
    {
      id: 1,
      image: member1,
      name: "Sangeetha",
      designation: "Frontend Developer",
    },
    {
      id: 2,
      image: member2,
      name: "Rahul",
      designation: "UI Designer",
    },
    {
      id: 3,
      image: member3,
      name: "Priya",
      designation: "Backend Developer",
    },
    {
      id: 4,
      image: member4,
      name: "Arun",
      designation: "Project Manager",
    },
  ];

  return (
    <div className="team-container">
      {team.map((member) => (
        <div className="team-card" key={member.id}>
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.designation}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;