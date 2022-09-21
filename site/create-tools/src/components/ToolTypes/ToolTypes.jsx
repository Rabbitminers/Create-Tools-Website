import {useState} from 'react';
import "./ToolTypes.css"

function ToolTypes() {
    const [active, setActive] = useState("");

    const handleClick = (event) => {
        setActive(event.target.id);
    }

  return (
    <div className="container">
        <div             
            id={"Drill"}
            className={active === "Drill" ? "active" : undefined}
            onClick={handleClick}>
            Drill
        </div>
        <div             
            id={"Saw"}
            className={active === "Saw" ? "active" : undefined}
            onClick={handleClick}>
            Saw
        </div>
        <div             
            id={"Harvester"}
            className={active === "Harvester" ? "active" : undefined}
            onClick={handleClick}>
            Harvester
        </div>
        <div             
            id={"DeployerA"}
            className={active === "DeployerA" ? "active" : undefined}
            onClick={handleClick}>
            Deployer (Attack)
        </div>
        <div             
            id={"DeployerP"}
            className={active === "DeployerP" ? "active" : undefined}
            onClick={handleClick}>
            Deployer (Place)
        </div>
        <div
            id={"DeployerM"}
            className={active === "DeployerM" ? "active" : undefined}
            onClick={handleClick}>
            Deployer (Move)
        </div>
        <div             
            id={"6"}
            className={active === "6" ? "active" : undefined}
            onClick={handleClick}>
            Plough
        </div>
        <div 
            id={"PotatoCannon"}
            className={active === "PotatoCannon" ? "active" : undefined}
            onClick={handleClick}>
            Potato Cannon
        </div>
    </div>
  );
}

export default ToolTypes;