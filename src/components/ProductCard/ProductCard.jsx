import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="card_area p-6 mt-5 w-full h-fit flex gap-8 justify-center items-center flex-wrap">
        <Link to={"#"} className="card block w-[400px] h-fi bg-white shadow-md">
          <div className="card_img w-full h-[280px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover z-30"
              src="https://themes.potenzaglobalsolutions.com/html/cardealer/images/car/01.jpg"
              alt=""
            />
            <span className="bg_red absolute z-40 py-2 px-4 text-white bottom-2 right-2">
              $17,900.00
            </span>
          </div>
          <div className="catd_text p-7 flex flex-col gap-2">
            <span className="text_red text-sm font-medium">SEDAN</span>
            <h2 className="ext-lg font-semibold opacity-90 line-clamp-1">
              2019 Audi A4
            </h2>
            <div className="mt-2 flex justify-between items-center gap-2">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Year</span>
                <b className="opacity-90 font-semibold text-sm">2013</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Make</span>
                <b className="opacity-90 font-semibold text-sm">Cadillac</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Transmission</span>
                <b className="opacity-90 font-semibold text-sm">Automatic</b>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"#"} className="card block w-[400px] h-fi bg-white shadow-md">
          <div className="card_img w-full h-[280px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover z-30"
              src="https://themes.potenzaglobalsolutions.com/html/cardealer/images/car/02.jpg"
              alt=""
            />
            <span className="bg_red absolute z-40 py-2 px-4 text-white bottom-2 right-2">
              $21,900.00
            </span>
          </div>
          <div className="catd_text p-7 flex flex-col gap-2">
            <span className="text_red text-sm font-medium">SEDAN</span>
            <h2 className="ext-lg font-semibold opacity-90 line-clamp-1">
              2013 Cadillac CTS 3.6L Premium
            </h2>
            <div className="mt-2 flex justify-between items-center gap-2">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Year</span>
                <b className="opacity-90 font-semibold text-sm">2013</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Make</span>
                <b className="opacity-90 font-semibold text-sm">Cadillac</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Transmission</span>
                <b className="opacity-90 font-semibold text-sm">Automatic</b>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={"#"}
          className="card block w-[400px] h-fi bg-white shadow-md "
        >
          <div className="card_img w-full h-[280px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover z-30"
              src="https://themes.potenzaglobalsolutions.com/html/cardealer/images/car/03.jpg"
              alt=""
            />
            <span className="bg_red absolute z-40 py-2 px-4 text-white bottom-2 right-2">
              $17,900.00
            </span>
          </div>
          <div className="catd_text p-7 flex flex-col gap-2">
            <span className="text_red text-sm font-medium">SEDAN</span>
            <h2 className="text-lg font-semibold opacity-90 line-clamp-1">
              2013 Audi A4 2.0T quattro Premium Plus
            </h2>
            <div className="mt-2 flex justify-between items-center gap-2">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Year</span>
                <b className="opacity-90 font-semibold text-sm">2013</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Make</span>
                <b className="opacity-90 font-semibold text-sm">Cadillac</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Transmission</span>
                <b className="opacity-90 font-semibold text-sm">Automatic</b>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={"#"}
          className="card block w-[400px] h-fi bg-white shadow-md "
        >
          <div className="card_img w-full h-[280px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover z-30"
              src="https://themes.potenzaglobalsolutions.com/html/cardealer/images/car/04.jpg"
              alt=""
            />
            <span className="bg_red absolute z-40 py-2 px-4 text-white bottom-2 right-2">
              $17,900.00
            </span>
          </div>
          <div className="catd_text p-7 flex flex-col gap-2">
            <span className="text_red text-sm font-medium">SEDAN</span>
            <h2 className="text-lg font-semibold opacity-90 line-clamp-1">
              2013 Audi A4 2.0T quattro Prem
            </h2>
            <div className="mt-2 flex justify-between items-center gap-2">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Year</span>
                <b className="opacity-90 font-semibold text-sm">2013</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Make</span>
                <b className="opacity-90 font-semibold text-sm">Cadillac</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Transmission</span>
                <b className="opacity-90 font-semibold text-sm">Automatic</b>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={"#"}
          className="card block w-[400px] h-fi bg-white shadow-md "
        >
          <div className="card_img w-full h-[280px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover z-30"
              src="https://themes.potenzaglobalsolutions.com/html/cardealer/images/car/05.jpg"
              alt=""
            />
            <span className="bg_red absolute z-40 py-2 px-4 text-white bottom-2 right-2">
              $17,900.00
            </span>
          </div>
          <div className="catd_text p-7 flex flex-col gap-2">
            <span className="text_red text-sm font-medium">SEDAN</span>
            <h2 className="text-lg font-semibold opacity-90 line-clamp-1">
              2013 Audi A4 2.0T quattro Prem
            </h2>
            <div className="mt-2 flex justify-between items-center gap-2">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Year</span>
                <b className="opacity-90 font-semibold text-sm">2013</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Make</span>
                <b className="opacity-90 font-semibold text-sm">Cadillac</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Transmission</span>
                <b className="opacity-90 font-semibold text-sm">Automatic</b>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to={"#"}
          className="card block w-[400px] h-fi bg-white shadow-md "
        >
          <div className="card_img w-full h-[280px] overflow-hidden relative">
            <img
              className="w-full h-full object-cover z-30"
              src="https://themes.potenzaglobalsolutions.com/html/cardealer/images/car/06.jpg"
              alt=""
            />
            <span className="bg_red absolute z-40 py-2 px-4 text-white bottom-2 right-2">
              $17,900.00
            </span>
          </div>
          <div className="catd_text p-7 flex flex-col gap-2">
            <span className="text_red text-sm font-medium">SEDAN</span>
            <h2 className="text-lg font-semibold opacity-90 line-clamp-1">
              2013 Audi A4 2.0T quattro Premium Plus
            </h2>
            <div className="mt-2 flex justify-between items-center gap-2">
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Year</span>
                <b className="opacity-90 font-semibold text-sm">2013</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Make</span>
                <b className="opacity-90 font-semibold text-sm">Cadillac</b>
              </div>
              <div className="flex flex-col items-start gap-1 flex-1">
                <span className="text-xs opacity-80">Transmission</span>
                <b className="opacity-90 font-semibold text-sm">Automatic</b>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
