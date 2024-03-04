
import './ContactForm.css'

function ContactForm () {
    return (
        <div id="Contact--container">
            <div id="Contact--form--container">
                <p>Have any questions? Feel free to contact us!</p>
                <form action="console.log('YEAAA ')" id="Form" method="post">
                    <input type="text" className="Form--smallfield" name="name" placeholder="Full Name"></input>
                    <input type="text" className="Form--smallfield" name="email" placeholder="E-Mail"></input>
                    <input type="text" className="Form--smallfield" name="subject" placeholder="Subject"></input>
                    <input type="text" className="Form--bigfield" name="message" placeholder="Message"></input>
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
                <img></img>
            </div>
        </div>
    );
}

export default ContactForm;