import './App.scss';
import image from './assets/image-qr.png'

function App() {
  return (
    <div className="App">
      <div className="card">
        <img className = "image" src ={image} alt="qr-code"/>
        <p className="text1"> Improve your front-end skills by building projects</p>
        <p className="text2"> Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
