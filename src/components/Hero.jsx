"use client";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
import Image from "next/image";
import { Spotlight } from "../components/ui/Spotlight";
import CommonButton from "./common/CommonButton";

const Hero = () => {
    const words = [
        {
            text: "Elevate",
        },
        {
            text: "Your",
        },
        {
            text: "Brand",
        },
        {
            text: "with",
        },
        {
            text: "Expert",
        },
        {
            text: "Digital Solutions",
            className: "text-red-500 dark:text-red-500",
        },
    ];
    return (
        <div className="h-[40rem] w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="block justify-center items-center m-auto">
                <div className="flex flex-col items-center justify-center h-[40rem] ">
                    <Image
                        alt="CyberDev Technology Logo"
                        src="/assets/logo/cyberdev-white.png"
                        width={240}
                        height={160}
                        className="pb-10 mx-auto"
                    />
                    <p className="text-neutral-400 dark:text-neutral-200 text-xs sm:text-base  ">
                        Transforming Your Business Online
                    </p>
                    <TypewriterEffectSmooth words={words} />
                    <div className="flex flex-row gap-5 justify-center items-center">
                        <CommonButton
                            className="bg-red-500 hover:bg-red-700 text-white"
                            onClick={() => alert("Button clicked!")}
                        >
                            Contact Now
                        </CommonButton>
                        <CommonButton
                            className="bg-transparent hover:bg-red-700 text-white"
                            onClick={() => alert("Button clicked!")}
                        >
                            Explore Our Services
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero