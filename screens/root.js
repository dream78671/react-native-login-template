import Home from "./Home";
import LoginScreen from "./LoginScreen";
import MainPage from "./MainPage";
import RegisterScreen from "./RegisterScreen";

function Root() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainPage} />

      </Drawer.Navigator>
    );
  }