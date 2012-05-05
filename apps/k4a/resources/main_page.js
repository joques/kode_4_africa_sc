// ==========================================================================
// Project:   K4a - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals K4a */


K4a.mainPage = SC.Page.design({
	
	mainPane: SC.MainPane.design({
		childViews: ' header project_pane footer'.w(),

		defaultResponder: 'K4a.statechart',

		header: SC.ToolbarView.design({
			layout: {
				centerX: 0,
				width: 900,
				top: 0,
				height: 38
			},

			childViews: 'login_button'.w(),

			login_button: SC.ButtonView.design(SC.AutoResize, {
				layout: {
					centerY: 0,
					height: 30,
					right: 10,
					zIndex: 100
				},

				title: 'Log In',
				action: 'login'
			})
		}),
		
		project_pane: SC.View.design({
			layout: {
				centerX: 0,
				centerY: 0,
				width: 900,
				top: 38,
				bottom: 38
			},
			
			childViews: 'project_list submit_button'.w(),
			
			project_list: SC.ScrollView.design({
				layout: {
					centerX: 0,
					width: 900,
					top: 10,
					bottom: 45
				},
				
				contentView: SC.ListView.design({
					contentBinding: SC.Binding.oneWay('K4a.projectsController.content'),
					rowHeight: 35,
					exampleView: SC.LabelView.design({
						valueBinding: '.content.title'
					})
				})
			}),
			
			submit_button: SC.ButtonView.design({
				layout: {
					// centerY: 0,
					height: 40,
					width: 120,
					right: 10,
					bottom: 5,
					zIndex: 100
				},
				title: 'Submit Project',
				action: 'submit_project'
			})
		}),
		
		footer: SC.ToolbarView.design({
			layout: {
				centerX: 0,
				width: 900,
				bottom: 0,
				height: 38
			},
			
			childViews: 'klab'.w(),
			
			klab: SC.LabelView.design({
				layout: {
					centerX: 0,
					centerY: 10,
					height: 30,
					width: 100,
				},
				
				value: 'Kode 4 Gauteng'
			})
		})
	})
	
});