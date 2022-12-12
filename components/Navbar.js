import React, { useState, useEffect } from 'react'
import { HiMenu, HiX, HiChevronDown, HiPhone, HiOutlineMail } from "react-icons/hi";
import { FcGlobe } from "react-icons/fc"

{/* Navbar style section start from here */}

// 280:shadow-md

const navbar = {
    main: `
        280:flex 
        280:justify-between 
        280:items-center
        280:py-4
        280:px-4
        

        760:py-6
        760:px-6 

        960:px-16
        
    `,
    name_heading:`
        280:text-[#ff3d00] 
        280:font-bold 
        280:text-[25px]
    `, 
    menu_bar: `
        280:text-[20px]
        760:hidden 
    `,

    ul_div: `
        280:absolute 
        280:top-0 
        280:right-0 
        280:left-0 
        280:bottom-0
        280:flex
        280:items-center 
        280:justify-between 
                 
        760:block 
        760:static 
        760:bg-inherit 
        760:p-0
    `,
    blank_div: `
        280:absolute 
        280:right-0 
        280:top-0 
        280:bottom-0 
        280:left-0 
        280:bg-[rgba(255,255,255,0.6)]

        760:hidden
    `,

    ul_sub_div: `
        280:z-10 
        280:h-screen 
        280:ml-auto 
        280:bg-black 
        280:p-3

        280:w-[240px]
        360:w-[280px]
        460:w-[300px]
        560:w-[320px]
        660:w-[340px]

        760:bg-inherit
        760:p-0
        760:flex 
        760:items-center  
        760:h-[100%]
        760:w-[100%]
        760:justify-end
        760:translate-x-0
        760:static 
    `,

    ul: `
        760:flex
        760:items-center  
    `,

    cut: `
        280:text-[20px]
        280:ml-auto

        760:hidden
    `,
    li:`
        280:text-[14px]
        280:font-semibold
        280:py-2
        280:uppercase 

        760:py-0
        760:pl-3
        760:capitalize
        760:text-[15px]

        860:pl-4
        960:pl-6
        1000:pl-8
    `,

    li2:`
        280:flex 
        280:justify-between 
        280:items-center
    `,

    icons: `
        280:text-[20px]
    `,

    button: `
        280:mt-2 
        280:bg-[#ff3d00] 
        280:py-2
        280:px-5
        280:text-white 
        280:text-[13px]
        280:font-semibold 
        280:uppercase 

        760:mt-0
        760:ml-3
        760:py-2
        760:px-4
        760:capitalize
        760:text-[16px]

        860:ml-4
        960:ml-6
        1000:ml-8
    `,

    contact_div: `
        280:py-5 
        760:hidden
    `,
    contact_sub_div: `
        280:flex 
        280:items-center 
        280:pb-1
    `,
    contact_icon: `
        280:mr-2 
        280:text-[17px]
    `,
    contact_detail: `
        text-[15px]
    `,
    
}

{/* Navbar style section end here */}

const Navbar = () => {

    const [list, setList] = useState(false)
    
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflowY = list ? 'hidden' : 'scroll';
        body.style.overflowX = 'hidden'
    }, [list])

    return (
        <div className={`${navbar.main}`}> 
            <h1 className={`${navbar.name_heading}`} style={{fontFamily: "Kdam Thmor Pro"}}>Orbitius</h1> 
            <HiMenu className={`${navbar.menu_bar}`} onClick={() => setList(true)}/>  

            
            <div onClick={()=>setList(false)} 
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
                <HiX className={`${navbar.cut}`} onClick={()=>setList(false)}/>

                <ul className={`${navbar.ul}`}>
                    <li className={`${navbar.li}`}>Home</li>
                    <li className={`${navbar.li}`}>Blogs</li>
                    <li className={`${navbar.li}`}>Projects</li>

                    <li className={`${navbar.li} ${navbar.li2}`}> 
                        Services 
                        <HiChevronDown className={`${navbar.icons}`} /> 
                    </li> 

                    <li className={`${navbar.li} ${navbar.li2}`}> 
                        About Us 
                        <HiChevronDown className={`${navbar.icons}`} /> 
                    </li>                

                    <li className={`${navbar.li} ${navbar.li2}`}> 
                        Technologies
                        <HiChevronDown className={`${navbar.icons}`} /> 
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