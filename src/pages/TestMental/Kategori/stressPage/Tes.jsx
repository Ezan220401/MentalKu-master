import React from "react"
import Button from "../../../../layout/Button"
import StressTest from "./StressTest";

const toTest = () => {
  return <StressTest /> ;
}

const Tes = () => {
    return (
      <div className="p-16">
        <div className="text-center text-lg font-bold">Untuk mengetahui kondisi stress, silahkan ikuti tes!!</div>
        <div className="flex justify-center">
          <Button title ="Tes Stress" onClick={toTest}/>
        </div>
      </div>
    )
  }
  
  export default Tes