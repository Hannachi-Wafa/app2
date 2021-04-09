
import './style.css';
import image2 from './img2.jpeg'

function App() {
  return (
    <div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img className ="image" src="./img1.jpg" />
          <br />
          <img className ="image" src={image2} />
        </div>
        <video width={320} height={240} controls>
          <source src="./fullstack.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
