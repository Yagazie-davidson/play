"use client";
import { motion, AnimatePresence } from "framer-motion";
import ticketYellow from "@/public/yellow-ticket_bokooz.svg";
import ticketBlue from "@/public/blue-ticket_zqy1z2.svg";
import ticketGreen from "@/public/green-ticket_d973oo.svg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center overflow-hidden relative bg-hero">
        <nav className="absolute top-0 bg-white p-6 rounded-2xl w-full max-w-[75rem] mt-16 flex justify-between">
          <Image
            src={"https://tickets.devfestlagos.com/animated-devfest-logo.svg"}
            width={120}
            height={35}
            alt=""
          />
          <Link href={"#"} className="flex items-center">
            <span className="text-base"> Play Trivia</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <path
                fill="#1E1E1E"
                stroke="#1E1E1E"
                d="m15.61 14.073-.004.003-6.513 6.513a.3.3 0 0 1-.183.08.24.24 0 0 1-.177-.073.255.255 0 0 1 0-.353l6.52-6.52a1.73 1.73 0 0 0 0-2.447l-6.52-6.52a.255.255 0 0 1 0-.353.255.255 0 0 1 .353 0l6.52 6.52c.417.417.654.98.654 1.576 0 .601-.23 1.16-.65 1.574Z"
              ></path>
            </svg>
          </Link>
        </nav>
        <div className="absolute top-32 left-0">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: -170, opacity: 0 }}
              whileInView={{
                x: 170,
                opacity: 1,
              }}
              exit={{ y: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center ">
                <div className="bg-[#FDE293] text-[#f9ab00]  font-medium text-xs py-[6px] rounded-lg px-[12px]">
                  <p>Product Manger</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  fill="none"
                  data-animate-career-cursor="true"
                  data-delay="1.3"
                >
                  <g filter="url(#product-manager-cursor-icon_svg__a)">
                    <path
                      fill="#F9AB00"
                      d="m9.152 2.933 11.312 11.684-16.348 1.216 4.823-5.578z"
                    ></path>
                    <path
                      stroke="#252525"
                      d="m9.152 2.933 11.312 11.684-16.348 1.216 4.823-5.578z"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="product-manager-cursor-icon_svg__a"
                      width="22.617"
                      height="18.69"
                      x="0.949"
                      y="0.729"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_420_1118"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_420_1118"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute top-36 right-0">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 170, opacity: 0 }}
              whileInView={{
                x: -170,
                opacity: 1,
              }}
              exit={{ y: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="21"
                  fill="none"
                  data-animate-career-cursor="true"
                  data-delay="1.3"
                  data-duration="0.7"
                >
                  <g filter="url(#product-designer-cursor-icon_svg__a)">
                    <path
                      fill="#EA4335"
                      d="M19.248 13.8 3.363 17.288l7.553-14.55 2.213 7.034z"
                    ></path>
                    <path
                      stroke="#252525"
                      d="M19.248 13.8 3.363 17.288l7.553-14.55 2.213 7.034z"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="product-designer-cursor-icon_svg__a"
                      width="22.088"
                      height="20.569"
                      x="0.43"
                      y="0.438"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_420_1106"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_420_1106"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
                <div className="bg-[#f8d8d8] text-[#ea4335]  font-medium text-xs py-[6px] rounded-lg px-[12px]">
                  <p>Product Designer</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-64 left-0">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: -140, opacity: 0 }}
              whileInView={{
                x: 140,
                opacity: 1,
              }}
              exit={{ x: -50, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center ">
                <div className="bg-[#89f006] text-[#34a853]  font-medium text-xs py-[6px] rounded-lg px-[12px]">
                  <p>Software Engineer</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="22"
                  fill="none"
                  data-animate-career-cursor="true"
                  data-delay="1.3"
                  dara-duration="0.7"
                >
                  <g filter="url(#software-engineer-cursor-icon_svg__a)">
                    <path
                      fill="#34A853"
                      d="m4.038 5.686 15.97-3.077-7.927 14.35-2.03-7.089z"
                    ></path>
                    <path
                      stroke="#252525"
                      d="m4.038 5.686 15.97-3.077-7.927 14.35-2.03-7.089z"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="software-engineer-cursor-icon_svg__a"
                      width="22.186"
                      height="20.341"
                      x="0.775"
                      y="0.914"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_420_1103"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_420_1103"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-40 right-0">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 160, opacity: 0 }}
              whileInView={{
                x: -160,
                opacity: 1,
              }}
              exit={{ y: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="20"
                  fill="none"
                  data-animate-career-cursor="true"
                  data-delay="1.3"
                  dara-duration="0.7"
                >
                  <g filter="url(#data-analyst-cursor-icon_svg__a)">
                    <path
                      fill="#4285F4"
                      d="M15.35 14.855 3.51 3.705l16.276-1.97-4.56 5.795z"
                    ></path>
                    <path
                      stroke="#252525"
                      d="M15.35 14.855 3.51 3.705l16.276-1.97-4.56 5.795z"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="data-analyst-cursor-icon_svg__a"
                      width="22.533"
                      height="18.939"
                      x="0.391"
                      y="0.096"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_420_1111"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_420_1111"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
                <div className="bg-[#c3ecf6] text-[#4285f4]  font-medium text-xs py-[6px] rounded-lg px-[12px]">
                  <p>Data Analyst</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center -space-x-[22rem] absolute -bottom-32">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 400, x: 160, opacity: 0, rotate: 90 }}
              whileInView={{
                y: 0,
                x: 0,
                opacity: 1,
                rotate: 60,
              }}
              exit={{ y: -250, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                y: { duration: 1.1 },
                x: { delay: 1.2, duration: 0.5 },
                opacity: { duration: 0 },
                rotate: { delay: 1.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={ticketGreen}
                alt="My SVG Image"
                width="650"
                height="650"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                y: 250,
                opacity: 0,
                rotate: 90,
              }}
              whileInView={{
                y: -45,
                opacity: 1,
              }}
              exit={{ y: -250, opacity: 0 }}
              transition={{
                duration: 2,
                delay: 1,
                y: { duration: 1 },
                opacity: { duration: 1 },
                rotate: { delay: 1, duration: 1 },
              }}
              viewport={{ once: true }}
              className="z-50"
            >
              <Image
                src={ticketBlue}
                alt="My SVG Image"
                width="650"
                height="650"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 400, opacity: 0, x: -160, rotate: 90 }}
              whileInView={{
                y: 0,
                opacity: 1,
                x: 0,
                rotate: 120,
              }}
              exit={{ y: -250, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                y: { duration: 1.1 },
                x: { delay: 1.2, duration: 0.5 },
                opacity: { duration: 0 },
                rotate: { delay: 1.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={ticketYellow}
                alt="My SVG Image"
                width="650"
                height="650"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
