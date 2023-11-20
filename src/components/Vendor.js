import React from 'react';
import "../../src/App.css"

function Vendor() {
  return (
    <section class="vendor" id="vendor">
            <div class="heading">
        <h1 style={{color:'black'}}>Our Features</h1>
        <img src="images/header-img.png" alt="/"/>
    </div>

    <div class="box-container">

        <div class="box">
            <img src="" alt=""/>
            <div class="info">
                <h3>Budget Tracking</h3>
                <p>Easily set and manage your wedding budget.Stay on top of expenses and make  informed financial decisions.</p>
                <a href="#" class="btn">Track Budget</a>
            </div>
        </div>

        <div class="box">
            <img src="images/img2.jpg" alt=""/>
            <div class="info">
                <h3>Vendor Management</h3>
                <p>Find, contact, and organize your wedding vendors in one place. </p>
                <a href="#" class="btn">Manage Vendor</a>
            </div>
        </div>

        <div class="box">
            <img src="images/img3.jpg" alt=""/>
            <div class="info">
                <h3>Gift Registry</h3>
                <p>Simplify the gift-giving process for your loved ones.</p>
                <a href="#" class="btn">Click Here</a>
            </div>
        </div>

        <div class="box">
            <img src="images/img4.jpg" alt=""/>
            <div class="info">
                <h3>Venue </h3>
                <p>Discover and book your dream Destination wedding venue. Find the perfect location that matches your vision and budget.</p>
                <a href="#" class="btn">Click Here</a>
            </div>
        </div>

        <div class="box">
            <img src="images/img5.jpg" alt=""/>
            <div class="info">
                <h3>Design Themes</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolores.</p>
                <a href="#" class="btn">Click Here</a>
            </div>
        </div>

        <div class="box">
            <img src="images/img6.jpg" alt=""/>
            <div class="info">
                <h3>Weather Updates</h3>
                <p> Stay informed about weather conditions for your wedding day. Plan accordingly for outdoor events and make necessary adjustments.</p>
                <a href="Weather_app/index.html" target='blank' class="btn">Click Here</a>
            </div>
        </div>

    </div>
    </section>
  );
}

export default Vendor;
