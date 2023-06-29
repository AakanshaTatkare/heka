import React from 'react';
import '../header/Header.css'

const Logo = () => {
  return (
    <>
    <div className="cont">
      <div className="logocircle mt-0 p-0 flex ">
        {/* Add your logo image or text here */}
        <img className='img1' src="https://hekahealthyyou.com/assets/image/logonewmodel.svg" alt="Logo" />
        <img className='img2 pb-12' src="/logosecond.svg" alt="" />
      </div>
    </div>
      </>
  );
};

export default Logo;