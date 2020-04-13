new Vue({
    el:'#vue-app', //koji element je kontrosila Vue instancom
    //kojim podacima ce upravljati, data je objekat koji sadrzi svoje polja koja mogu biti razlicita
    data : {
        name :'Srdjan',
        job : 'Programer',
        website : 'https://www.google.ba',
        websiteTag : '<a href="https://www.google.ba">WebisteTag</a>'
    },
    methods:{
        greet : function(time){
            //this.name 
            //this.job
            return 'Good '+time + ' '+ this.name
        }
    }

});