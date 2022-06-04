import {handleSubmit} from '../src/client/js/formHandler';
//syntax is directly from the lecture
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the  url function is have its functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", async() => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        
        expect(handleSubmit).toBeDefined();
    })});