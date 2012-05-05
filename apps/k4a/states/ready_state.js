K4a.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    K4a.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    K4a.getPath('mainPage.mainPane').remove();
  }

});

