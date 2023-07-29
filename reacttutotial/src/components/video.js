import './video.css';

function Video({title,id,channel,views,time,verified}){
    // let verified = true;
    
    return (

        <>
       < div className='container'>
    
    <div className="pic">
      <img 
      src={`https://picsum.photos/id/${id}/160/90`}
      alt="Hedy Lamarr"  />  
      </div>
      <div className="title">{title}</div>
     
     <div className="channel">{channel} {verified? '✅' :null }</div>
     


      <div className="views">
        {views} views <span>.</span> {time}
         </div>
         </div>
    </>
   
      
    )
}


export {Video} ;