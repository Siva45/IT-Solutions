import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
export default function Drawers() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <div className="lg:hidden">
                <button onClick={toggleDrawer}><i className="fa-solid fa-bars  text-white"></i></button>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='bla bla bla'
                >
                    <div>
                        <button onClick={toggleDrawer} style={{ float: 'right' }} className='p-2'>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                        <ul className="text-center p-2">
                            <li className='border-b pb-4 pt-2 hover:text-violet-500'><a href="#">Home</a></li>
                            <li className='border-b pb-4 pt-2 hover:text-violet-500'><a href="#">About Us</a></li>
                            <li className='border-b pb-4 pt-2 hover:text-violet-500'><a href="#">Services</a></li>
                            <li className='border-b pb-4 pt-2 hover:text-violet-500'><a href="#">Projects</a></li>
                            <li className='border-b pb-4 pt-2 hover:text-violet-500'><a href="#">Pages</a></li>
                            <li className='border-b pb-4 pt-2 hover:text-violet-500'><a href="#">Blog</a></li>
                            <li className=' pb-4 hover:text-violet-500'><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </Drawer>
            </div>
        </>
    )
}