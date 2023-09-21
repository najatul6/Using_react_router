import './Contact.css'
const Contact = () => {
    return (
        <div>
            <h2>Contact US</h2>
            <div className="contact">
                <input type="email" name="email" id="" />
                <input type="text" name="phone" id="" />
                <input type="date" name="data" id="" />
                <input type="color" name="color" id="" />
                <input type="submit" value="submit" />
                <input type="reset" value="reset" />
            </div>
        </div>
    );
};

export default Contact;