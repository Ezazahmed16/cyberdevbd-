import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center h-screen max-w-7xl mx-auto">
                <div className="w-auto mx-auto py-5">
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold mb-1 text-red-500 pb-3">
                        About Us
                    </h1>
                    <p className="text-neutral-200 text-xs sm:text-base text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, omnis. Tempore excepturi eveniet quas, hic, numquam perspiciatis, consequatur quo quaerat libero eius quae amet ex! Quod ipsam eius commodi dolorem, eos numquam optio iusto ex maiores! Debitis nulla voluptatem repudiandae obcaecati. Est aliquam praesentium laudantium, suscipit molestiae omnis ipsa impedit. Omnis, perferendis in debitis sapiente nam quidem repellendus consequuntur id?
                    </p>
                </div>
                <div className="">
                    <Image
                        src="https://cdn.pixabay.com/photo/2017/08/06/00/49/macbook-2587217_960_720.jpg "
                        width={420}
                        height={500}
                        alt="About Us"
                        className='flex m-auto rounded-3xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs