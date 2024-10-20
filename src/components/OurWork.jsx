import Image from 'next/image';
import { BackgroundGradient } from './ui/background-gradient';
import Link from 'next/link';
import CommonButton from './common/CommonButton';

const OurWork = () => {
  // Dynamic content array
  const cardData = [
    {
      id: 1,
      imageUrl: "https://img.freepik.com/premium-photo/modern-website-design-concept-startup-that-help-business-create-launch-marketplace_1096167-129967.jpg?w=740",
      title: "Air Jordan 4 Retro Reimagined",
    },
    {
      id: 2,
      imageUrl: "https://img.freepik.com/premium-photo/modern-website-design-concept-startup-that-help-business-create-launch-marketplace_1096167-129967.jpg?w=740",
      title: "Air Jordan 4 Retro Reimagined",
    },
    {
      id: 3,
      imageUrl: "https://img.freepik.com/premium-photo/modern-website-design-concept-startup-that-help-business-create-launch-marketplace_1096167-129967.jpg?w=740",
      title: "Air Jordan 4 Retro Reimagined",
    },
  ];

  return (
    <div className=''>
      {/* Header Section */}
      <div className="w-full mx-auto text-center py-10">
        <h1 className="text-2xl lg:text:3xl xl:text-5xl font-bold mb-1 text-red-500">
          Our Works
        </h1>
        <p className="text-neutral-400 text-xs sm:text-base w-4/5 md:w-2/3 m-auto pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe necessitatibus ipsam dicta nostrum in illum omnis doloribus! Voluptas eaque deserunt, beatae ipsam unde magni. Tempore?
        </p>
      </div>

      {/* Dynamic Cards Section */}
      <div className="w-full mx-auto text-neutral-400 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center">
        {cardData.map((card) => (
          <div key={card.id} className="">
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900">
              <Image
                src={card.imageUrl}
                alt={card.title}
                height={400}
                width={400}
                className="object-contain"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                {card.title}
              </p>
              <div className="flex justify-center">
                <button className="rounded-full px-5 py-3 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
                  <span>Preview</span>
                </button>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      {/* Centered Button Section */}
      <div className="w-full flex justify-center py-10">
        <CommonButton className='bg-transparent text-white hover:bg-red-700 w-auto'>
          See More
        </CommonButton>
      </div>
    </div>
  );
};

export default OurWork;
