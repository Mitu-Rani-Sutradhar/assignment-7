import React from 'react';

const TaskCard = (ticket) => {
    console.log(ticket)
    return (
       <div className="bg-white rounded-sm p-3 mt-5">
                    <h1 className="p-2">{ticket.title}</h1>
                    <button className="text-center w-full bg-green-500 border-0 text-white rounded-sm">Completed</button>
                </div> 
    );
};

export default TaskCard;