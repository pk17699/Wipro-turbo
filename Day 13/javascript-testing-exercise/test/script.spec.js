const app = require('../script');
const assert = require('chai').assert;
const expect = require('chai').expect;

// Here you need to write the test cases using assert
describe('General Test Cases', () => {
    //This test case should call sayhello() function and check and check the expected string
    it('Should return hello', () => {
        let res1 = app.sayHello("prashant");
        assert.equal(res1, "Hello prashant");
    });
    //This test case should class factorial function and check the expected result (factorial of a number)
    it('Should return factorial of a number', () => {
        let res2 = app.Factorial(5);
        assert.equal(res2, 120);
    });
    //This test case should call factorial() funtion and check the type of returned value to be a number
    it('Factorial() Should return number', () => {
        let res3 = app.Factorial(5);
        assert.typeOf(res3, 'number');
    });
});

// Here you need to write the test cases using expect
describe('New Test Suite', () => {
    // This test case should call getPerson() function and check the age property in person object
    it('Person should have age property', () => {
        let res4 = app.getPerson();
        expect(res4).to.have.property('age');
    });

    // This test case should call GetUsers() function and check the name property in person object
    it('User should have name property', (done) => {
        app.GetUsers().then((users) => {
            expect(users).to.have.property("name");
        })
    });
});
