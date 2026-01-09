import dipdop from '/dipdop.svg'

export function Header() {
    return (
        <header className="w-full bg-[#E5E5E5] h-15 p-2 flex justify-center items-center" >
            <div className="w-full  h-full flex justify-between">
                <div className='w-auto p-2 aspect-square h-auto'>
                    <img src={dipdop} alt="dipdop" className='w-auto h-full' />
                </div>
                <div className='w-auto h-full flex pr-7 justify-center items-center'>
                    <p className='text-2xl underline text-bold text-gray-800'>
                        Your Ultimate Concept
                    </p>
                </div>
            </div>
        </header>
    )
}