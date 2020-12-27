import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SignupRoute from '../routes/signupRoute';
import LoginRoute from '../routes/loginRoute';
import PasswordRoute from '../routes/passwordRoute';

const screens = createDrawerNavigator({

  signup: {
    screen: SignupRoute,
  },
  Login: {
    screen: LoginRoute,
  },
  'Forgot Password?': {
    screen: PasswordRoute,
  },

});
export default createAppContainer(screens);
