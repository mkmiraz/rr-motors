import Navbar from "../Navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <>
      <header className="bg-[url('./src/assets/img/main-bg.jpg')] bg-cover bg-center h-[80vh] bg-fixed relative">
        <Navbar />
        <div className="text-area  w-[55%]   text-center  absolute   top-56 left-0 right-0 bottom-0 mx-auto ">
          <h2 className="text-4xl text_red  font-thin">- Welcome To -</h2>
          <div className="mt-5 pl-14 w-[100%] mx-auto flex gap-3 justify-start items-center">
            <div className="logo flex justify-end ">
              <div className="">
                <h2 className="text-5xl text_red  space-x-2 font-semibold italic ">
                  RR
                </h2>
              </div>
              <h3 className=" h-fit mt-6 text-sm text-white tracking-widest">
                Motors
              </h3>
            </div>
            <h1 className="text-bold text-white opacity-85 text-4xl font-semibold mt-1">
              <Typewriter
                words={["Car Dealer The Best Car Dealer Automotive"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <p className="mt-6 w-[90%] mx-auto leading-[<value>] text-white text-center opacity-65 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptas sequi hic necessitatibus voluptates eum deleniti! Dolore
            atque quaerat aperiam iste ipsam. Quis qui sit nobis ex perspiciatis
            sapiente, nemo velit corporis, voluptate assumenda fugit tempora vel
            aliquid repellat! Ratione suscipit laboriosam nulla consequatur
            molestiae, earum nobis unde accusantium exercitationem.
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
