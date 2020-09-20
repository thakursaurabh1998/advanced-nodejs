# Just Learning some NodeJS concepts

### How to compile C++ node addons?

> Sub-Directory : [node-addon](./node-addon)

1. Go to the source directory, here it is `/node-addon/addon-src`.

2. In this directory, run command `node-gyp configure` to configure the build process.

3. Run the command `node-gyp build` to build the addon. You will get a binary file inside `/build/Release/<target_name>.node` (target_name will be the target_name key which you specified in `binding.gyp` file)

### How to use event emitters and `process.nextTick`?

> Sub-Directory : [cli-app-using-events](./cli-app-using-events)

- Event emitters can be helpful in various aspects and can be an alternative to callbacks if you want to process the data in multiple ways. You can create multiple listeners to a single source and perform various tasks whent the event is triggered.

- `process.nextTick` should be used carefully as it can be dangerous and might lead to ambigous results. Another alternative to it can be `setImmediate`.

- `process.nextTick` wait for the callstack to get empty before running the callback function passed to it. This can be helpful at various locations ([example](./cli-app-using-events/server.ts#L9))
