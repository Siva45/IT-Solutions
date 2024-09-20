export default function Whyus() {
    return (
        <>
            <section className="md:pt-20 pt-10">
                <div className=" lg:grid-cols-2 grid grid-cols-1 justify-items-center px-5">
                    <div>
                        <img src="chooseimg.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="p-4">
                        <p className="text-violet-500 font-bold pb-3 text-center lg:text-start">WHY CHOOSE US?</p>
                        <p className="text-3xl font-bold pb-3 text-center lg:text-start">In a World of Technology, People Make the Difference</p>
                        <p className="pb-5 text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="md:grid-cols-2  grid grid-cols-1 gap-x-3 justify-items-center lg:justify-items-start">
                            <div className="button shadow-md mb-3 w-full">
                                <div className="text">Remote It Assistance</div>
                            </div>
                            <div className="button shadow-md mb-3 w-full">
                                <div className="text">Solving IT Problems</div>
                            </div>
                            <div className="button shadow-md mb-3 w-full">
                                <div className="text">Practice IT Management</div>
                            </div>
                            <div className="button shadow-md mb-3 w-full">
                                <div className="text">IT Security Services</div>
                            </div>
                            <div className="button shadow-md mb-3 w-full">
                                <div className="text">Managed IT Service</div>
                            </div>
                            <div className="button shadow-md mb-3 w-full">
                                <div className="text">Cloud Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}