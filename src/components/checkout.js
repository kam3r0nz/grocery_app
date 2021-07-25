import React from 'react'

class Checkout extends React.Component {
    render() {
        return (
            < >
                <form className="checkout-form">
                    <label htmlFor="first-name">First Name: </label><br/>
                    <input type="text" id="first-name" name="first-name" required/><br/>

                    <label htmlFor="last-name">Last Name: </label><br/>
                    <input type="text" id="last-name" name="last-name" required/><br/>

                    <label htmlFor="email">Email: </label><br/>
                    <input type="email" id="email" name="email" required/><br/>

                    <label htmlFor="tel">Phone Number: </label><br/>
                    <input type="tel" id="tel" name="tel" required/><br/>

                    <label htmlFor="address">Address: </label><br/>
                    <input type="text" id="address" name="address" required/><br/>

                    <input type="text" placeholder="Apt #, Suite, Floor (optional)"/><br/>

                    <label for="frmNameCC">Name on Card: </label><br/>
                    <input type="text" name="ccname" id="frmNameCC" required placeholder="Full Name" autocomplete="cc-name"/><br/>

                    <label for="frmCCNum">Card Number: </label><br/>
                    <input type="tel" name="cardnumber" id="frmCCNum" inputmode="numeric" pattern="[0-9\s]{13,19}" maxlength="16" required placeholder="XXXX XXXX XXXX XXXX" autocomplete="cc-number"/><br/>

                    <label for="frmCCCVC">CVC: </label><br/>
                    <input type="tel" name="cvc" id="frmCCCVC" inputmode="numeric" pattern="[0-9\s]" maxlength="3" required autocomplete="cc-csc"/><br/>

                    <label for="frmCCExp">Expiration date: </label><br/>
                    <input name="cc-exp" id="frmCCExp" required placeholder="MM-YYYY" autocomplete="cc-exp"/><br/>
                    <input type="submit"/>
                </form>
            </ >
        )
    }
}

export default Checkout