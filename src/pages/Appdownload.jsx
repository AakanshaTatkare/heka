import React from 'react'
import '../components/navbar/Navbar.css';

const Download = () => {
    return (
        <>
            <div className="downloadcard" >
                {/* Card content 6 */}
                <figcaption>QR Code to download <br />Heka Healthy You App</figcaption>
                <img
                    src="https://hekahealthyyou.com/assets/image/barcode.png"
                    alt="Card 1"
                    style={{ width: '50mm', height: '50mm' }}
                />
            </div>
            <hr />
   
      <footer>
  <div class="footer-container">
    <div class="list-container">
      <h3>Heading 1</h3>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
    
    <div class="list-container">
      <h3>Heading 2</h3>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
    
    <div class="list-container">
      <h3>Heading 3</h3>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
    
    <div class="list-container">
      <h3>Heading 4</h3>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
    
    <div class="list-container">
      <h3>Heading 5</h3>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
  </div>
</footer>

        </>
    )
}

export default Download;
