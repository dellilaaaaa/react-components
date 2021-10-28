function HobbiesItem(props) {
  let { hobbies } = props;
  // let { skills } = props;
  // console.log(hobbies);

  return (
    <div className = "HobbiesItem">
      <div className="hobbies-item" onClick={() => alert(hobbies.name)}>
        {/* <button onClick = {() => hobbies.name()}></button> */}
        <h4>{hobbies.name}</h4>
        <img src={hobbies.img} alt="" width="250px" />
      </div>

      {/* <div className="skills-item" onClick={() => alert(skills.name)}> */}
        {/* <button onClick = {() => hobbies.name()}></button> */}
        {/* <img src={skills.img} alt="" width="150px" />
        <h4>{skills.name}</h4>
      </div> */}
    </div>
  );
}
export default HobbiesItem;
