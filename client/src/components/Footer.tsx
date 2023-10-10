import { Link } from "react-router-dom";

import { getCurrTime } from "../functions/getCurrTime";
import { getCurrDate } from "../functions/getCurrDate";

import { ModalProps } from "../types/interfaces";

function Footer({ setModal }: ModalProps) {
  const currTime = getCurrTime();
  const currDate = getCurrDate();

  return (
    <footer
      onClick={() => setModal("footer")}
      className="min-h-[10vh] px-2 py-4 text-sm bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-in-out cursor-pointer z-10"
    >
      <address
        onClick={(e) => {
          e.stopPropagation();
          setModal("address");
        }}
        className="px-2 py-1 space-y-1 rounded-sm border border-black bg-purple-600 hover:bg-purple-500 transition-all duration-300 ease-in-out"
      >
        <p className="non-italic">
          Feel free to contact me at{" "}
          <Link
            to="mailto:christiandeandemesa@gmail.com"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            christiandeandemesa@gmail.com
          </Link>
          .
        </p>

        <p>
          But please note that I live in the Pacific Standard Time Zone and this
          is my current time: {""}
          <time
            onClick={(e) => {
              e.stopPropagation();
              setModal("time");
            }}
            dateTime={`${currDate} ${currTime}`}
            className="p-1 rounded-sm border border-black bg-red-600 hover:bg-red-500 transition-all duration-300 ease-in-out"
          >
            {currTime}
          </time>
        </p>
      </address>
    </footer>
  );
}

export default Footer;
