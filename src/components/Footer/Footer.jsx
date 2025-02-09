import { CiLinkedin } from "react-icons/ci";
import {
  FaFacebook,
  FaPhone,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-fit mt-8 z-10  ">
        <div className="container ">
          <div className="top px-2 border-b border-gray-600  flex justify-between items-center pt-5">
            <div className="">
              <div className="logo  z-50 flex justify-end ">
                <div className="">
                  <h2 className="text-5xl text_red  space-x-2 font-semibold italic ">
                    RR
                  </h2>
                </div>
                <h3 className=" h-fit mt-6 text-sm text-white tracking-widest">
                  Motors
                </h3>
              </div>
              <span className="uppercase footerSpan  tracking-[.3em] text-white ">
                best car dealer
              </span>
            </div>
            <div className="social_link pr-2 flex gap-3 items-center justify-end">
              <Link className="text_red ease-linear text-2xl hover:text-white ">
                <FaFacebook />
              </Link>
              <Link className="text_red ease-linear text-2xl hover:text-white ">
                <FaYoutube />
              </Link>
              <Link className="text_red ease-linear text-2xl hover:text-white ">
                <FaTwitterSquare />
              </Link>
              <Link className="text_red  ease-linear text-2xl hover:text-white ">
                <CiLinkedin />
              </Link>
            </div>
          </div>
          <div className="info_box  flex gap-8 justify-between items-center px-1 py-10">
            <div className="info_text  h-[300px] flex-1 flex flex-col gap-5  border-r  border-gray-600">
              <h2 className="text-xl ml-1 text-white opacity-80">
                Contact Information
              </h2>
              <p className="text-sm ml-1 text-white opacity-80 ">
                We provide everything <br></br> you need to build an amazing
                dealership.
              </p>
              <Link className="text-sm text-white opacity-80 flex gap-1 items-center justify-start">
                <span className="text_red text-2xl">
                  <IoLocationOutline />
                </span>
                1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
              </Link>
              <Link className="text-sm text-white opacity-80 flex gap-3 items-center justify-start">
                <span className="text_red text-2xl">
                  <FaPhone />
                </span>
                (007) 123 456 7890
              </Link>
              <Link className="text-sm text-white opacity-80 flex gap-3 items-center justify-start">
                <span className="text_red text-2xl">
                  <MdEmail />
                </span>
                support@example.com
              </Link>
            </div>

            <iframe
              className="w-[48%] h-[300px] opacity-60"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6475220.190031068!2d95.23352825723649!3d37.58500785131763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x364c5c6eb147b4e5%3A0xafcab8b3b8d3bfd9!2sGansu%2C%20China!5e0!3m2!1sen!2sbd!4v1738337267468!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
        <div className=" border-t border-gray-600 flex  gap-2 justify-center items-center px-5 py-5">
          <span className="text-white text-xs">
            ©Copyright 2025 Car Dealer Developed by
          </span>
          <Link className="text_red text-xs p-4" to={"#"}>
            Miraz Khondokar
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
