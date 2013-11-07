Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('setDataHome', {
    path : '/set-data/home',

    template: 'mainTemplate',

    yieldTemplates: {
      partialContent : {to: 'partialYield'},
    },

    before: function() {
      this.setData({name: 'Foo Fighter'});
    },
  });

  this.route('setDataAway', {
    path : '/set-data/away',

    template: 'mainTemplate',

    yieldTemplates: {
      partialContent : {to: 'partialYield'},
    },

    before: function() {
      this.setData({name: 'Bar Fighter'});
    }
  });

  this.route('dataFunctionHome', {
    path : '/data-function/home',

    template: 'mainTemplate',

    yieldTemplates: {
      partialContent : {to: 'partialYield'},
    },

    data: function() {
      return {
        name : 'Foo Fighter',
      }
    }
  });

  this.route('dataFunctionAway', {
    path : '/data-function/away',

    template: 'mainTemplate',

    yieldTemplates: {
      partialContent : {to: 'partialYield'},
    },

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
  Template.partialContent.rendered = logData;
}
