class PaymentProcessor {

    get object() {
        return this._object;
    }

    set object(value) {
        if (typeof value === "object") {
            if (value.types !== undefined && value.precision !== undefined && typeof value.precision === "number") {
                let stringBool = true;
                value.types.forEach((x) => {
                    if (typeof x !== "string") {
                        stringBool = false
                    }
                });
                if (stringBool) {
                    this._object = value;
                    return;
                }
            }

            if (value.types === undefined && typeof value.precision === "number") {
                this._object = {types: ["service", "product", "other"], precision: value.precision};
                return;
            }

            if (value.precision === undefined) {
                let stringBool = true;
                value.types.forEach((x) => {
                    if (typeof x !== "string") {
                        stringBool = false
                    }
                });
                if (stringBool) {
                    this._object = {types: value.types, precision: 2};
                    return;
                }
            }
        }
        this._object = {types: ["service", "product", "other"], precision: 2};
    }

    constructor(input) {
        this.options = [];
        this.payments = [];
        this.setOptions(input);
    }

    registerPayment(id, name, type, value) {
        if (typeof id !== "string" || id.length === 0 || typeof name !== "string" || name.length === 0 || typeof value !== "number"
        || !this.options.types.includes(type)) {
            throw new Error("Invalid Payment");
        } else {
            let containsId = false;
            for (let i = 0; i < this.payments.length; i++) {
                if (this.payments[i].id === id){
                    containsId = true;
                    break;
                }
            }
            if (containsId){
                throw new Error("Invalid Id");
            } else {
                let obj = {id, name, type, value};
                this.payments.push(obj);
            }
        }
    }

    deletePayment(id) {
        let containsId = false;
        let index = -1;
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i].id === id){
                containsId = true;
                index = i;
                break;
            }
        }
        if (containsId){
            this.payments.splice(index,1);
        }else {
            throw new Error("Not found an payment with this ID to delete");
        }
    }

    get(id) {
        let containsId = false;
        let index = -1;
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i].id === id){
                containsId = true;
                index = i;
                break;
            }
        }

        if (containsId){
            let payObj = this.payments[index];

            return `Details about payment ID: ${payObj.id}\n- Name: ${payObj.name}\n- Type: ${payObj.type}\n- Value: ${payObj.value.toFixed(+this.options.precision)}`
        } else {
            throw new Error ("Cant find Payment with this ID")
        }
    }

    setOptions(options) {
        this.object = options;
        this.options = this._object;
    }

    toString() {
        let balanced = 0;
            this.payments.forEach((x) => {
           balanced += x.value ;
        });
        return `Summary:\n- Payments: ${this.payments.length}\n- Balance: ${balanced.toFixed(+this.options.precision)}`
    }
}


// // Initialize processor with default options
// const generalPayments = new PaymentProcessor();
// generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
// generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
// console.log(generalPayments.toString());
//
// // Should throw an error (invalid type)
// //generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);
//
// generalPayments.setOptions({types: ['product', 'material']});
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
//
// // // Should throw an error (ID not found)
// // generalPayments.deletePayment('E027');
// // // Should throw an error (ID not found)
// // generalPayments.get('E027');
//
// generalPayments.deletePayment('E028');
// console.log(generalPayments.toString());
//
// // Initialize processor with custom types
// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());
//
// // Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());
