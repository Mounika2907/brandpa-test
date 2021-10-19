import React from 'react'

const Title = ({selectedTitles,setTitle}) =>  {
    const titles =["Difference of Opinion", "Roadster", "Calvin Klein Jeans", "Moda Rapido",];

    return (
        <div className="sizes">
            <h3>Sizes</h3>
            <div className="size-list">
                {
                    titles.map((title, index) => {
                       
                        return (
                            <button 
                                className={ "title" + (selectedTitles.includes(title) ? " selected-size" : "")}
                                key={index}
                                onClick={() => setTitle(title)}
                            >
                                {title}
                            </button>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Title;
