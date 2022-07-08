import landingPage from './src/landingPage';

const navigator = createStackNavigator(
  {
    Home: landingPage
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "app  ",
    },
  }
);

export default createAppContainer(navigator);
