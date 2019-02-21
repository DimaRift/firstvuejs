let lifeCycleMixin = require('../base/lifeCycleMixin');

module.exports = {

    template:  `<div>
                    <slot></slot>
                    <p>
                        <button class="btn btn-primary btn-lg" v-on:click="sayHello">Say hello</button>

                        <button class="btn btn-primary btn-lg" v-on:click="displayHelloCounter = false;" v-if="displayHelloCounter">Hide hello counter</button>

                        <button class="btn btn-primary btn-lg" v-on:click="displayHelloCounter = true;" v-else>Display hello counter</button>
                    </p>
            
                    <p v-if="displayHelloCounter">
                        You said "hello" {{ helloCounter }} time(s) !
                    </p>
                </div>`,
    
    data: function() {
        
        return {
            name: 'counterComponent',
            helloCounter: 0,
            displayHelloCounter: true
        }
    },
    
    mixins: [lifeCycleMixin],
    
    methods: {
        
        sayHello: function() {
            
            this.helloCounter++; 
        },
    }
};