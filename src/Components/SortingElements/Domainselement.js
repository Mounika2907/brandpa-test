import React from 'react'

const Domainselement = ({selectedDomains,setDomain}) =>  {
    const domains =['singledomain', 'multipledomain', 'wildcard'];

    return (
        <div className="sizes" style ={{
            marginLeft: "530px",}}>
           
            <div className="size-list" style ={{marginTop:"0px"}}>
                {
                    domains.map((domain, index) => {
                        console.log(domain)
                        console.log(selectedDomains)
                        // console.log(setDomain(domain))
                        return (
                            <button 
                                className={ "domain" + (selectedDomains.includes(domain) ? " selected-domain" : "")}
                                key={index}
                                onClick={() =>setDomain(domain)}
                            >
                                {domain}
                            </button>
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default Domainselement;
