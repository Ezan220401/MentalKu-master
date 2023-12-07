import React from "react"
import Button from "../../../../layout/Button"
import WorryTest from "./WorryTest"

const toTest = () => {
  return <WorryTest /> ;
}

const Tes = () => {
    return (
      <div className="p-16">
        <div className="text-center text-lg font-bold">Untuk mengetahui kondisi kecemasan, silahkan ikuti tes!!</div>
        <div className="flex justify-center">
          <Button title ="Tes Kecemasan" onClick={toTest}/>
        </div>
      </div>
    )
  }
  
  export default Tes