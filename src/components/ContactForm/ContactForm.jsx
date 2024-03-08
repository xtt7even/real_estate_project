
import './ContactForm.css';
import contactInfoImage from '../../images/contactInfoImage.jpg'; 

import locationIcon from '../../images/address-location-icon.png'
import phoneIcon from '../../images/phone-line-icon.png'
import emailIcon from '../../images/envelope-icon.png'

function ContactForm () {
    return (
        <div id="Contact--container">
            <div id="Contact--form--container">
                <p>Have any questions? Feel free to contact us!</p>
                <form action="console.log('YEAAA ')" id="Form" method="post">
                    <input type="text" className="Form--smallfield" name="name" placeholder="Full Name"></input>
                    <input type="text" className="Form--smallfield" name="email" placeholder="E-Mail"></input>
                    <input type="text" className="Form--smallfield" name="subject" placeholder="Subject"></input>
                    <textarea type="text" className="Form--bigfield" name="message" placeholder="Message" rows="4" cols="50"></textarea>
                    <div id="Form--submitarea">
                        <div id="Chcekbox--area">
                            <input type="checkbox" className="Form--checkbox" name="subscribe" ></input>
                            <span>Subscribe to newsletter</span>
                        </div>
                        <button type="submit" id="Form--send--btn">Send</button>
                    </div>
                </form>
            </div>
            <div id="Contact--info--container">
                <div id='Info--imagecropper'>
                    <img src={contactInfoImage}></img>
                </div>
                
                <div id="Contact--info">
                    <div className='Info--container'>
                        <img className='Info--icon' src={locationIcon}></img>
                        <h4>123 Main Street, City, State, ZIP</h4>
                    </div>

                    <div className='Info--container'>
                        <img className='Info--icon' src={phoneIcon}></img>
                        <h4>(123) 456-7890</h4>
                    </div>
                    
                    <div className='Info--container'>
                        <img className='Info--icon' src={emailIcon}></img>
                        <h4>info@homelty.com</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;