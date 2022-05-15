import './App.css';
import Quote from './components/Quote';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import {useState,useEffect} from 'react'
import LottieAnimation  from './Lottie';
import downloadJson from './assets/download.json';
import refreshJson from './assets/refresh3.json';



function App() {
 
  const [flag, setflag] = useState(0);
  const refresh=(e)=>{
    e.preventDefault();
    setflag(flag+1);
    console.log(flag);

  }
  useEffect(() => {
   
  },[flag])
  const downloadHandler=(e)=>{
    e.preventDefault();
    console.log("ok");
    domtoimage.toBlob(document.getElementById('download'))
    .then(function (blob) {
        saveAs(blob, 'Quotes.png');
    });
  }
  return (
   <div className="ultimate-cont">
    <div className="main-cont"><Quote flag={flag} ></Quote>
    <div className="btn-cont">
      <button onClick={refresh} className="btn-refresh"> < LottieAnimation 
	    lottie={refreshJson}
        height={45}
        width={45}/>
        <p>REFRESH</p>
        </button>
      <button className="btn-download" onClick={downloadHandler}>
        
        < LottieAnimation 
	    lottie={downloadJson}
        height={40}
        width={40}/>
        <p>DOWNLOAD</p>
    
      </button>
      </div>
    </div>
    <p className="dev-by">Developed By <spam>Xfinity</spam></p>
  </div>
   
  );
}

export default App;
