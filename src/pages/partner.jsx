import ImgCarousel from "./ourpartners";
import './ourpartners.css';

const Partner = () => {
    const images = [
      'https://hekahealthyyou.com/assets/image/partner1.svg',
      'https://hekahealthyyou.com/assets/image/partner2.svg',
      'https://hekahealthyyou.com/assets/image/partner3.svg',
      'https://hekahealthyyou.com/assets/image/partner4.svg',
      'https://hekahealthyyou.com/assets/image/partner5.svg',
      'https://hekahealthyyou.com/assets/image/partner6.svg',
      'https://hekahealthyyou.com/assets/image/partner7.svg',
      // Add more image URLs here
    ];
  
    return <ImgCarousel images={images} />;
  };
  
  export default Partner;