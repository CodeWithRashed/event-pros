import { useEffect, useState } from "react";
import { fetchTeam } from "../../Hooks/fetchTeam";
import { SubButton } from "../Buttons/Buttons";

const TeamPageContent = () => {
  const [sliceData, setSliceData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [seeAll, setSeeAll] = useState(true);

  useEffect(() => {
    fetchTeam()
      .then((data) => {
        setTeamData(data.team);
        setSliceData(data.team.slice(0, 8));
      })
      .catch();
  }, []);

  const handleSeeAll = () => {
    setSliceData(teamData);
    setSeeAll(false);
  };

  return (
    <div className="pb-[5%] px-[5%]">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {sliceData.map((teamMember) => (
          <div
            key={teamMember.id}
            className="card rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="h-[280px] object-cover"
              src={teamMember.image}
              alt=""
            />
            <div className="content bg-color-sub/[.15] p-4 flex flex-col justify-center text-center">
              <h3 className="font-bold text-2xl text-color-main">
                {teamMember.name}
              </h3>
              <small className="font-bold text-color-sub text-lg">
                {teamMember.title}
              </small>
              <a className="mt-4" href={`mailto:${teamMember.email}`}>
                <SubButton buttonText="Contact Now"></SubButton>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="cta text-center mt-14">
        {seeAll && (
          <button
            onClick={() => {
              handleSeeAll();
            }}
          >
            <SubButton on buttonText="See All"></SubButton>
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamPageContent;
