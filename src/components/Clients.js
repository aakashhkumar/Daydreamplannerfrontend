import React from 'react';
import "../../src/App.css"


function Clients() {
  return (
    <section class="clients" id="clients">
         <div class="heading">
        <h1 style={{color: 'black'}}>our previous clients</h1>
        <img src={process.env.PUBLIC_URL + '/images/header-img.png'} alt=""/>
    </div>

    <div class="row">

        <div class="box-container">
            <div class="box">
                <img src="images/ViratANuska.jpg" alt=""/>
                <div class="info">
                    <h3>Virat & Anuskha</h3>
                    <p style={{color: 'whitesmoke'}}> <i class="fas fa-quote-left"></i> 4 years of being married to YOU. You complete me in every way, I’ll always love you with all that I have and more. This day is more special as its our first anniversary as a family and life is complete with this little munchkin.” <i class="fas fa-quote-right"></i> </p>
                </div>
            </div>

        </div>


        <div class="box-container">
            <div class="box">
                <div class="info">
                    <h3>Ranbir & Alia</h3>
                    <p style={{color: 'whitesmoke'}}> <i class="fas fa-quote-left"></i> I'm already married to Ranbir Kapoor in my head. And, I think I've been married to him in my head for a long time (Laughs). But, I think he's not wrong. I think definitely. But, everything happens for a reason. <i class="fas fa-quote-right"></i> </p>
                </div>
                <img src="images/RanbirAlia.jpg" alt=""/>
            </div>
                </div>

    </div>
    </section>
  );
}

export default Clients;
