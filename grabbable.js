var Gaffa = require('gaffa'),
    Container = require('gaffa-container'),
    grabetha = require('grabetha'),
    crel = require('crel');

function Grabbable(){}
Grabbable = Gaffa.createSpec(Grabbable, Container);
Grabbable.prototype._type = 'grabbable';
Grabbable.prototype.render = function() {
    Container.prototype.render.call(this);

    var element = this.renderedElement,
        view = this;

    var grabbable = grabetha.grabbable(element);

    grabbable.on('grab', function(grab){

        this.ghost = this.createGhost();

        grab.on('move', function(){
            this.data = view.data.value;
        });

    })
    .on('drop', function(position){
        this.ghost.destroy();
        this.ghost = null;
    });
};
Grabbable.prototype.data = new Gaffa.Property();

module.exports = Grabbable;