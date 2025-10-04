import React from 'react';

const Navbar = () => {
    return (
    
       <div className="shadow-sm ">
   
 <div className="flex justify-between max-w-[1200px] mx-auto bg-[#FFFFFF] py-3">
     <div className="navbar-start">
  <h1 className='font-bold'>CS-Ticket System</h1>
  </div>

  <div className="navbar-end">
    <ul className="menu lg:menu-horizontal ">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changeiog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  <a className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">+ New Ticket</a>
  </div>
 </div>
</div>  
       
       
    
    );
};

export default Navbar;