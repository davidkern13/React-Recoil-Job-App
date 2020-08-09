import React, { useEffect } from 'react';

const Test = () => {
    
    useEffect(() => {
        console.log('render:');
    });

    return (        
        <div>
            <p>Test</p>
        </div>
    )
}

export default  React.memo(Test);