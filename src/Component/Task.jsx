import TaskCard from "./taskCard";


const Task = ({taskTicket}) => {
    // console.log(taskTicket)
    return (
        
              <div className='w-3/12'>
              <div>
                <p>Select a ticket to add to Task Status</p>
            
           {
            taskTicket.map(ticket=> <TaskCard ticket={ticket}></TaskCard>)
           }
              </div>
              <div>
            <h1 className='my-3 font-bold text-xl text-[#34485A] pr-49 py-1'>Resolved_Task</h1>
                <p>No resolved tasks yet.</p>
              </div>
            
            </div>
    
    );
};

export default Task;