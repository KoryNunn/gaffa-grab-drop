# gaffa-grab-drop

grab and drop views for gaffa

# usage

install:

    npm i gaffa-grab-drop

require:

    var Grabbable = require('gaffa-grab-drop/grabbable');
    var Droppable = require('gaffa-grab-drop/droppable');

register:

    gaffa.registerConstructor(Grabbable);
    gaffa.registerConstructor(Droppable);

use:

    var grabbable = new Grabbable();
    grabbable.data.binding = '[something]';

    var doSomething = new actions.Set();
    doSomething.source.binding = 'data'; // From the grabbable
    doSomething.target.binding = '[newPlace]'; // Where to put dropped data

    var droppable = new Droppable();
    droppable.actions.drop = [doSomething]; // Give action to the droppable to trigger on drop.