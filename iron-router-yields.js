Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('setDataHome', {
    path : '/set-data/home',

    template: 'mainTemplate',

    before: function() {
      this.setData({name: 'Foo Fighter'});
      //this.getData();  // Uncomment to trigger infinite loop.
    },
  });

  this.route('setDataAway', {
    path : '/set-data/away',

    template: 'mainTemplate',

    before: function() {
      var data = this.getData();
      data.name = 'Bar Fighter';
      //this.setData({name: 'Bar Fighter'}); //Uncomment to trigger infinite loop.
    }
  });

  this.route('dataFunctionHome', {
    path : '/data-function/home',

    template: 'mainTemplate',

    data: function() {
      return {
        name : 'Foo Fighter',
      }
    }
  });

  this.route('dataFunctionAway', {
    path : '/data-function/away',

    template: 'mainTemplate',

    data: function() {
      return {
        name : 'Bar Fighter',
      }
    }
  });
});

if (Meteor.isClient) {
  function logData() {
    console.log(this);
  }

  Template.layout.rendered = logData;
}
