const TeamCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 lg:justify-between">
      <div className="card rounded-lg overflow-hidden">
        <img
          className="object-cover h-[250px]"
          src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/team1-370x370.jpg"
          alt=""
        />
        <div className="content bg-color-sub/[.15] p-4 flex flex-col justify-center text-center">
          <h3 className="font-bold text-color-main">Julia Mann</h3>
          <small className="font-bold text-color-sub">Co Founder</small>
        </div>
      </div>
      <div className="card rounded-lg overflow-hidden">
      <img
        className="object-cover h-[250px]"
        src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/team4-370x370.jpg"
        alt=""
      />
        <div className="content bg-color-sub/[.15] p-4 flex flex-col justify-center text-center">
          <h3 className="font-bold text-color-main">Sufi Gilmore</h3>
          <small className="font-bold text-color-sub">Architect</small>
        </div>
      </div>
      <div className="card rounded-lg overflow-hidden">
      <img
        className="object-cover h-[250px]"
        src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/team3-370x370.jpg"
        alt=""
      />
        <div className="content bg-color-sub/[.15] p-4 flex flex-col justify-center text-center">
          <h3 className="font-bold text-color-main">Jessica Smith</h3>
          <small className="font-bold text-color-sub">Designer</small>
        </div>
      </div>
      <div className="card rounded-lg overflow-hidden">
      <img
        className="object-cover h-[250px]"
        src="https://partymaker.ancorathemes.com/wp-content/uploads/2017/10/team2-370x370.jpg"
        alt=""
      />
        <div className="content bg-color-sub/[.15] p-4 flex flex-col justify-center text-center">
          <h3 className="font-bold text-color-main">Ann Wagner</h3>
          <small className="font-bold text-color-sub">Florist</small>
        </div>
      </div>
     
   
     
    </div>
  );
};

export default TeamCard;
