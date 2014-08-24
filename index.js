var Gaffa = require('gaffa'),
    Container = require('gaffa-container'),
    grabetha = require('grabetha'),
    crel = require('crel');

function GrabDrop(){}
GrabDrop = Gaffa.createSpec(GrabDrop, Container);
GrabDrop.prototype._type = 'grabdrop';
GrabDrop.prototype.render = function() {
    Container.prototype.render.call(this);

    var element = this.renderedElement,
        view = this;

    var grabbable = grabetha.grabbable(element);

    grabbable.on('grab', function(grab){
        if(!view.grabbable.value){
            return;
        }
        grab.data = view.data.value;
        this.ghost = this.createGhost();
    })
    .on('drop', function(position){
        if(!this.ghost){
            return;
        }
        this.ghost.destroy();
        this.ghost = null;
    });

    var droppable = grabetha.droppable(element);

    droppable.on('drop', function(event){
        if(!(event.grabbable.currentGrab && event.grabbable.currentGrab.data)){
            return;
        }

        view.triggerActions('drop', {
            data: event.grabbable.currentGrab && event.grabbable.currentGrab.data
        }, event);

    }).on('hover', function(event){
        if(!(event.grabbable.currentGrab && event.grabbable.currentGrab.data)){
            return;
        }

        view.triggerActions('hover', {
            data: event.grabbable.currentGrab && event.grabbable.currentGrab.data
        }, event);

    });
};
GrabDrop.prototype.grabbable = new Gaffa.Property();
GrabDrop.prototype.data = new Gaffa.Property();

module.exports = GrabDrop;