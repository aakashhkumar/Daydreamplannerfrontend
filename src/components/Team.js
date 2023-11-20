import React from 'react';
import "../../src/App.css"

function Team() {
  return (
    <section class="team" id="team">

    <div class="heading">
        <h1 style={{color: 'black'}}>our creative team</h1>
        <img src={process.env.PUBLIC_URL + '/images/header-img.png'} alt="" />
    </div>

    <div class="box-container mx-4" >

        <div class="box col-sm-12 col-md-3" >
            <img src="https://media.licdn.com/dms/image/D4D03AQGtiyC_I-1CWg/profile-displayphoto-shrink_400_400/0/1677517615382?e=1706140800&v=beta&t=GXtSt4hiwwzv9xuv_JYXIpB_RaeLfuWHLsdH5DRnGec" alt=""/>
            <h3>Vaishnavi Kumari</h3>
            <span>wedding planner</span>
            <p>Our journey as wedding planners has been defined by creativity, attention to detail, and a deep understanding of our clients' desires.</p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>
        <div class="box"  >
            <img src="https://media.licdn.com/dms/image/C4E03AQFK6pu3vpgwbA/profile-displayphoto-shrink_400_400/0/1610365374789?e=1706140800&v=beta&t=xDkQr7ivOUL2DWC2jzC-4FgwCBWgqzm79e6YMySQHZk" alt=""/>
            <h3>Akash Kumar</h3>
            <span>wedding planner</span>
            <p>we believe that your special day deserves to be a reflection of your love story, your dreams, and your unique personalities.  </p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>
        <div class="box"  >
        <img src={process.env.PUBLIC_URL + '/images/adarsh.jpeg'} alt="" />

            <h3>Adarsh Kanungo</h3>
            <span>wedding theme planner</span>
            <p>As a passionate wedding theme planner, I believe that every love story is one of a kind, and your wedding should be, too. </p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box"  >
            <img src="https://media.licdn.com/dms/image/D4D03AQHJVZ3GPbAoxg/profile-displayphoto-shrink_400_400/0/1683911045738?e=1706140800&v=beta&t=ae46JD5150iCWTso8zl75p0agkdLIYyiI6nU5KDCc5o" alt=""/>
            <h3>Shorya Shokanda</h3>
            <span>wedding theme planner</span>
            <p>we breathe life into your vision by crafting carefully curated themes that encapsulate your personalities and love story. </p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box"  >
            <img src="https://media.licdn.com/dms/image/D4D03AQFtMjpJpipbiw/profile-displayphoto-shrink_800_800/0/1675848734820?e=1706140800&v=beta&t=FvzseSsNFXF7Jcz0_aqkZVNwUfe74uCWQhhzWFwyDF0" alt=""/>
            <h3>Riddhi Pandey</h3>
            <span>wedding planner</span>
            <p> I believe that your wedding day should be a reflection of your unique love story, filled with moments that will be cherished for a lifetime.</p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

    </div>

</section>

  );
}

export default Team;
