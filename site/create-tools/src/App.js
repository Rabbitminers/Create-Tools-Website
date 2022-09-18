import './App.css';
import Footer from './components/footer/Footer'
import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import Title from './components/Title/Title'
import ToolTypes from './components/ToolTypes/ToolTypes';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/minecraftia" type="text/css"/>
      <Title></Title>
      <div class="Toolmaker">
        <div class="Options">
          <ToolTypes/>
          <ToolTypes/>
          <ToolTypes/>
        </div>
        <div class="Showcase">
          Hello world
        </div>
      </div>
      <ProjectInfo/>
      <Footer></Footer>
    </div>
  );
}

export default App;
