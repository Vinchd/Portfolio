import { useState } from "react";
import BurgerMenu from "./BurgerMenu.jsx";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [active, setActive] = useState("translate-y-[-150%]");

  const handleClickLink = () => {
    setActive("translate-y-[-150%]");
  };

  const scrollTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="header sticky top-[-1px] z-20 flex h-24 w-full items-center justify-between bg-primary px-8 py-3">
        <h1
          className="cursor-pointer whitespace-nowrap text-lg sm:text-2xl"
          onClick={() => {
            scrollTop();
            handleClickLink();
          }}
        >
          Vincent Daviaud
        </h1>
        <ul className="flex h-full justify-center max-lg:hidden mobile:mr-10 mobile:gap-10">
          <li className="h-full flex-1">
            <a
              href="https://github.com/Vinchd"
              target="_blank"
              className="flex h-full w-12 items-center justify-center"
            >
              <svg
                viewBox="0 0 256 250"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                width="18px"
                height="18px"
              >
                <g>
                  <path
                    d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
                    fill="#e6edf3"
                    id="id_101"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li className="h-full flex-1">
            <a
              href="https://www.linkedin.com/in/vincent-daviaud-2786a120b/"
              target="_blank"
              className="flex h-full w-12 items-center justify-center"
            >
              <svg
                viewBox="0 0 72 72"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="18px"
                height="18px"
              >
                <title>Linkedin</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Social-Icons---Rounded-Black"
                    transform="translate(-376.000000, -267.000000)"
                  >
                    <g
                      id="Linkedin"
                      transform="translate(376.000000, 267.000000)"
                    >
                      <path
                        d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                        id="Rounded"
                        fill="#e6edf3"
                      ></path>
                      <path
                        d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                        fill="#010409"
                        id="id_101"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className="h-full flex-1">
            <a
              href="mailto:vince.daviaud@gmail.com"
              target="_blank"
              className="flex h-full w-12 items-center justify-center"
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="18px"
                height="18px"
              >
                <title>Mail</title>
                <path
                  id="Mail_2"
                  data-name="Mail 2"
                  d="M25,6V21.62L17.18,13.8ZM12.6,16.7,24.7,4.61a1.22,1.22,0,0,0-.94-.45H1.44a1.22,1.22,0,0,0-.94.45Zm3.74-2.06L13,18a.6.6,0,0,1-.84,0L8.86,14.65.75,22.76a1.21,1.21,0,0,0,.69.24H23.76a1.21,1.21,0,0,0,.69-.24ZM.2,6V21.62L8,13.8Z"
                  fill="#e6edf3"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
        <BurgerMenu active={active} setActive={setActive} />
        <button type="button" hidden>
          Admin
        </button>
      </header>
      <nav
        className={`${active} menu absolute right-0 top-[96px] z-10 w-[200px] rounded-bl-md bg-tertiary text-center text-secondary lg:hidden`}
      >
        <ul className="my-4 flex flex-col">
          <HashLink
            to="#home"
            onClick={handleClickLink}
            className="flex h-16 w-full items-center justify-center"
            smooth
          >
            <li>Accueil</li>
          </HashLink>
          <HashLink
            to="#projects"
            onClick={handleClickLink}
            className="flex h-16 w-full items-center justify-center"
            smooth
          >
            <li>Projets</li>
          </HashLink>
          <HashLink
            to="#cv"
            onClick={handleClickLink}
            className="flex h-16 w-full items-center justify-center"
            smooth
          >
            <li>Mon CV</li>
          </HashLink>
          <HashLink
            to="#contact"
            onClick={handleClickLink}
            className="flex h-16 w-full items-center justify-center"
            smooth
          >
            <li>Contact</li>
          </HashLink>
        </ul>
      </nav>
    </>
  );
}
