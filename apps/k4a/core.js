// ==========================================================================
// Project:   K4a
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals K4a */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
K4a = SC.Application.create(
  /** @scope K4a.prototype */ {

  NAMESPACE: 'K4a',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
	store: SC.Store.create().from(SC.FixturesDataSource.create({
	    simulateRemoteResponse: YES,
	    latency: 250
	  }))

  
  // TODO: Add global constants or singleton objects needed by your app here.

}) ;
