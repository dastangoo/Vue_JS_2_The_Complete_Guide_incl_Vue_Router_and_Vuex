new Vue({
    el: '#app',
    data: {
        title: 'The VueJS Instance'
    },
    beforeCreate: function(){
        console.log('beforeCreate()');
    },
    created: function(){
        console.log('created()');
    },
    beforeMount: function(){
        console.log('beforeMount()');        
    },
    destroy: function(){
        console.log('destroy()');
    }
});
