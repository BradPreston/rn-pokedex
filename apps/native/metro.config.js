const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

// 1. Enable CSS for Expo.
const config = getDefaultConfig(__dirname, {
	isCSSEnabled: true,
	transformer: {
		// ...transformer,
		babelTransformerPath: require.resolve('react-native-svg-transformer'),
		},
		// resolver: {
		// 	// ...resolver,
		// 	disableHierarchicalLookup: true,
		// 	assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
		// 	sourceExts: ['svg'],
		// 	nodeModulesPath: [path.resolve(projectRoot, 'node_modules'), path.resolve(workspaceRoot, 'node_modules')],
		// 	}
});



// This is not needed for NativeWind, it is configuration for Metro to understand monorepos
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');
config.watchFolders = [workspaceRoot];
// config.resolver.disableHierarchicalLookup = true;
// config.resolver.nodeModulesPaths = [
// 	path.resolve(projectRoot, 'node_modules'),
// 	path.resolve(workspaceRoot, 'node_modules')
// ];

// config.
	
// 	config.

// 2. Enable NativeWind
const { withNativeWind } = require('nativewind/metro');
module.exports = withNativeWind(config, {
	// 3. Set `input` to your CSS file with the Tailwind at-rules
	input: 'global.css',
	projectRoot
});
