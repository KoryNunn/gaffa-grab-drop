var Gaffa = require('gaffa'),
    Container = require('gaffa-container'),
    grabetha = require('grabetha'),
    crel = require('crel');

function Droppable(){}
Droppable = Gaffa.createSpec(Droppable, Container);
Droppable.prototype._type = 'droppable';
Droppable.prototype.render = function() {
    Container.prototype.render.call(this);

    var element = this.renderedElement,
        view = this;

    var droppable = grabetha.droppable(element);

    droppable.on('drop', function(event){

        view.triggerActions('drop', {
            data: event.grabbable.currentGrab.data
        }, event);

    });
};

module.exports = Droppable;