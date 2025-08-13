'use client';

const HeaderTopBar = () => {
  return (
    <div className="w-full bg-white text-black py-1 px-2 sm:px-4 lg:px-6 xl:px-8">
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
        <div className="text-xs sm:text-xs md:text-sm order-2 sm:order-1">
          bookings@entrex.in
        </div>
        <div className="text-xs sm:text-xs md:text-sm order-1 sm:order-2 flex flex-col sm:flex-row items-center gap-1 sm:gap-0">
          <span className="hidden sm:inline">+91 44 4953 0055 | +91 98400 27990 | +91 91767 81444</span>
          <div className="sm:hidden text-center">
            <div>+91 44 4953 0055</div>
            <div>+91 98400 27990 | +91 91767 81444</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;