import React from 'react'

function Description({data}){
  console.log(data, " ini data");
  
  return (
    <div className="bg-white px-12 py-12">
      <div className="px-4 pb-3">
        <p className="text-3xl font-bold text-gray-900">SW Detail</p>
      </div>
      {Object.keys(data).map((elementObject, key) => {
        if(elementObject === "__typename") return null
        if(elementObject === "characterConnection") return null
        let result = elementObject.replace( /([A-Z])/g, " $1" );
        let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        return(
          <div className="">
          <div className="flex bg-white">
            <div className="w-1/4 h-12">
              <p key={key} className="text-left flex font-bold text-lg py-2">{finalResult}</p>
            </div>
            <div className="w-3/4">
              <p key={key} className="text-left text-lg py-2">{data[elementObject] === null ? "null" : elementObject !== "species" ? data[elementObject] : data[elementObject].name}</p>
            </div>
          </div>
          <hr className="border w-full"/>
          </div>
        )
      })}
    </div>
  )
}

export default Description;