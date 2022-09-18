import "./ProjectInfo.css"
import GitHubData from "./GitHub/GitHub"


function ProjectInfo() {
  return (
    <div class="info__container">
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/minecraftia" type="text/css"/>
      <div class="info__items">
        <div class="description">
        <b class="info__subtitle">Description</b> <br/>
        <hr/>
        <p class="tldr">[Forge 1.18.2] A mod to dynamically generate tools based of mechanical components from Create</p><br/>
        Concept: Modular tools system similar to that of tetra or tinkers construct, where you can combine create componenets to form more complex hand held tools. The number of components/tool can be limited by the SU capacity (Produced by an attached part such as hand crank or furnace engine) and kinetic force delivery (Number of cogs/belts). These will probably be assembled at some kind of workbench where the type of tool (Drill, harvester, etc) can be selected then modifer components (blaze burner, flywheel, etc) attached aswell as the parts of the tool. To stage out the usefulness of the tools drill heads etc could be upgradeable aswell as the casing the tool starts as, perhaps from wood - andesite alloy - brass - chromatic/radiant/shadow, each of the last three acting as equal but with unique effects similar to providing alternatives to netherite, below is a table detailing what different components could do (early ideas, highly subject to change)
        </div>
        <div class="github">
        <b class="info__subtitle">GitHub Activity</b> <br/>
        <hr/>
        <GitHubData/>
        </div>
        <div class="concept__art">
        <b class="info__subtitle">Concept Art</b> <br/>
        <hr/>
        <img alt="tools" class="info__img" src="https://user-images.githubusercontent.com/79579164/187978556-2ab49cd1-eec0-4599-889f-8f125708810e.png"></img>
        <img alt="gui" class="info__img" src="https://user-images.githubusercontent.com/79579164/187978734-25927d32-43c4-4a29-8117-4fcb63b994b6.png"></img>
        <img alt="drafting table" class="info__img" src="https://user-images.githubusercontent.com/79579164/187979123-e9faab76-46c7-4807-9a88-e3636b84118c.png"></img>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
