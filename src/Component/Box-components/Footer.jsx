import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black mt-15">
           <div className="max-w-[1200px] mx-auto flex justify-between pt-15">

            <div className="text-white w-[350px] h-[186px]">
              <h1 className='text-medium font-bold pb-4'>CS — Ticket System </h1>
              <p className='text-[#A1A1AA] text-regular'>Life's meaning isn't found in a single destination but in the journey itself. It's in the connections we forge, the kindness we show, and the growth we embrace. Each challenge overcome and moment of joy shared adds depth to our story.</p>
            </div>

           <div className='text-white'>
            <h1 className='text-medium font-bold pb-4'>Company</h1>
            <p>About Us</p>
            <p className='py-2'>Our Mission</p>
            <p>Contact Saled</p>
            </div> 

           <div className='text-white'>
            <h1 className='text-medium font-bold pb-4'>Services</h1>
            <p>Products & Services</p>
            <p className='py-2'>Customer Stories</p>
            <p>Download Apps</p>
            </div> 

           <div className='text-white'>
            <h1 className='text-medium font-bold pb-4'>Information</h1>
            <p>Privacy Policy</p>
            <p className='py-2'>Terms & Conditions</p>
            <p>Join Us</p>
            </div> 

           <div className='text-white'>
            <h1 className='text-medium font-bold pb-4'>Social Links</h1>
            <p>@CS — Ticket System</p>
            <p className='py-1'>@CS — Ticket System</p>
            <p className='py-1'>@CS — Ticket System</p>
            <p>support@cst.com</p>
            </div> 

           </div>

         <div className='max-w-[1200px] mx-auto  border-t-1 border-ash-1500'>
            <p className='text-regular text-white text-center my-10 pb-7'>© 2025 CS — Ticket System. All rights reserved.</p>
         </div>



        </div>
    );
};

export default Footer;