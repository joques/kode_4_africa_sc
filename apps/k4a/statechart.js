K4a.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('K4a.ReadyState'),
  showingProjects: SC.State.plugin('K4a.ShowingProjects')
  // someOtherState: SC.State.plugin('K4a.SomeOtherState')

});
