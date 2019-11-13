import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../pages/Main/index';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Main,
    },
});

export default createAppContainer(AppNavigator);
