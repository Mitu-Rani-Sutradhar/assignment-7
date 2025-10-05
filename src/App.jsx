
import './App.css'
import Navbar from "./Component/Box-components/Navbar"
import Box from "./Component/Box-components/Box"
import Task from "./Component/Task"


import Footer from "./Component/Box-components/Footer"
import TicketCards from "./Component/TicketCards"
import { Suspense, useState } from 'react'

  const fetchTickets = async () =>{
    const res = await fetch("/tickets.json")
    return res.json()
  }



function App() {
   const ticketsPromise = fetchTickets()

    const [taskTicket,setTaskTicket] = useState([])
  //  console.log(taskTicket)
  return (
    <>

   <Navbar></Navbar>
   <Box taskTicket={taskTicket}></Box>
  
    <Suspense fallback={"Loading...."}>
    <TicketCards taskTicket={taskTicket} setTaskTicket={setTaskTicket} ticketsPromise={ticketsPromise}></TicketCards>
    
    </Suspense>

    
  
   <Footer></Footer>
      
    </>
  )
}

export default App
