import Drawers from "./drawer"
import Logo from "./Logo"
import Menu from "./menu"
import Support from "./support"
import React, { useState, useEffect } from 'react';
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    // Detect scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Clean up event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <section className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out  pb-2 ${isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-transparent'
                }`}>
                <div className="sticky lg:grid lg:grid-cols-6 grid grid-cols-3 justify-items-center items-center pt-4 py-4 px-2">
                    <div className="div">
                        <Logo />
                    </div>
                    <div className="lg:col-start-2 lg:col-span-4">
                        <Menu />
                    </div>
                    <div className="div">
                        <Support />
                        <Drawers />
                    </div>
                </div>
            </section>
        </>
    )
}