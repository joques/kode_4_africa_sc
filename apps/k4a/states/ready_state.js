K4a.ReadyState = SC.State.design({
	enterState: function() {
		if (SC.instanceOf(K4a.store.dataSource, SC.FixturesDataSource)) {
			console.log("Yes! we are using a fixture");
			K4a.projectsController.set('content', K4a.store.find(SC.Query.local(K4a.Project)));
		} else {
			// don't know yet
		}		
	},
	
	didLoad: function() {
		if (K4a.projectsController.get('status') === SC.Record.READY_CLEAN) {
			this.gotoState('showingProjects');
		}
	}.stateObserves('K4a.projectsController.status'),
	
	exitState: function() {
		// Nothing to worry about
	}
	
});