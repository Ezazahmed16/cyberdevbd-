import Image from "next/image"
import WhyUsSection from "./WhyUsSection"

const WhyUs = () => {
    return (
        <section>
            <div className="justify-center items-center min-h-screen max-w-7xl mx-auto">
                <div className="w-auto mx-auto text-center py-5">
                    <h1 className="text-2xl lg:text:3xl xl:text-5xl font-bold mb-1 text-red-500">
                        Why Us
                    </h1>
                    <p className="text-neutral-400 text-xs sm:text-base w-4/5 md:w-2/3 m-auto pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe necessitatibus ipsam dicta nostrum in illum omnis doloribus! Voluptas eaque deserunt, beatae ipsam unde magni. Tempore?
                    </p>
                </div>
                <div className="">
                    <WhyUsSection />
                </div>
            </div>
        </section>
    )
}

export default WhyUs