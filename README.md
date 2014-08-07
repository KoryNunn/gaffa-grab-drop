# gaffa-grab-drop

grab and drop view for gaffa

# usage

install:

    npm i gaffa-grab-drop

require:

    var GrabDrop = require('gaffa-grab-drop');

register:

    gaffa.registerConstructor(GrabDrop);

use:

    var grabDrop1 = new Grabbable();
    grabDrop1.grabbable.value = true;
    grabDrop1.data.binding = '[something]';

    var doSomething = new actions.Set();
    doSomething.source.binding = 'data'; // From the grabbable
    doSomething.target.binding = '[newPlace]'; // Where to put dropped data

    var grabDrop2 = new Droppable();
    grabDrop2.actions.drop = [doSomething]; // Give action to the view to trigger on drop.