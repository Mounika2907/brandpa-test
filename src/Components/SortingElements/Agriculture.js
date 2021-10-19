import React from 'react'

const Agriculture = ({selectedAgriculture, setAgriculture}) =>  {

    const types = ['Agriculture'];

    return (
        <div className="sizes" style ={{marginTop: "60px",

        marginLeft: "350px",}}>
          
            <div className="size-list" style ={{paddingLeft: "64px",     marginLeft: "90px",
    paddingRight: "84px"}}>
                {
                    types.map((type, index) => {
                        console.log(type)
                       
                        return (
                            <button
                            style ={{paddingLeft: "64px",
                                paddingRight: "84px"}}
                                className={ "type" + (selectedAgriculture.includes(type) ? " selected-type" : "")}
                                key={index}
                                onClick={() => setAgriculture(type)}
                            >
                                {type}
                            </button>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Agriculture;
