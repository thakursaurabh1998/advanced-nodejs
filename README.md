# Just Learning some NodeJS concepts

### How to compile C++ node addons?

1. Go to the source directory, here it is `/node-addon/addon-src`.
2. In this directory, run command `node-gyp configure` to configure the build process.
3. Run the command `node-gyp build` to build the addon. You will get a binary file inside `/build/Release/<target_name>.node` (target_name will be the target_name key which you specified in `binding.gyp` file)
