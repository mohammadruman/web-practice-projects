import { Video } from "./components/video";
import "./App.css";
import Videos from "./data/data";
function App() {
 
  return (
    <div className="App">
      <div>Videos</div>
   {
    Videos.map(video=> <Video
      title={video.title}
      views={video.views}
      time={video.time}
      channel={video.channel}
      verified={video.verified}
      id ={video.id}
    ></Video>)
   }   
     
    
    </div>
  );
}

export default App;
