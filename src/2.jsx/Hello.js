import React from "react";

// const Hello = () => {
//     return (
//         <div id="divHeader" class="box">
//             <h1 id="header" class="h-one">Hello Scott</h1>
//         </div> 
//     )
// }

const Hello = () => {
    return React.createElement('div', 
                               {id: 'divId', className: 'divClass'}, 
                               React.createElement('h1', 
                                                   {id: 'h-one-Id', className: 'h-one-Class'},
                                                  'Hello Scott'))
}

export default Hello