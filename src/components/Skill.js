import SkillItem from "./SkillItem";
function Skills() {
    // let skills = ["menari (dance)", "maraton wattpad"];
    let skills = [
      {name: "Ngoding", img: "https://th.bing.com/th/id/OIP.itMGCjNIIpQCN8lUKdEt-gHaE8?pid=ImgDet&rs=1"}, 
      {name: "Designn Grafis", img: "https://th.bing.com/th/id/OIP.oUGCTBA0R-ulIETSJeKMXwHaFW?w=229&h=180&c=7&r=0&o=5&pid=1.7"}
     
    ]
  
  
    return (
      <div id="skills">
        <h2>My Skills</h2>
        <div className="Skills-list">
          {skills.map((item) => (
            <SkillItem skills = {item} />
            // <div className="skills-item">
            //   <img src = {item.img} alt = "" width = "150px"/>
            //   <h4>{item.name}</h4>
            // </div>
          ))}
        </div>
      </div>
    );
  };



      // <div id="skills">
      //   <h2>My Skills</h2>
      //   <div className="skills-list">
      //     <div className="skill-item">
      //       <img
      //         src="https://th.bing.com/th/id/OIP.itMGCjNIIpQCN8lUKdEt-gHaE8?pid=ImgDet&rs=1"
      //         alt=""
      //         width="200"
      //       />
      //       <h3>Ngoding</h3>
      //     </div>
  
      //     <div className="skill-item">
      //       <img
      //         src="https://th.bing.com/th/id/OIP.oUGCTBA0R-ulIETSJeKMXwHaFW?w=229&h=180&c=7&r=0&o=5&pid=1.7"
      //         alt=""
      //         width="200"
      //       />
      //       <h3>Designn Grafis</h3>
      //     </div>
      //   </div>
        {/* <h4> Skill Saya: </h4>
        {skills.map((item, index) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))} */}
        {/* <h5>skill saya {skills}</h5> */}
  //     </div>
  //   );
  // }
  
  export default Skills;
  