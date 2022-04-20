import React, { useState , useEffect} from "react";

const Counter = ()=>

 {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const[number,setNumber] =useState("")
    function handle (e){
        console.log(number)
    }
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
     if(number==seconds && number!==""){
          reset()
     
     }
    
    useEffect(() => {
        let interval = null;
      if (isActive && number>seconds) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
     
      return () => clearInterval(interval);
    }, [isActive, seconds]);
  
    return (
       <>
       
       <input type="number" name="timer" value={number}   onChange={(e) => setNumber(e.target.value)}/>
       <button onClick={handle}>input end time</button>
        <div>
              <div>
        <div>
          {seconds}s
        </div>
        <div className="row">
          <button className={`${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={reset}>
            Reset
          </button>
        </div>
      </div>
        </div>
       </>
       
  
    );
  };

  export default Counter