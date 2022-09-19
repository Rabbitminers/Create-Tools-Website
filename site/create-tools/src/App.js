import './App.css';
import Footer from './components/footer/Footer'
import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import Title from './components/Title/Title'
import ToolTypes from './components/ToolTypes/ToolTypes';
import Stats from './components/ToolViewer/libs/Stats/Stats';
import ModifierComponents from './components/ToolTypes/ModifierComponets';
import Components from './components/ToolTypes/Components';
import Showcase from './components/ToolTypes/Showcase';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/minecraftia" type="text/css"/>
      <Title></Title>
      <br/>
      <div class="Toolmaker">
        <div class="Options">
          <ToolTypes/>
          <ModifierComponents/>
          <Components/>
        </div>
        <div class="Showcase">
          <div class="showcase__stats">
            <Stats></Stats>
          </div>
          <div class="showcase__image">
            <Showcase/>
          </div>
        </div>
      </div>
      <hr class="info__padding"/>
      <ProjectInfo/>
      <Footer></Footer>
    </div>
  );
}

export default App;
