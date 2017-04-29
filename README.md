# dtx-base
## About
Base module to simplify IIFE-centric modularization.

## Background
Before _ES2015_ and modularization models like _AMD_ and _CommonJS_ dealing with global scope as well as containing functions into some kind of entity, i.e. modularization, was achieved by use of _Immediately-Invoked Function Expressions_ (_IIFE:s_).

The _dtx-base_ simplifies IIFE-centric modularization and creation of namespaces.

## Description
To instantiate a module simply call the _BaseModule_ constructor with first parameter being _the name of the module_ and the optional second parameter being _an already existing namespace object_.

## Implementation
1. Add the file _dtx-base.js_ as a dependency.
2. Now you are ready to implement.

```javascript
/**
 * EXAMPLE 1: Create simple namespace.
 */
// Create namespace.
(function (self) {
    self.hi = hi;

    function hi() {
        console.info("Hi from example 1!");
    }
})(new BaseModule("SimpleRoot"));

// Namespace is now modularized...
// ...and the exposed hi function is able to implement:
SimpleRoot.hi();
```

```javascript
/**
 * EXAMPLE 2: Create namespace with root and child.
 */
// Create root namespace.
var ParentRoot = new BaseModule("ParentRoot");

// Create child namespace.
(function (self) {
    "use strict";

    self.hi = hi;

    function hi() {
        console.info("Hi from example 2!");
    }
})(new BaseModule("Child", ParentRoot));

// Child namespace is now modularized within the context of the ParentRoot namespace.
// Implement the exposed hi function like this:
ParentRoot.Child.hi();
```

## Author
[DevTactix](https://github.com/DevTactix)
