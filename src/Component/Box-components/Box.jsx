import React from 'react';
import BoxImg from "../../assets/vector1.png"
import { Ticket } from 'lucide-react';

const Box = ({taskTicket}) => {
  console.log(taskTicket)

   
    return (
     <div className='bg-gray-100'>
      <div className="flex max-w-[1200px] mx-auto gap-6 pt-10">
       
      <div className="text-white text-center pt-25 w-[708px] h-[250px] bg-[url('./assets/vector1.png'),linear-gradient(to_right,#632EE3,#9F62F2)] rounded-sm">
      <p className=''>In-Progress</p>
        <h1 className='text-3xl font-bold'><span>{taskTicket.length}</span></h1> 
      </div>

      <div className="text-white text-center pt-25 text-center w-[708px] h-[250px] bg-[url('./assets/vector1.png'),linear-gradient(to_right,#54CF68,#00827A)] rounded-sm">
        <p>Resolved</p>
        <h1 className='text-3xl font-bold'>0</h1>
      </div>

    </div>   
     </div>
            
        
    );
};

export default Box;