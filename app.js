var vue_app = new Vue({
    el:'#vue-app', //koji element je kontrosila Vue instancom
    //kojim podacima ce upravljati, data je objekat koji sadrzi svoje polja koja mogu biti razlicita
    data : {
        name :'Srdjan',
        job : 'Programer',
        website : 'https://www.google.ba',
        websiteTag : '<a href="https://www.google.ba">WebisteTag</a>',
        age : 23,
        x:0,
        y:0,
        a:0,
        b:0,
        available : false, //dynamic css
        nearby : false,    //dynamic css
        error : false, 
        success: false,
        characters : ['Mario','Luigi','Yoshi','Browser'],
        ninjas : [
            {name : 'Ryu',age:25},
            {name : 'Yoshi', age:35},
            {name : 'Ken',age:55},
            { name: {name: 'Srdjan', age :23}, age:50  },
        ],

    },
    methods:{
        greet : function(time){
            //this.name 
            //this.job
            return 'Good '+time + ' '+ this.name
        },
        addAge : function(inc){
            this.age+=inc
        },
        subAge : function(dec){
             this.age-=dec;
        },
        coordinates:function(event){
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        linkClick:function(event){
            alert("You clicked");
        },
        logName :function(event){
            console.log('you entered your name');
        },
        logAge:function(event){
            console.log('you entered your age');
        },
        
    },//methods
    computed:{
        addToA:function(){
            console.log("addToA");
            return this.age + this.a;
        },
        addToB:function(){
            console.log("addToB");
            return this.age+this.b;
        },
        compClasses : function(){
            return {
                available : this.available,
                nearby : this.nearby
                
            }
        }

    },//computed

});

var vue_app_one = new Vue({
    el: '#vue-app-one',
    data:{
        title:'Vue App One',
    }, //data
    methods:{
        greet:function(){
            return "Hello from App one";
        },
        changeTitle:function(){
            this.title = vue_app_two.title;
        }

    },//methods
    computed:{

    },//computed

});
var vue_app_two = new Vue({
    el: '#vue-app-two',
    data:{
        title:'Vue App Two',

    }, //data
    methods:{
        changeTitle:function(){
            this.title = vue_app_one.title;
        }
       
    },//methods
    computed:{
        greet:function(){
            return 'Hello from App Two';
        }

    },//computed
});

vue_app_two.title ="Change outside defenition";