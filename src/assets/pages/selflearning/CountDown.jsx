import { useEffect, useState } from "react"
function CountDown(){
    const [countDown, setCountDown] = useState(180)
    useEffect(() => {
        // const timeId = setInterval(() => {
        //     setCountDown(prevState => prevState - 1)
        // }, 1000 ) //1000ms = 1s
    setTimeout(() =>{
        setCountDown(countDown - 1);
        console.log('countDown:', countDown)
    },1000)
    return () => {
        clearTimeout(setTimeout); // clear the timer when component unmounts
    }
        // return () => clearInterval(timeId)
    },[countDown])

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )    
}
export default CountDown