var _dec, _dec2, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let Child = (_dec = modifyClass(), _dec2 = limitWrite(), _dec(_class = (_class2 = class Child {
  constructor(name) {
    this.name = name;
  } // @modifyMethod


  getAge() {
    return this.age;
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "getAge", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "getAge"), _class2.prototype)), _class2)) || _class);

function modifyClass() {
  return function (target, key, descriptor) {
    console.log("decorate class");
    target.address = "abc";
    target.prototype.age = 100;
  };
}

function modifyMethod(target, key, descriptor) {
  // return function() {
  const fn = descriptor.value;
  console.log("decorate modifyMethod");

  descriptor.value = function () {
    console.log(`Calling mehtod modifyMethod`);
    return fn.apply(this, arguments);
  }; // return descriptor;
  // }

}

function limitWrite() {
  return function (target, key, descriptor) {
    // const fn = descriptor.value;
    let v = descriptor.initializer && descriptor.initializer.call(this);
    console.log("decorate limitWrite： ", descriptor.initializer); // descriptor.value = function() {
    //     console.log(`Calling mehtod limitWrite`);
    //     return "limit";
    // };

    return {
      enumerable: true,
      configurable: true,
      get: function () {
        return "abc";
      },
      set: function (c) {
        v = c;
      }
    };
  };
}

let c = new Child('tomcat');
let d = c.getAge;
console.log("d: ", d); // 执行方式：./node_modules/.bin/babel decorator.js --out-dir lib && node lib/decorator.js