const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

// 1. Enable CSS for Expo.
const config = getDefaultConfig(__dirname, {
	isCSSEnabled: true,
	transformer: {
		babelTransformerPath: require.resolve('react-native-svg-transformer')
	}
});

// This is not needed for NativeWind, it is configuration for Metro to understand monorepos
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');
config.watchFolders = [workspaceRoot];
// config.resolver.disableHierarchicalLookup = true;

// 2. Enable NativeWind
const { withNativeWind } = require('nativewind/metro');
module.exports = withNativeWind(config, {
	// 3. Set `input` to your CSS file with the Tailwind at-rules
	input: 'global.css',
	projectRoot
});
