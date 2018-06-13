const obj1 = {
    sayHi: () => console.log('Hi!')
}

const obj2 = {
    showNumber: () => console.log(parseFloat(Math.random() * 100))
}

const obj3 = {
    showRandomSymbol: () => console.log(String.fromCharCode(parseFloat(Math.random() * 100)))
}

function makeChain(...args) {
    return args.reduce((prev, cur) => {
        const propertiesDescr = {};

        for (const key in cur) {
            if (cur.hasOwnProperty(key)) {
                propertiesDescr[key] = Object.getOwnPropertyDescriptor(cur, key);
            }
        }

        return Object.create(prev, propertiesDescr);
    }, null);
}

const bigFatObject = makeChain(obj1, obj2, obj3);

console.log('​bigFatObject', bigFatObject);
bigFatObject.sayHi();
bigFatObject.showNumber();
bigFatObject.showRandomSymbol();
