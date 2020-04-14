new Vue({
    el:'#vue-app', //koji element je kontrosila Vue instancom
    //kojim podacima ce upravljati, data je objekat koji sadrzi svoje polja koja mogu biti razlicita
    data : {
        name :'Srdjan',
        job : 'Programer',
        website : 'https://www.google.ba',
        websiteTag : '<a href="https://www.google.ba">WebisteTag</a>',
        age : 23,
        x:0,
        y:0
    },
    methods:{
        greet : function(time){
            //this.name 
            //this.job
            return 'Good '+time + ' '+ this.name
        },
        addAge : function(inc){
             this.age+=inc;
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
        }
    }

});