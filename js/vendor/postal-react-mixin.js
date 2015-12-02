/**
 * Copyright 2015-2016, Ludwig Shcubert.
 * All rights reserved.
 *
 * @providesModule PostalReactMixin
 * @typechecks static-only
 */

'use strict';

import Postal from 'postal'

const PostalReactMixin = {

  _defaultChannel: 'postal-react-mixin',

  /**
  * Exposed methods
  */

  subscribe: function( topic, callback ) {
    this._subscriptions[topic] = Postal.subscribe({
        channel: this.channel || this._defaultChannel,
        topic: topic,
        callback: callback
    }).context(this);
  },

  publish: function( topic, data ) {
    Postal.publish({
      channel: this.channel || this._defaultChannel,
      topic: topic,
      data: data
    });
  },

  /**
   * Lifecycle methods
   */

  componentWillMount: function() {
    if (!this.hasOwnProperty("_subscriptions")) {
        this._subscriptions = {};
    }
  },

  componentWillUnmount: function() {
    this._unsubscribe();
  },

  _unsubscribe: function() {
    for (const topic in this._subscriptions) {
      this._subscriptions[topic].unsubscribe();
    }
    this._subscriptions = {};
  }

};

module.exports = PostalReactMixin;