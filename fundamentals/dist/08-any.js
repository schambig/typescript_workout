"use strict";
(() => {
    let myDynamicVar; // using Type Annotation, 'any' could take any value (like JS)
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
    myDynamicVar = 'Hola'; // when using 'any' we don't get help from vscode
    const rta = myDynamicVar.toLowerCase(); // cast using 'as'
    console.log(rta);
    myDynamicVar = 1212;
    const rta2 = myDynamicVar.toFixed(); // cast using '<value>'
    console.log(rta2);
})();
// once casted an 'any' value vscode can give us help
