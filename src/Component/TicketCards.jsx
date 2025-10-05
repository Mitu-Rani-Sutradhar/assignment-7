import React, { use, useState } from 'react';
import {CircleSmall} from "lucide-react";
import Task from './Task';

const TicketCards = ({ticketsPromise,taskTicket,setTaskTicket}) => {
   const ticketData = use(ticketsPromise)
//    console.log(ticketData);


const handleTicket =(ticket)=>{
    console.log(ticket)
    alert("something is heppen on task Status")

    setTaskTicket([...taskTicket,ticketData])

}



    return (

    

       <div className='bg-gray-100 pb-15'>

        <div className='flex justify-between max-w-[1200px] mx-auto pt-10'>
            <div>
                <h1 className='my-3 font-bold text-xl text-[#34485A]'>Customer Tickets</h1>
            </div>
               <div>
                <h1 className='my-3 font-bold text-xl text-[#34485A] pr-49'>Task Status</h1>
                
               </div>
        </div>
    
        <div className='max-w-[1200px] mx-auto md:flex justify-between'>
        {/* <div className='flex justify-between'>
            <div>
                <h1 className='my-3 font-bold text-xl text-[#34485A]'>Customer Tickets</h1>
            </div>
               <div>
                <h1 className='my-3 font-bold text-xl text-[#34485A] pr-49'>Task Status</h1>
                
               </div>
        </div> */}
        
                <div className='card-container w-9/12 grid grid-cols-1 md:grid-cols-2 gap-5'>
    
              {
               ticketData.map(ticket=> <div onClick={() => handleTicket(ticket)} className='card w-[430px] h-[175px] p-2 gap-1 bg-[#FFFFFF] shadow-xl'>
                 <div className='card-title flex justify-between '>
                    <h3>{ticket.title}</h3>
                    <p className={`p-2  rounded-3xl text-n normal h-[40px] flex justify-between ${
                        ticket.status === 'Open'
                        ? 'bg-green-200 text-green-800' : 'bg-yellow-100'
                    }`}><CircleSmall/>{ticket.status}</p>
                 </div>

                 <div>
                    <p>{ticket.description}</p>
                 </div>

                 <div className='flex justify-between pt-2'>
                    <div className='flex gap-5'>
                    <div>
                        <p>{ticket.id}</p>
                    </div>
                    <div>
                         <h2 className={`text-normal ${
                            ticket.priority === 'High'? 'text-red-600' : 'text-amber-300'
                         }`}>{ticket.priority} property</h2>
                    </div>
                 </div>


                 <div className='flex gap-5'>
                    <div>
                        <p>{ticket.customer}</p>
                    </div>
                    <div>
    
                        {ticket.createdAt}
                        </div>
                 </div>
                 </div>


              </div>)
              }

              
            </div>
            {/* <div className='w-3/12'>
              <div>
                <p>Select a ticket to add to Task Status</p>
              </div>
              <div>
            <h1 className='my-3 font-bold text-xl text-[#34485A] pr-49 py-1'>Resolved_Task</h1>
                <p>No resolved tasks yet.</p>
              </div>
            
            </div> */}

             <Task handleTicket={handleTicket} taskTicket={taskTicket}></Task>


            </div>
        </div>


        
    );
};

export default TicketCards;