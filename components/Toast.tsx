import Toast, { ToastOptions } from 'react-native-root-toast';

function ToastPopUp() {
	function commonDefaults({ ...opts }: ToastOptions): ToastOptions {
		return {
			duration: Toast.durations.LONG,
			hideOnPress: true,
			shadow: false,
			textColor: '#FFFFFF',
			opacity: 1,
			...opts
		};
	}

	function error(message: string) {
		Toast.show(message, commonDefaults({ backgroundColor: '#CC0000' }));
	}

	function warn(message: string) {
		Toast.show(message, commonDefaults({ backgroundColor: '#B3A125' }));
	}

	function success(message: string) {
		Toast.show(message, commonDefaults({ backgroundColor: '#3B4CCA' }));
	}

	function hide(toast: string) {
		Toast.hide(toast);
	}

	return {
		error,
		warn,
		success,
		hide
	};
}

export const toast = ToastPopUp();
