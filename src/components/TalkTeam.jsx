import React from 'react'
import CommonButton from './common/CommonButton'

const TalkTeam = () => {
    return (
        <div>
            <div className="w-full mx-auto text-center py-10">
                <h1 className="text-2xl lg:text:3xl xl:text-5xl font-bold mb-1 text-red-500">
                    Ready To Talk To Our Team?
                </h1>
                <p className="text-neutral-400 text-xs sm:text-base w-4/5 md:w-2/3 m-auto pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe necessitatibus ipsam dicta nostrum in illum omnis doloribus! Voluptas eaque deserunt, beatae ipsam unde magni. Tempore?
                </p>
                <div className="py-10">
                    <CommonButton className='bg-transparent text-white hover:bg-red-700 w-full justify-center mx-auto'>
                        Book A Meeting
                    </CommonButton>
                </div>
            </div>
        </div>
    )
}

export default TalkTeam