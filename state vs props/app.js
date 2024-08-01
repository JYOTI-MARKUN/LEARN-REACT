import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      {/* <Counter username="timer"> */}

      {/* <AppleCounter />*/ /*  component pass as a child inside the another component */}
      {/* </Counter> */}

      <Counter username="timer"> 

    </Counter>
      <AppleCounter /> /*  component pass as a child inside the another component

      {/* {true? <AppleCounter />: <Counter username = "timer" />} */}
     
     
    </div>
  )
}

export default App