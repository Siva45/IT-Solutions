
export default function Service() {

    const servdata = [{
        image:"bulb-business-idea-svgrepo-com.svg",
        title: "IT Solutions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
        more: "Read More",

    },
    {
        image:"web-development-svgrepo-com.svg",
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
        more: "Read More"
    },
    {   
        image:"network-svgrepo-com.svg",
        title: "Networking Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
        more: "Read More"
    },
    {
        image:"seo-svgrepo-com.svg",
        title: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
        more: "Read More"
    },
    {
        image:"application-customer-mobile-svgrepo-com.svg",
        title: "App Optimization",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
        more: "Read More"
    },
    {
        image:"cloud-computing-data-7-svgrepo-com.svg",
        title: "Data Recovery",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
        more: "Read More"
    },

    ]
    return (
        <>
            <div className="text-center md:pt-20 pt-10">
                <p className="text-violet-500 font-bold">WHAT WE PROVIDE</p>
                <p className="text-4xl font-bold">Our Services</p>
            </div>
        <section className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 grid grid-cols-1 justify-items-center p-5 ">
        
            {servdata.map((item, index) => (
                <div className="p-5 md:w-96 shadow-xl mb-5 rotate-icon">
                    <img src={item.image} alt="" className="w-12 pb-4 pt-4 rotate-icons"  />
                    <p className="pb-4 text-orange-500 font-bold"><a href="">{item.title}</a></p>
                    <p className="max-w-sm pb-4">{item.description}</p>
                    <a href="" className="pb-8 text-orange-500 font-bold underline  ">{item.more}</a>
                    

                </div>
                
            ))}
            </section>
        </>
    )
}