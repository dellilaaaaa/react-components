function SkillItem(props) {
    let { skills } = props;
  
    return (
      <div className = "SkillItem">
        <div className="skills-item" onClick={() => alert(skills.name)}>
          {/* <button onClick = {() => hobbies.name()}></button> */}
          <h4>{skills.name}</h4>
          <img src={skills.img} alt="" width="250px" />
        </div>
      </div>
    );
  }
  export default SkillItem;
  