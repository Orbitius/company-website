import React, { useState, useEffect } from 'react'
import { HiMenu, HiX, HiChevronDown, HiChevronUp, HiPhone, HiOutlineMail } from "react-icons/hi";
import { FcGlobe } from "react-icons/fc"
import { navbar } from "./Style.js" 

const Navbar = () => {

    const [list, setList] = useState(false)
    const [dropDown, setDropDown] = useState(null)  

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflowY = list ? 'hidden' : 'scroll';
        body.style.overflowX = 'hidden'
    }, [list])

    return (
        <div className={`${navbar.main}`}> 
            <h1 className={`${navbar.name_heading}`} style={{fontFamily: "Kdam Thmor Pro"}}>Orbitius</h1> 
            <HiMenu className={`${navbar.menu_bar}`} onClick={() => setList(true)}/>  

            <div 
                onClick={() => {
                    setDropDown(null)
                    setList(false)
                }} 
                className={`
                    ${navbar.blank_div}

                    ${list ? "280:bg-rgba[0,0,0,0.6]" : "280:hidden"}
                    duration-300
                    ease-in-out 
                `}

            ></div>

            <div 
                className={`
                    ${navbar.ul_sub_div} 
                    fixed top-0 right-0

                    ${list ? "280:translate-x-0" : "280:translate-x-full"}
                    duration-300
                    ease-in-out
                `}
            > 
                <HiX 
                    className={`${navbar.cut}`} 
                    onClick={() => {
                        setDropDown(null)
                        setList(false)
                    }} 
                />

                <ul className={`${navbar.ul}`}>
                    <li className={`${navbar.li}`}>Home</li>
                    <li className={`${navbar.li}`}>Blogs</li>
                    <li className={`${navbar.li}`}>Projects</li>

                    <li className={`${navbar.li}`}> 
                        <div className={`${navbar.li2}`}>
                            Services
                            <HiChevronDown 
                                className={`
                                    ${navbar.icons} 
                                    ${dropDown==="service" ? "hidden" : "block"}
                                `} 
                                onClick={() => setDropDown("service")}
                            /> 
                            <HiChevronUp 
                                className={`
                                    ${navbar.icons} 
                                    ${dropDown==="service" ? "block" : "hidden"}
                                `} 
                                onClick={() => setDropDown(null)}
                            />
                        </div>
                        <div className={`${dropDown==="service" ? "block" : "hidden"}`}>
                            Hello World 
                        </div>
                    </li>

                    <li className={`${navbar.li}`}> 
                        <div className={`${navbar.li2}`}>
                            About Us 
                            <HiChevronDown 
                                className={`
                                    ${navbar.icons} 
                                    ${dropDown==="about" ? "hidden" : "block"}
                                `} 
                                onClick={() => setDropDown("about")}
                            /> 
                            <HiChevronUp 
                                className={`
                                    ${navbar.icons} 
                                    ${dropDown==="about" ? "block" : "hidden"}
                                `} 
                                onClick={() => setDropDown(null)}
                            />
                        </div>
                        <div className={`${dropDown==="about" ? "block" : "hidden"}`}>
                            Hello World 
                        </div>
                    </li>                

                    <li className={`${navbar.li}`}> 
                        <div className={`${navbar.li2}`}>
                            Technologies  
                            <HiChevronDown 
                                className={`
                                    ${navbar.icons} 
                                    ${dropDown==="technology" ? "hidden" : "block"}
                                `} 
                                onClick={() => setDropDown("technology")}
                            /> 
                            <HiChevronUp 
                                className={`
                                    ${navbar.icons} 
                                    ${dropDown==="technology" ? "block" : "hidden"}
                                `} 
                                onClick={() => setDropDown(null)}
                            />
                        </div>
                        <div className={`${dropDown==="technology" ? "block" : "hidden"}`}>
                            Hello World 
                        </div>
                    </li>
                </ul>

                <button className={`${navbar.button}`}>Contact Us</button> 

                <div className={`${navbar.contact_div}`}>
                    <div className={`${navbar.contact_sub_div}`}> 
                        <HiPhone className={`${navbar.contact_icon}`} />
                        <span className={`${navbar.contact_detail}`}>+91 7065743307</span> 
                    </div>

                    <div className={`${navbar.contact_sub_div}`}>
                        <HiOutlineMail className={`${navbar.contact_icon}`}/>
                        <span className={`${navbar.contact_detail}`}>webnization@gmail.com</span> 
                    </div> 
                </div>
            </div>
            
        </div>
    )
} 

export default Navbar