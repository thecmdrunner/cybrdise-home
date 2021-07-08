import React from 'react';

import ProductTag from '../CommonComponents';

function Merchandise() {
    return (
        <>
        <div tabindex="-1" style={{
            display: 'flex', 
            margin: 'auto', 
            alignContent: 'center', 
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            }}>
            <ProductTag/>
        </div>
        </>
    )
}

export default Merchandise
