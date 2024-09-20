import ProgressBar from "./progress"
export default function Aboutcontent() {
    return (
        <>
            <section className="p-5 md:pt-20 pt-10">
                <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 justify-items-center ">
                    <div className="p-2">
                        <p className="text-violet-500 font-bold pb-3">ABOUT OUR COMPANY</p>
                        <p className="text-3xl font-bold pb-3">The Most Trusted Name in IT Solution for 20 Years Running</p>
                        <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud</p>
                        <div>
                            <ProgressBar title="Technology Consulting" percentage={75} />
                            <ProgressBar title="Virtual Workstation" percentage={85} />
                            <ProgressBar title="Managed IT Service" percentage={95} />
                          <button className="learn-more">Learn More</button>
                        </div>
                    </div>
                    <div className="p-2">
                        <img src="aboutimg.jpg" width={600} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}