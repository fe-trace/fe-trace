@modifyClass()
class Child {
    constructor(name) {
        this.name = name;
    }

    // @modifyMethod
    @limitWrite()
    getAge() {
        return this.age;
    }
}

function modifyClass() {
    return function(target, key, descriptor) {
        console.log("decorate class");
        target.address = "abc";
        target.prototype.age = 100;
    }
}

function modifyMethod(target, key, descriptor) {
    // return function() {
        const fn = descriptor.value;

        console.log("decorate modifyMethod");
        descriptor.value = function() {
            console.log(`Calling mehtod modifyMethod`);
            return fn.apply(this, arguments);
        };
        // return descriptor;
    // }
}

function limitWrite() {
    return function(target, key, descriptor) {
        // const fn = descriptor.value;
        let v = descriptor.initializer && descriptor.initializer.call(this);

        // descriptor.value = function() {
        //     console.log(`Calling mehtod limitWrite`);
        //     return "limit";
        // };
        return {
            enumerable: true,
            configurable: true,
            get: function() {
                return "abc";
            },
            set: function(c) {
                v = c;
            }
        };
    }
}

let c = new Child('tomcat');
let d = c.getAge;
// d: abc

console.log("d: ", d);

// 执行方式：./node_modules/.bin/babel decorator.js --out-dir lib && node lib/decorator.js 