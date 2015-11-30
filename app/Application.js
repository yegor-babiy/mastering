Ext.define('Packt.Application', {
    name: 'Packt',

    extend: 'Ext.app.Application',

    //autoCreateViewport: true,

    requires: [
        'Packt.util.MD5',
    ],

    views: [
        
    ],

    controllers: [
        'Login'
    ],

    stores: [
        // TODO: add stores here
    ],

    splashscreen: {},

    init: function  () {
        /*
        // Start the mask on the body and get a reference to the mask
        splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
        
        // Add a new class to this mask as we want it to look different from the default.
        splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
        */
    },

    launch: function() {
        Ext.tip.QuickTipManager.init();

/*
        var task = new Ext.util.DelayedTask(function() {
            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        Ext.widget('login');
                    }
                }
            });
        });

        task.delay(2000);
*/   Ext.widget('login'); 
    }
});
