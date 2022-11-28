import axios from "axios"
import { useState, useEffect, useRef } from "react"

/*
class: <Counter /> => new Counter() 

setAndroid(15) => Counter() => useState(10)


{
  android: 8,
  iphone: 6
}

funcA(funcB()) => funcA(10)
funcA(funcB) => funcA() { funcB() }

if (typeof initialState === 'func') {
  initialState()
}

*/



const COUNTER_KEY = 'counter-key'
const getLocalData = () => {
  return JSON.parse(localStorage.getItem(COUNTER_KEY))
}

export const Counter = () => {
  const [android, setAndroid] = useState(() => getLocalData()?.android ?? 0)
  const [iphone, setIphone] = useState(() => getLocalData()?.iphone ?? 0)
  const ref2 = useRef(10)
  const ref = useRef(null)

  
  useEffect(() => {
    ref2.current += 10
  }, [])

  useEffect(() => {
    localStorage.setItem(COUNTER_KEY, JSON.stringify({android, iphone}))
  }, [android, iphone])

  const handleChangeAndroid = () => setAndroid(prev => prev + 1)
  
  const handleChangeIphone = () => setIphone(prev => prev + 1)
  
  const stateMap = {
    'android': setAndroid,
    'iphone': setIphone,
  }

  const handleUpdate = event => {
    const {name} = event.target
    stateMap[name](prev => prev + 1)
    // switch(name) {
    //   case 'android': 
    //   setAndroid(prev => prev + 1)
    //   break
    //   case 'iphone': 
    //   setIphone(prev => prev + 1)
    //   break
    //   default:
    //     throw new Error()
    // }
  }

  return (
    <div ref={ref} className="mb-5 p-5 text-white bg-dark rounded-3">
       <p className="text-center my-5" style={{ fontSize: 80 }}>
         Android: {android}
       </p>
       <p className="text-center my-5" style={{ fontSize: 80 }}>
         iPhone: {iphone}
       </p>

       <div className="d-flex align-items-center justify-content-center w-100">
         <button type="button" name="android" className="btn p-3 btn-outline-light w-25 mx-2" onClick={handleUpdate}>
           Android
        </button>
         <button type="button" name="iphone" className="btn p-3 btn-outline-light w-25 mx-2" onClick={handleUpdate}>
           iPhone
         </button>
      </div>
    </div>
  )
}




//import { Component } from "react"

// export class Counter extends Component {

//   state = {
//     counter: this.props.defaultValue || 0,
//     // plus: 0,
//     // minus: 0
//   }

//   static defaultProps = {
//     defaultValue: 10,

//   }

//   handleMinus = () => {
//     this.setState(prevState => ({ counter: prevState.counter - 1 }), () => console.log(this.state.counter))
//     console.log();
//     this.setState(prevState => ({ counter: prevState.counter - 1 }))
//     this.setState(prevState => ({ counter: prevState.counter - 1 }))
    
//   }

//   handlePlus = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }


//   render() {
//     const { counter } = this.state
  

//     return (
//       <div className="mb-5 p-5 text-white bg-dark rounded-3">
//       <p className="text-center my-5" style={{ fontSize: 80 }}>
//         Android: {counter}
//       </p>
//       <p className="text-center my-5" style={{ fontSize: 80 }}>
//         iPhone: {counter}
//       </p>

//       <div className="d-flex align-items-center justify-content-center w-100">
//         <button type="button" name="android" className="btn p-3 btn-outline-light w-25 mx-2" onClick={this.handlePlus}>
//           Android
//         </button>
//         <button type="button" name="iphone" className="btn p-3 btn-outline-light w-25 mx-2" onClick={this.handlePlus}>
//           iPhone
//         </button>
//       </div>
//     </div>
//     );
//   }
// };

