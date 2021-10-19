import React from 'react'
import "../../SortAction.css"

const Validation = ({selectedValidations,setValidation}) =>  {
    const validations =['Domain(DV)', 'Organization(OV)', 'Extended(EV)'];

    return (
        <div className="sizes" style ={{marginTop: "-120px",
        marginLeft: "400px",
    }}>
            {/* <h3>Validation</h3> */}
            <div className="size-list">
                {
                    validations.map((validation, index) => {
                        return (
                            <button  
                                className={ "validation" + (selectedValidations.includes(validation) ? " selected-validation" : "")}
                                key={index}
                                onClick={() =>setValidation(validation)}
                               
                            >
                                {validation}
                            </button>
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default Validation;
