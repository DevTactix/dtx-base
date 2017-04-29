function BaseModule(name, container) {
    "use strict";

    var self = this;
    self.alive = alive;
    self.ModuleName = (isNamespace(container) ? container.ModuleName + "." + name : name);

    if (isNamespace(container)) {
        container[name] = self;
    } else {
        window[name] = self;
    }

    self.alive();

    function alive() {
        console.info(self.ModuleName + " is alive!");
    }

    function isNamespace(container) {
        return container && container.ModuleName;
    }
}
