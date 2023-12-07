import React from "react"
import Button from "../../../../layout/Button"
import DepressionTest from "./DepressionTest"

const toTest = () => {
  return <DepressionTest /> ;
}

const Tes = () => {
    return (
      <div className="p-16">
        <div className="text-center text-lg font-bold">Untuk mengetahui kondisi depresi, silahkan ikuti tes!!</div>
        <div className="flex justify-center">
          <Button title ="Tes Depresi" onClick={toTest}/>
        </div>
      </div>
    )
  }
  
  export default Tes