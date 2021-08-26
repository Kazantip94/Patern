 interface Component {
    operation(): string;
}

class Delivery implements Component {
    public operation(): string {
        return 'DeliveryComponent';
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class Product1 extends Decorator {

    public operation(): string {
        return `Product1Component(${super.operation()})`;
    }
}

class Product2 extends Decorator {
    public operation(): string {
        return `Product2Component(${super.operation()})`;
    }
}

function clientCode(component: Component) {

    console.log(`RESULT: ${component.operation()}`);
   
}

const simple = new Delivery();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const decorator1 = new Product1(simple);
const decorator2 = new Product2(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);