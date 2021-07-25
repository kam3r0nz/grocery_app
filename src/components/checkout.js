import React from 'react'

class Checkout extends React.Component {
    render() {
        return (
            < >
                <form className="checkout-form">
                    <input type="text"/><br/>
                    <input type="text"/><br/>
                    <input type="text"/><br/>
                    <input type="text"/><br/>
                    <label for="frmNameCC">Name on Card: </label>
                    <input type="text" name="ccname" id="frmNameCC" required placeholder="Full Name" autocomplete="cc-name"/><br/>

                    <label for="frmCCNum">Card Number: </label>
                    <input type="tel" name="cardnumber" id="frmCCNum" inputmode="numeric" pattern="[0-9\s]{13,19}" maxlength="16" required placeholder="XXXX XXXX XXXX XXXX" autocomplete="cc-number"/><br/>

                    <label for="frmCCCVC">CVC: </label>
                    <input type="tel" name="cvc" id="frmCCCVC" inputmode="numeric" pattern="[0-9\s]" maxlength="3" required autocomplete="cc-csc"/><br/>

                    <label for="frmCCExp">Expiration date: </label>
                    <input name="cc-exp" id="frmCCExp" required placeholder="MM-YYYY" autocomplete="cc-exp"/><br/>
                    <input type="submit"/>
                </form>
            </ >
        )
    }
}

export default Checkout