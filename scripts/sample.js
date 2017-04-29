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
