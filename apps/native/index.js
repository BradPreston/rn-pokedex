import { registerRootComponent } from 'expo';
import { Provider } from '@repo/query';
import Native from './App';

function App() {
	return (
		<Provider>
			<Native />
		</Provider>
	);
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
