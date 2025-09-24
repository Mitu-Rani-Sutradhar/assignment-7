import React from 'react';

const Box = () => {
    return (
     <div className="flex max-w-[1200px] mx-auto gap-6 mt-10">
       
      <div className="text-white text-center pt-25 w-[708px] h-[250px] bg-[url('./assets/vector1.png'),linear-gradient(to_right,#632EE3,#9F62F2)] rounded-sm">
      <p className=''>In-Progress</p>
        <h1 className='text-3xl font-bold'>0</h1> 
      </div>

      <div className="text-white text-center pt-25 text-center w-[708px] h-[250px] bg-[url('./assets/vector1.png'),linear-gradient(to_right,#54CF68,#00827A)] rounded-sm">
        <p>Resolved</p>
        <h1 className='text-3xl font-bold'>0</h1>
      </div>

    </div>   
            
        
    );
};

export default Box;