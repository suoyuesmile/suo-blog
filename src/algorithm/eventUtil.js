var EventUtil = {
    addHandler: function(element, type, handler) {
        if (document.addEventListener) {
            this.addHandler = function(element, type, handler) {
                element.addEvenListener(type, handler, false);
            }
        } else if (document.attachEvent) {
            this.addHandler = function(element, type, handler) {
                element.attachEvent('on' + type, handler);
            }
        } else {
            this.addHandler = function(element, type, handler) {
                element['on' + type] = handler;
            }
        }
        this.adddHandler(element, type, handler);
    }
}