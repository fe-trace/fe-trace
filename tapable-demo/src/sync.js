const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
} = require("tapable");

const factory = new SyncHook(['city', 'code']);

factory.tap('plugin-1', function(city, code) {
    console.log('plugin-1: ', city, code);
});
factory.tap('plugin-2', function(city, code) {
    console.log('plugin-2: ', city, code);
});
factory.call('cq', '023');

