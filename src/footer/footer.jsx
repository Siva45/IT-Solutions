export default function Footer() {
    return (
        <>
            <section className="bg-blue-950">
                <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3  justify-items-center p-20">
                    <div>
                        <img src="logo.png" alt="" className="pb-2" />
                        <p className="text-white pb-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris.</p>
                        <div className="flex gap-2 rounded-3 pb-3">
                            <i className="fa-brands fa-facebook bg-sky-700 text-white p-2 rounded-md "></i>
                            <i className="fa-brands fa-twitter bg-sky-400 text-white p-2 rounded-md"></i>
                            <i className="fa-brands fa-instagram bg-pink-700 text-white p-2 rounded-md"></i>
                            <i className="fa-brands fa-linkedin bg-sky-500 text-white p-2 rounded-md"></i>
                            <i className="fa-brands fa-youtube bg-rose-600 text-white p-2 rounded-md "></i>
                        </div>
                    </div>
                    <div>
                        <h1 className="pb-3 text-lg font-bold text-white border-b">Our Services</h1>
                        <div className="list-none text-white pt-2">
                            <a href=""><li className="pb-2 hover:text-violet-500">IT Solution</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Web Development</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Networking Services</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">SEO Optimization</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">App Optimization</li></a>
                        </div>
                    </div>
                    <div>
                        <h1 className="pb-3 text-lg font-bold text-white border-b">Useful Links</h1>
                        <div className="list-none text-white pt-2">
                            <a href=""><li className="pb-2 hover:text-violet-500">About Us</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Case Study</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Contact Us</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Privacy Policy</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Terms & Conditions</li></a>
                        </div>
                    </div>
                    <div>
                        <h1 className="pb-3 text-lg font-bold text-white border-b">Contact Info</h1>
                        <div className="list-none text-white pt-2">
                            <a href=""><li className="pb-2 hover:text-violet-500">About Us</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Case Study</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Contact Us</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Privacy Policy</li></a>
                            <a href=""><li className="pb-2 hover:text-violet-500">Terms & Conditions</li></a>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 grid grid-cols-1 justify-items-center text-white p-5">
                    <p>&copy;2024 Techvia - All Rights Reserved. </p>
                    <p>Terms & Conditions | Privacy Policy
                    </p>
                </div>
            </section>
        </>
    )
}