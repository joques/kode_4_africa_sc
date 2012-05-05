K4a.statechart = SC.Statechart.create({
	
	trace: YES,
	
	rootState: SC.State.design({
		initialSubstate: "readyState",
		
		readyState: SC.State.plugin('K4a.ReadyState'),
		
		showingProjects: SC.State.plugin('K4a.ShowingProjects')
	})
});