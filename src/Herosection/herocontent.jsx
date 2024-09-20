export default function Herocontent() {
   return (
      <>
         <section className="lg:grid lg:grid-cols-2 grid grid-cols-1 lg:items-center  pt-10 justify-items-center relative">
            <div className="p-5">
               <div className="text-white flex lg:justify-start justify-center gap-4 pb-10 ">
                  <i class="fa-brands fa-facebook-f  border p-2  rounded-md  hover:bg-violet-400"></i>
                  <i class="fa-brands fa-twitter border p-2 rounded-md hover:bg-violet-400"></i>
                  <i class="fa-brands fa-instagram border p-2 rounded-md hover:bg-violet-400"></i>
                  <i class="fa-brands fa-youtube border p-2 rounded-md hover:bg-violet-400"></i>
               </div>
               <p className="lg:text-5xl md:text-3xl text-2xl text-white lg:max-w-md pb-10 font-bold text-center lg:text-left">IT Solutions & Business Services for your Success</p>
               <p className="text-justify text-white pr-3 lg:pb-10 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.</p>
               <div>
                  <p className="lg:text-start text-center  "><a href="" className="bg-white p-4 text-violet-500 rounded-md font-bold ">Get In Touch</a></p>
               </div>
            </div>
            <div className="pt-3  z-40">
               <img src="home-font.png" alt="" className="heroimg p-2" />
            </div>
            <div className="w-full">
               <img src="home-wave-bg.svg" alt="" className="absolute bottom-0  " />
            </div>

         </section>
      </>
   )
}