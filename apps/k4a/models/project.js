sc_require('core');

K4a.Project = SC.Record.extend({
	title: SC.Record.attr(String),
	community: SC.Record.attr(String),
	completionStatus: SC.Record.attr(String)
});