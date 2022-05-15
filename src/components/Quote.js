import axios from 'axios'
import React, {useState,useEffect} from 'react'
function Quote(props){
    const [quote,setQuote]=useState('')
    const [imageURL,setImageURL]=useState('')
    
    const getQuote =()=>{
        axios.get('https://api.quotable.io/random')
            .then(function (response) {
            // handle success
            console.log(response.data.content);
            setQuote(response.data.content);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });}
    const getImage =()=>{
        axios.get('https://source.unsplash.com/random/?nature')
            .then(function (response) {
            // handle success
            console.log(response.request.responseURL);
            setImageURL(response.request.responseURL)
            
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });
    }
    useEffect(() => {
        getImage();
        getQuote();

        
    }, [props.flag])



   
      

    return <React.Fragment><div className="quote-container" ><div className="for-download" id="download" ><img alt={imageURL} src={imageURL} width="500px" height="500px"></img><div className="for-quote"><p>{quote}</p></div></div></div> </React.Fragment>
}
export default Quote;