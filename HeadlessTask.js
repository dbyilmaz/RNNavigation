import BG from 'react-native-background-geolocation';
import { AppRegistry } from 'react-native';
const BackgroundGeolocationTask = async (event) => {
    switch (event.name) {
        case 'location':
            break;
        case 'schedule':
            break;
        default:
            break;
    }
};
AppRegistry.registerHeadlessTask('BackgroundGeolocation', (event) => BackgroundGeolocationTask(event));
BG.registerHeadlessTask((event) => BackgroundGeolocationTask(event));
