import HobbiesItem from "./HobbiesItem";
function Hobbies() {
    // let {hobbies} = props
    let hobbies = [
      {
        name: "Membaca buku",
        img: "https://assets-a1.kompasiana.com/items/album/2020/12/07/read-5fcda9568ede485d98617872.jpg?t=o&v=1200",
      },
      {
        name: "Nonton film",
        img: "https://www.hergamut.in/wp-content/uploads/2017/11/Gripping-TV-shows01-218x150.jpg",
      },
      {
        name: "Nari",
        img: "https://th.bing.com/th/id/R.d31efd7f1d6d9f0fe3aeaabae7c90f78?rik=okmIg9JBEg0BUg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-jUy6POqc1cU%2fULDFgqw1CZI%2fAAAAAAAAAJk%2fa90xJ9mF_Ts%2fs1600%2ftari-bali-BBB.jpg&ehk=OgxaV%2fT1uAsL74QRzm%2bJQ8PsnXZf6HNyvrkYqb%2bQ8TA%3d&risl=&pid=ImgRaw&r=0",
      },
    ];
    
    // let hobbies = ["membaca", "nonton film", "dance"];

    
    return (
      <div id="hobbies">
        <h2>My hobbies</h2>
        <div className="hobbies-list">
          {hobbies.map((item) => (
            <HobbiesItem hobbies = {item} />
            // <div className="hobbies-item">
            //   <img src = {item.img} alt = "" width = "100px"/>
            //   <h4>{item.name}</h4>
            // </div>
          ))}
        </div>
      </div>
    );
  };
  //   return (
  //     <div id="hobbies">
  //       <h2>My hobbies</h2>
  //       <div className="hobbies-list">
  //         <div className="hobby-item">
  //           {/* {hobbies.map((item,key) => (
  //             <h4 key={key}>{item}</h4>
  //           ))} */}
  //           <img src="https://th.bing.com/th/id/R.88580235432092719f0aa0fe82b3ecd5?rik=VysCaNM3e3njKA&riu=http%3a%2f%2fwww.fantaseacharters.com%2fmedia%2fattachments%2fview%2fimg%2fdown_rigging_fishing_rod%2fjpg&ehk=7ACdvAM6O8HEhETPZk1jQyK4MhG0qXytAt9YdLyU0RU%3d&risl=&pid=ImgRaw&r=0"alt=""width="200"/>
  //           <h3>Mancing</h3>
  //         </div>
  //         </div>
  //         <div className="hobby-item">
  //         <img src="https://th.bing.com/th/id/OIP.r1aTQEVGqiFHbFqvh5H-aQHaHN?pid=ImgDet&rs=1" alt="" width="200"/>
  //         <h3>Lari</h3>
  //       </div>
  
  //       <div className="hobby-item">
  //         <img src="https://th.bing.com/th/id/OIP.4Aha2vSI3oPu8-fKB2x6EAHaE7?pid=ImgDet&rs=1" alt="" width="200"/>
  //         <h3>Berenang</h3>
  //       </div>
  
  //       <h4> Hobi saya: </h4>
  //       {hobbies.map((item, index) => (
  //         <ul>
  //           <li>{item}</li>
  //         </ul>
  //       ))}
  
  //       {/* <           h4> Hobi saya: </h4>
  //             {hobi.map((item, index) => ( 
  //                 <ul><li>{item}</li></ul>))} */}
  
  //       {/* <h5> Hobi saya {hobbies}</h5> */}
  //       {/* <ul>
  //                 <li>membaca</li>
  //                 <li>nonton film</li>
  //                 <li>dance</li>
  //               </ul> */}
  //     </div>
  //   );
  // }
  
  export default Hobbies;
  