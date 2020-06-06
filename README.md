# fest.js
## A simple proof-of-concept testing framework in JavaScript

### Stack:
This framework is built with vanilla JavaScript and bundled with Parcel/Babel.

### To do:
  
- Test truthy  
  - [x] toBeOK()
  - [x] toNotBeOK()

- Test equality with ===
  - [x] toBe()
  - [x] toNotBe()
  
- Test loose equality ==
  - [x] toBeEqual()
  - [x] toNotBeEqual()

- Test typeof and instanceof (accepts string types and objects to use istanceof)
  - [x] toBeType()
  - [x] toNotBeType()

- Test string with regex match
  - [x] toMatch()

- Test indexOf of an array or string
  - [x] toContain()

- Test length of a array
  - [x] toHaveLength()

- Test emptyness of an array
  - [x] toBeEmpty()

- Test if an object have a property
  - [x] toHaveProperty()

- Test if an object have some keys
  - [ ] toHaveKeys(arrayOfKeys)
  - [ ] toOnlyHaveKeys()
  - [ ] toNotHaveKeys()
  - [ ] toNotOnlyKeys()

- Test if a function throw a error when executed
  - [ ] toThrow()

- Test if the number value if greater or less than other value
  - [x] toBeGreaterThan()
  - [x] toBeLessThan()
