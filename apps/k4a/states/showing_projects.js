K4a.ShowingProjects = SC.State.extend({ 
  
  enterState: function() {
	console.log("Now in Showing project state");
		K4a.mainPage.get('mainPane').append();
	},
	
	login: function() {
		console.log("Just having fun for now");
	},
	
	submit_project: function() {
		console.log("Just trying to be a good citizen here...");
	},

  exitState: function() {}

});
