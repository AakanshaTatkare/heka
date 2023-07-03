import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="containerf">
        <div className="row">
          <div className="col-lg-2 col-md-6">
            <div className="left-footer">
              <h4 className="footer-sb-heading">Quick Links</h4>
              <ul className="quick-links">
                <li><a href="/about-us" routerlink="/about-us">About Us</a></li>
                <li><a href="/services" routerlink="/services">Our Services</a></li>
                <li><a href="/contact-us" routerlink="/contact-us">Contact Us</a></li>
                <li><a href="/contact-us" routerlink="/contact-us">Career</a></li>
                <li><a href="/" routerlink="">Gallery</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="left-footer">
              <h4 className="footer-sb-heading">Our Services</h4>
              <ul className="footer-services">
                <li><a href="/safety-training" routerlink="/safety-training">Life Support Training</a></li>
                <li><a href="/elderlycare" routerlink="/elderlycare">Elderly Care</a></li>
                <li><a href="/pregnancy-care" routerlink="/pregnancy-care">Pregnancy Care</a></li>
                <li><a href="/operative-care" routerlink="/operative-care">Operative Care</a></li>
                <li><a href="/doctor-consultation" routerlink="/doctor-consultation">Doctor Consultantion</a></li>
                <li><a href="/journal-wellness" routerlink="/journal-wellness">Journal Wellness</a></li>
              </ul>
              
            </div>
          </div>
          
          
          <div className="col-lg-2 col-md-6">
            <div className="left-footer">
              <h4 className="footer-sb-heading">Resources</h4>
              <ul className="quick-links">
                <li><a href="#">News</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="/term-condition" routerlink="/term-condition">Terms of Use</a></li>
                <li><a href="/privacy-policy" routerlink="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/" routerlink="">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-sb-heading">Contact Us</h4>
            <div className="commin-img-cnt-footer">
              <img src="" alt="" style={{ height: '19px' }} />
              <p className="footer-para">connect@hekahealthyyou.com</p>
            </div>
            <div className="commin-img-cnt-footer">
              <img src="../../assets/image/whatsappnew.png" alt="" style={{ height: '19px' }} />
              <p className="footer-para">+91 80100 81010, +91 80100 91010</p>
            </div>
            <div className="commin-img-cnt-footer">
              <img src="../../assets/image/callnew.png" alt="" style={{ height: '19px' }} />
              <p className="footer-para">
                <a href="tel:8010091010" style={{ textDecoration: 'none', color: '#000' }}>+91 80100 91010,</a>
                <a href="tel:80100 81010" style={{ textDecoration: 'none', color: '#000' }}>+91 80100 81010</a>
              </p>
            </div>
            <ul className="footersocial">
              <li><a href="https://www.facebook.com/Heka-Healthy-You-112554331309941"><img src="https://tse1.mm.bing.net/th?id=OIP.FQYyu80e7eHzc3lbL4BzBQHaHY&pid=Api&rs=1&c=1&qlt=95&w=112&h=111" alt="" /></a></li>
              <li><a href="https://www.instagram.com/hekahealthyyou/"><img src="https://tse1.mm.bing.net/th?id=OIP.A_QLZ7Y9nBwaWnkhCbvGmQHaHZ&pid=Api&rs=1&c=1&qlt=95&w=121&h=120" alt="" /></a></li>
              <li><a href="#"><img src="https://tse2.mm.bing.net/th?id=OIP.VJhVCn_KEP55vMgXH9jepwHaHY&pid=Api&P=0&h=180" alt="" /></a></li>
              <li><a href="#"><img src="https://tse2.mm.bing.net/th?id=OIP.y5-90P4SigvDX33G69psbwHaHa&pid=Api&P=0&h=180" alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
