import React,{useState} from "react";
import "./BloodGroup.css"

function BloodGroups(props) {

  const [active, setactive] = useState(0);
  
  

  function handleClick(event){
    if(active === event.currentTarget.id){
      setactive(false);
      props.setActive(false);

    }
    else{
    setactive(event.currentTarget.id)
    props.setActive(event.currentTarget.id)
    }
    
  }
  

  return (
    <div className={"blood-menu"}>
    <p className="blood-menu-label">Choose blood group</p>
    <div className="blood-groups">

    
    <div className={active === "A+" ? "blood selected":"blood"} id="A+" onClick={handleClick}  >
      <p className="blood-name">A+</p>
      <svg className="drop" >
        <path
          
          strokeWidth={"1.5"}
          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
        />
      </svg>
    </div>
    <div className={active === "B+" ? "blood selected":"blood"} id="B+" onClick={handleClick}>
    <p className="blood-name" >B+</p>
      <svg className="drop" >
        <path
          
          strokeWidth={"1.5"}
          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
        />
      </svg>
    </div>
    <div className={active === "O+" ? "blood selected":"blood"} id="O+" onClick={handleClick}>
    <p className="blood-name">O+</p>
      <svg className="drop" >
        <path
          
          strokeWidth={"1.5"}
          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
        />
      </svg>
    </div>
    <div className={active === "AB+" ? "blood selected":"blood"} id="AB+" onClick={handleClick}>
    <p className="blood-name" style={{marginLeft:'9px'}}>AB+</p>
      <svg className="drop" >
        <path
          
          strokeWidth={"1.5"}
          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
        />
      </svg>
    </div>
    <div className={active === "A-" ? "blood selected":"blood"} id="A-" onClick={handleClick}>
    <p className="blood-name">A-</p>
      <svg className="drop" >
        <path
          
          strokeWidth={"1.5"}
          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
        />
      </svg>
    </div>
    <div className={active === "B-" ? "blood selected":"blood"} id="B-" onClick={handleClick}>
    <p className="blood-name">B-</p>
      <svg className="drop" >
        <path
          
          strokeWidth={"1.5"}
          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
        />
      </svg>
    </div>
    <div className={active === "O-" ? "blood selected":"blood"} id="O-" onClick={handleClick}>
    <p className="blood-name">O-</p>
      <svg className="drop">
        <path
          
          strokeWidth={"1.5"}
          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
        />
      </svg>
    </div>
    <div className={active === "AB-" ? "blood selected":"blood"} id="AB-" onClick={handleClick}>
    <p className="blood-name" style={{marginLeft:'9px'}}>AB-</p>
      <svg className="drop" >
        <path
          
          strokeWidth={"1.5"}
          d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
        />
      </svg>
    </div>
    </div>
    </div>
  );
}

export default BloodGroups;
