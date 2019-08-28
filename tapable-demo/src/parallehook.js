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

const factory = new AsyncParallelHook(['city', 'code']);

factory.tapPromise('plugin-1', function(city, code, addr) {
    console.log("pllugin-1: ", city, code, addr);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('plugin-1-data');
        }, 1000);
    });
});

factory.tapPromise('plugin-2', function(city, code, addr) {
    return new Promise(function(resolve, reject) {
        console.log("pllugin-2: ", city, code, addr);
        setTimeout(function() {
            resolve('plugin-2-data');
        }, 1000);
    });
});

const data = factory.promise('111', 'abc');

data.then((data) => {
    console.log('result: ', data);
});

console.log('data: ', data);
