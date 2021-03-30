import React, {Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {
    state = {
        cust_name: '',
        cust_email: '',
        cust_phone: '',
        message: ''
    }

    handleName = (e) => {
        this.setState({
            cust_name: e.currentTarget.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            cust_email: e.currentTarget.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            cust_phone: e.currentTarget.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.currentTarget.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {cust_email, cust_name, cust_phone, message} = this.state;
        const emailToSend = {
            cust_email,
            cust_name,
            cust_phone,
            message
        }

        emailjs.send('TailsOfTheTown', 'template_HXUJMT8p',
                         emailToSend, 'user_fspuszkuYu1bFDmfJ5V9B')
                         .then((result) => {
                             if(result.status) {
                                 alert('Message has been sent!')
                             }
                         }, (error) => {
                             console.log(error)
                             alert('An error occured')
                         })

    }

    render() {
        const {cust_email, cust_name, cust_phone, message} = this.state;
        return (
            <section className="contact">
                <div className="pagetitle">
                    <h1>Contact Us</h1>
                </div>

                <div className="info">
                    <p>Phone: (330) 831-9545</p>
                    <p>Email: TailsOfTheTown@gmail.com</p>
                </div>

                <form className="contactForm">
                    <label htmlFor="name">Name
                        <input type="text" name="name" required onChange={this.handleName} />
                    </label>
                    <label htmlFor="email">Email
                        <input type="email" name="email" required onChange={this.handleEmail} />
                    </label>
                    <label htmlFor="phone">Phone
                        <input type="tel" name="phone" required onChange={this.handlePhone} />
                    </label>

                    <textarea onChange={this.handleMessage} placeholder="Your message here" rows="10"/>

                    <button onClick={this.handleSubmit} type="submit" disabled={!cust_email && !cust_name && !cust_phone && !message}>Send Message</button>
                </form>
            </section>
        )
    }
}

export default Contact;