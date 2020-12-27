/* eslint-disable quotes */
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import ProfileRoute from '../routes/profileRoute';
import CouponRoute from '../routes/couponRoute';
import ButtonRoute from '../routes/buttonRoute';
import InfoRoute1 from '../routes/infoRoute1';
import InfoRoute2 from '../routes/infoRoute2';

const screens = createDrawerNavigator({

  Home: {
    screen: ProfileRoute,
  },
  Buttons: {
    screen: ButtonRoute,
  },

  Coupons: {
    screen: CouponRoute,
  },
  " ": {
    screen: InfoRoute1,
  },
  "  ": {
    screen: InfoRoute2,
  },
});

export default createAppContainer(screens);
