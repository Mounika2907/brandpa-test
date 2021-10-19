import React from 'react'

const Sizes = ({selectedSizes, setSize}) =>  {

    const sizes = ['1year', '2years', '3years', '4years', '5years'];

    return (
        <div className="sizes" style ={{marginTop: "60px",

        marginLeft: "350px",}}>
            {/* <h3>Sizes</h3> */}
            <div className="size-list" style ={{paddingLeft: "64px",     marginLeft: "-21px",
    paddingRight: "84px"}}>
                {
                    sizes.map((size, index) => {
                        console.log(size)
                       
                        return (
                            <button 
                            style ={{paddingLeft: "64px",
                                paddingRight: "84px"}}
                                className={ "size" + (selectedSizes.includes(size) ? " selected-size" : "")}
                                key={index}
                                onClick={() => setSize(size)}
                            >
                                {size}
                            </button>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Sizes;
