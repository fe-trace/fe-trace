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

const factory = new SyncBailHook(['city', 'code']);

factory.tap('plugin-1', function(city, code, addr) {
    console.log('plugin-1: ', city, code, addr);
    return '1'
});

factory.tap('plugin-2', function(city, code, addr) {
    console.log('plugin-2: ', city, code, addr);
    return '2'
});

const data = factory.call('111', '222', '333');

console.log('data: ', data);
