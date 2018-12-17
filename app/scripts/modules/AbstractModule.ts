import uuid from 'uuid/v4';

export default class{
    el:     Element
    uuid:   string
    app:    App

    constructor(el:Element, app:App){
        this.el     = el; // Sets initial reference to the element that generated the module
        this.uuid   = uuid(); // Generates a UUID using UUID v4
        this.app    = app;

        this.el.setAttribute('data-uuid', this.uuid); // Sets modules UUID to be used later when handling modules destruction
    }

    init(){}

    /**
     * Acts as the modules self-destruct method, when called the module will be removed from the page
     * Used when removing a specific module, call is initiated by a module
     */
    seppuku(){
        this.app.deleteModule(this.uuid);
    }

    /**
     * Called by a module, removes attribute and logs out destruction to the console
     * Used when the page transitions, call is initiated by applicaiton
     * You shouldn't call this method, if you need to remove a module use the `seppuku` method
     * @param {boolean} isDebug
     * @param {string} MODULE_NAME
     */
    destroy(isDebug: boolean, MODULE_NAME: string){
        this.el.removeAttribute('data-uuid');
        if(isDebug){
            console.log('%c[module] '+`%cDestroying ${MODULE_NAME} - ${this.uuid}`,'color:#ff6e6e','color:#eee');
        }
    }
}
