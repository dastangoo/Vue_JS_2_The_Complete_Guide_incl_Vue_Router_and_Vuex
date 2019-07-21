new Vue({
	el: '#app',
	data: {
		title: 'Hello World!'
    },
    methods: {
        sayHello: function(){
            //return 'Hello!';
            return this.title;
        }
    }
})
