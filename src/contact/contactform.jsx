export default function Contactform() {
    return (
        <>
         <div className="text-center pt-5 ">
            <p className="text-violet-500 text-lg font-bold pb-3">CONTACT US</p>
            <p className="text-3xl font-bold pb-5">Let's Talk</p>
         </div>
            <section className="container w-4/5 mx-auto pb-10">
                <form>
                    <div className="md:grid-cols-2 grid grid-cols-1 gap-4">
                        <input type="text" placeholder="Your Name" className="input-box" />
                        <input type="email" placeholder="Your Email" className="input-box" />
                        <input type="tel" placeholder="Your Phone" className="input-box" />
                        <input type="text" placeholder="Your Subject" className="input-box" />
                    </div>
                    <textarea placeholder="Your Message" rows={1} cols={1} className="input-box mt-4"></textarea>
                    <button type="submit" className="submit-btn bg-violet-500 p-2 rounded-lg text-white hover:bg-violet-600">Send Message</button>
                </form>

            </section>
        </>
    )
}