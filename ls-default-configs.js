'use strict';

var _ = require('ls-lodash'),
    jsHintRcBase = require('./.jshintrc.json');

module.exports = {
    jshintrc: jsHintRcBase,
    jshintrcTestDir: _.merge({}, jsHintRcBase, {
        globals: {
            describe: true,
            it: true
        }
    }),
    jscsrc: require('./.jscs.json')
};
