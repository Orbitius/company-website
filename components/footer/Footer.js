import Link from "next/link";
import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { footer } from "./Style";


const ourLinks = [
  {name:"Home", route:"/"}, 
  {name:"Services",route:"/services"}, 
  {name:"Projects",route:"*"}, 
  {name:"Technologies",route:"/*"}, 
  {name:"Blogs",route:"/blogs"}
]

const checkOut = [
  {name:"About", route:"/about"}, 
  {name:"Privacy Policy",route:"/privacy-policy"}, 
  {name:"Term Condition",route:"*"}
]

const Footer = () => {
  return (
    <div className={footer.main_div}>
      <div className="760:flex 760:mb-6">
        <div className="text-center">
          <h2 className="text-3xl 360:text-4xl">Orbitius</h2>
          <p className="-mt-1 text-sm 360:text-base">make it possible</p>
        </div>

        <div className={footer.contact_checkout_div}>
          <div>
            <p className={footer.contact_checkout_p}>Contact us</p>
            <div className={footer.contact_us}>
              <BiBuildings />
              <p>New Delhi, India</p>
            </div>
            <div className={footer.contact_us}>
              <IoMdCall />
              <p>+91 7065743307</p>
            </div>
            <div className={footer.contact_us}>
              <MdEmail />
              <p>oribitius04@gmail.com</p>
            </div>
          </div>

          <div>
            <p className={footer.contact_checkout_p}>Check out</p>
            <ul className="text-sm 360:text-base">
              {checkOut.map((item, index) => (
                  <li key={index}>
                    <Link href={item.route}>{item.name}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="hidden 760:block">
            <p className={footer.contact_checkout_p}>Our Links</p>
            <ul className="text-sm 360:text-base">
              {ourLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.route}>{item.name}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className={footer.icons}>
          <Link href={"*"}>
            <FaInstagramSquare />
          </Link>
          <Link href={"*"}>
            <BsLinkedin />
          </Link>
          <Link href={"*"}>
            <BsFacebook />
          </Link>
        </div>

        <p className="text-center">©copyright 2021 - Orbitius. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
