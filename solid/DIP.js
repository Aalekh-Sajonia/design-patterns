// high level modules should not depend on the low level ones use abstractions

class User {
    constructor(name) {
        this.name = name;
    }
}

class MakePayment {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    makePayment(amount) {
        this.paymentProcessor.makePayment(amount);
    }
}

class Paypal {
    makePayment(user,amount) {
        console.log(`${user} make payment of ${amount} using paypal`);
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amount) {
        console.log(`${this.user.name} made payment using stripe of ${amount}`)
    }
}
//using wrappers or abstractions so that low level modules can work independently
class PaypalWrapper {

    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    makePayment(amount) {
        this.paypal.makePayment(this.user.name,amount);
    }
}

class StripeWrapper {
    constructor(user) {
        this.user = user;
        this.stripe = new Stripe(user);
    }

    makePayment(amount) {
        this.stripe.makePayment(amount);
    }
}

const newUserObj = new User('Aalekh');
const stripeWrapperObj = new StripeWrapper(newUserObj);
const makePayment = new MakePayment(stripeWrapperObj);
makePayment.makePayment(200);

const paypalWrapperObj = new PaypalWrapper(newUserObj);
const makePaymentPaypal = new MakePayment(paypalWrapperObj);
makePaymentPaypal.makePayment(500);