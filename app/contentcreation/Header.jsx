
const Header = () => {
    return(
        <>
            <header className='min-h-12 max-h-12 bg-black py-3 px-6'>
                <div className='flex items-center justify-between'>
                <h1 className='text-white'>My Learning</h1>
                <div className='hidden md:flex items-center justify-center gap-3'>
                    <p className='text-gray-400'>USD</p>
                    <p className='text-gray-400'>English</p>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header;