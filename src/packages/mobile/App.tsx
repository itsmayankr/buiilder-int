import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import {setNavigator} from '../framework/src/Utilities';
import SideMenu from '../components/src/SideMenu';
import HomeScreen from '../components/src/HomeScreen';
import visualanalytics from '../blocks/visualanalytics/src/VisualAnalytics';
import Trending from '../blocks/Trending/src/Trending';
// import AllArticles from '../blocks/AllArticles/src/AllArticles';
import PopularCategory from '../blocks/catalogue/src/PopularCategory';
import MediaHouses from '../blocks/catalogue/src/MediaHouses';
import AddArticlesInPlaylist from '../blocks/Bookmark2/src/AddArticlesInPlaylist';
import InfoPage from '../blocks/info-page/src/InfoPageBlock';
import RecommendationEngine4 from '../blocks/RecommendationEngine4/src/RecommendationEngine4';
import SocialMediaAccountLoginScreen from '../blocks/social-media-account-login/src/SocialMediaAccountLoginScreen';
import CfGoogleAssistant from '../blocks/CfGoogleAssistant/src/CfGoogleAssistant';
import Download from '../blocks/Download/src/Download';
import OTPInputAuth from '../blocks/otp-input-confirmation/src/OTPInputAuth';
import PrivacySettings from '../blocks/PrivacySettings/src/PrivacySettings';
import Payments from '../blocks/Payments/src/Payments';
import InvoiceBilling from '../blocks/InvoiceBilling/src/InvoiceBilling';
import Videos from '../blocks/videos/src/Videos';
import PaymentAdmin2 from '../blocks/PaymentAdmin2/src/PaymentAdmin2';
import MultipleStepRegistrationForm2 from '../blocks/MultipleStepRegistrationForm2/src/MultipleStepRegistrationForm2';
import Pushnotifications from '../blocks/pushnotifications/src/Pushnotifications';
import ForgotPassword from '../blocks/forgot-password/src/ForgotPassword';
import ForgotPasswordOTP from '../blocks/forgot-password/src/ForgotPasswordOTP';
import NewPassword from '../blocks/forgot-password/src/NewPassword';
// import ForgotPasswordEmail from '../blocks/ResetPasswordEmailScreen/src/ForgotPasswordEmail';
// import ForgotPasswordOTP from '../blocks/ResetPasswordOtpScreen/src/ForgotPasswordOTP';
// import NewPassword from '../blocks/ResetPasswordScreen/src/NewPassword';
import Notifications from '../blocks/notifications/src/Notifications';
import Customisableusersubscriptions from '../blocks/customisableusersubscriptions/src/Customisableusersubscriptions';
import SubscriptionDetails from '../blocks/customisableusersubscriptions/src/SubscriptionDetails';
import Filteritems from '../blocks/filteritems/src/Filteritems';
import Filteroptions from '../blocks/filteritems/src/Filteroptions';
import LinkShare from '../blocks/LinkShare/src/LinkShare';
import AdminConsole3 from '../blocks/AdminConsole3/src/AdminConsole3';
import CfApiIntegrationMediaHouse3 from '../blocks/CfApiIntegrationMediaHouse3/src/CfApiIntegrationMediaHouse3';
import UserProfileBasicBlock from '../blocks/user-profile-basic/src/UserProfileBasicBlock';
import ChangePassword from '../blocks/user-profile-basic/src/ChangePassword';
import Library2 from '../blocks/Library2/src/Library2';
import GuestLogin3 from '../blocks/GuestLogin3/src/GuestLogin3';
import CustomAdvertisements from '../blocks/CustomAdvertisements/src/CustomAdvertisements';
import CfTextToSpeech3 from '../blocks/CfTextToSpeech3/src/CfTextToSpeech3';
import Categoriessubcategories from '../blocks/categoriessubcategories/src/Categoriessubcategories';
import ContentManagement from '../blocks/ContentManagement/src/ContentManagement';
import CountryCodeSelector from '../blocks/country-code-selector/src/CountryCodeSelector';
import CountryCodeSelectorTable from '../blocks/country-code-selector/src/CountryCodeSelectorTable';
import CfApiToMicrosoftAzuresVoiceCapability2 from '../blocks/CfApiToMicrosoftAzuresVoiceCapability2/src/CfApiToMicrosoftAzuresVoiceCapability2';
import TermsAndConditions from '../blocks/TermsAndConditions/src/TermsAndConditions';
import SocialMediaAccountRegistrationScreen from '../blocks/social-media-account-registration/src/SocialMediaAccountRegistrationScreen';
import Sorting from '../blocks/sorting/src/Sorting';
import CfApiIntegrationMediaHouse1 from '../blocks/CfApiIntegrationMediaHouse1/src/CfApiIntegrationMediaHouse1';
import Contactus from '../blocks/contactus/src/Contactus';
import AddContactus from '../blocks/contactus/src/AddContactus';
import Surveys from '../blocks/Surveys/src/Surveys';
import Catalogue from '../blocks/catalogue/src/Catalogue';
import LanguageOptions from '../blocks/LanguageOptions/src/LanguageOptions';
import EducationalUserProfile from '../blocks/educational-user-profile/src/EducationalUserProfile';
import HamburgerMenu from '../blocks/HamburgerMenu/src/HamburgerMenu';
import EmailAccountRegistration from '../blocks/email-account-registration/src/EmailAccountRegistration';
import Splashscreen from '../blocks/splashscreen/src/Splashscreen';
import ElasticSearch from '../blocks/ElasticSearch/src/ElasticSearch';
import AdManager from '../blocks/AdManager/src/AdManager';
import EmailAccountLoginBlock from '../blocks/email-account-login/src/EmailAccountLoginBlock';
import LandingPage from '../blocks/landingpage/src/LandingPage';
import LandingPopularMedia from '../blocks/landingpage/src/LandingPopularMedia';
// import MusicPlayer from "../blocks/landingpage/src/MusicPlayer"
import Bookmark2 from '../blocks/Bookmark2/src/Bookmark2';

import Scale from '../components/src/Scale';
import {platform} from 'os';
import {resolve} from 'path';
import {rejects} from 'assert';
import {MenuProvider} from 'react-native-popup-menu';

console.disableYellowBox = true;

const TabNavigator = createBottomTabNavigator(
  {
    LandingPage: {
      screen: LandingPage,
      navigationOptions: {
        title: '',
        header: null,
      },
    },
    Playlists: {
      screen: visualanalytics,
      navigationOptions: {
        title: '',
        header: null,
      },
    },
    Trending: {
      screen: Trending,
      navigationOptions: {
        title: '',
        header: null,
      },
    },
    AllArticles: {
      screen: Catalogue,
      navigationOptions: {
        title: '',
        header: null,
      },
    },
  },
  {
    navigationOptions: ({navigation}: any) => ({
      tabBarIcon: ({tintColor, focused, iconIndex}: any) => {
        const {routeName} = navigation.state;
        if (routeName === 'LandingPage') {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: Platform.OS == 'ios' ? Scale(5) : 0,
              }}>
              <Image
                source={require('./assets/home.png')}
                style={{
                  height: focused ? 25 : 20,
                  width: focused ? 25 : 20,
                  tintColor: focused ? '#fff' : '',
                  top: 5,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: Scale(14),
                  fontWeight: '600',
                  top: 15,
                  color: focused ? '#fff' : 'gray',
                }}>
                Home
              </Text>
            </View>
          );
        } else if (routeName === 'Playlists') {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: Platform.OS == 'ios' ? Scale(5) : 0,
              }}>
              <Image
                source={require('./assets/saved.png')}
                style={{
                  height: focused ? 25 : 20,
                  width: focused ? 25 : 20,
                  tintColor: focused ? '#fff' : '',
                  top: 5,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: Scale(14),
                  fontWeight: '600',
                  top: 15,
                  color: focused ? '#fff' : 'gray',
                }}>
                Playlists
              </Text>
            </View>
          );
        } else if (routeName === 'Trending') {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: Platform.OS == 'ios' ? Scale(5) : 0,
              }}>
              <Image
                source={require('./assets/trending.png')}
                style={{
                  height: focused ? 25 : 20,
                  width: focused ? 25 : 20,
                  tintColor: focused ? '#fff' : '',
                  top: 5,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: Scale(14),
                  fontWeight: '600',
                  top: 15,
                  color: focused ? '#fff' : 'gray',
                }}>
                Trending
              </Text>
            </View>
          );
        } else if (routeName === 'AllArticles') {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: Platform.OS == 'ios' ? Scale(5) : 0,
              }}>
              <Image
                source={require('./assets/allArticles.png')}
                style={{
                  height: focused ? 25 : 20,
                  width: focused ? 25 : 20,
                  tintColor: focused ? '#fff' : '',
                  top: 5,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: Scale(14),
                  fontWeight: '600',
                  top: 15,
                  color: focused ? '#fff' : 'gray',
                }}>
                All Articles
              </Text>
            </View>
          );
        }
      },
      tabBarOptions: {
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: '#fff',
        keyboardHidesTabBar: false,
        style: {
          backgroundColor: '#fff',
          height: Platform.OS === 'ios' ? Scale(70) : Scale(70),
          width: '100%',
          position: 'absolute',
          bottom: 0,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 0.3,
          },
          shadowRadius: 5,
          shadowOpacity: 0.1,
          elevation: Scale(20),
        },
        showLabel: true,
        safeAreaInset: {
          bottom: 'never',
          top: 'never',
        },
        labelStyle: {
          fontSize: Scale(14),
          bottom: 10,
          fontWeight: '600',
        },
      },
    }),
    initialRouteName: 'LandingPage',
  },
);

// const checkDevice = async() =>{
//   let device = await DeviceInfo.getDeviceName();
//   console.log("device",device);
//   return device
// }

const AuthStack = createStackNavigator(
  {
    Splashscreen: {
      screen: Splashscreen,
      navigationOptions: {title: 'Splashscreen', header: null},
    },
    // MusicPlayer : {
    //   screen: MusicPlayer,
    //   navigationOptions : {title : 'MusicPlayer', header: null}
    // },
    EmailAccountLoginBlock: {
      screen: EmailAccountLoginBlock,
      navigationOptions: {title: 'EmailAccountLoginBlock', header: null},
    },
    EmailAccountRegistration: {
      screen: EmailAccountRegistration,
      navigationOptions: {title: 'EmailAccountRegistration', header: null},
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {title: 'ForgotPasswordEmail', header: null},
    },
    ForgotPasswordOTP: {
      screen: ForgotPasswordOTP,
      navigationOptions: {title: 'ForgotPasswordOTP', header: null},
    },
    NewPassword: {
      screen: NewPassword,
      navigationOptions: {title: 'NewPassword', header: null},
    },
  },
  {
    initialRouteName: 'Splashscreen',
  },
);

const MainStack = createStackNavigator(
  {
    LandingPage: {
      screen: TabNavigator,
      navigationOptions: {title: '', header: null},
    },
    LandingPopularMedia: {
      screen: LandingPopularMedia,
      navigationOptions: {title: '', header: null},
    },
    Setting: {
      screen: PrivacySettings,
      navigationOptions: {title: 'PrivacySettings', header: null},
    },
    UserProfile: {
      screen: UserProfileBasicBlock,
      navigationOptions: {title: 'UserProfile', header: null},
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {title: 'UserProfile', header: null},
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {title: 'ForgotPassword', header: null},
    },
    Sorting: {
      screen: Sorting,
      navigationOptions: {title: 'Sorting', header: null},
    },
    Contactus: {
      screen: Contactus,
      navigationOptions: {title: 'Contactus', header: null},
    },
    AddContactus: {
      screen: AddContactus,
      navigationOptions: {title: 'AddContactus', header: null},
    },
    visualanalytics: {
      screen: visualanalytics,
      navigationOptions: {title: 'visualanalytics', header: null},
    },
    // AllArticles: {
    //   screen: AllArticles,
    //   navigationOptions: {title: 'AllArticles', header: null},
    // },
    Catalogue: {
      screen: Catalogue,
      navigationOptions: {title: 'Catalogue', header: null},
    },
    PopularCategory: {
      screen: PopularCategory,
      navigationOptions: {title: 'PopularCategory', header: null},
    },
    MediaHouses: {
      screen: MediaHouses,
      navigationOptions: {title: 'MediaHouses', header: null},
    },
    Pushnotifications: {
      screen: Pushnotifications,
      navigationOptions: {
        title: 'Pushnotifications',
        header: null,
        drawerLockMode: 'locked-closed',
        disableGestures: true,
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {title: 'Notifications', header: null},
    },
    TermsAndConditions: {
      screen: TermsAndConditions,
      navigationOptions: {title: 'TermsAndConditions', header: null},
    },
    AddArticlesInPlaylist: {
      screen: AddArticlesInPlaylist,
      navigationOptions: {title: 'AddArticlesInPlaylist', header: null},
    },
    Bookmark2: {
      screen: Bookmark2,
      navigationOptions: {title: 'Bookmark2', header: null},
    },
    Customisableusersubscriptions: {
      screen: Customisableusersubscriptions,
      navigationOptions: {title: 'Customisableusersubscriptions', header: null},
    },
  },
  {
    initialRouteName: 'LandingPage',
    gesturesEnabled: false,
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    drawer: MainStack,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: (Dimensions.get('window').width * 3) / 4,
    hideStatusBar: true,
    drawerBackgroundColor: '#fff',
    drawerLockMode: 'locked-closed',
    // overlay:0.1,
    // overlayColor: '#fff',
    // contentOptions: {
    //   activeTintColor: 'red',
    //   activeBackgroundColor: '#6b52ae',
    // },
    // useNativeAnimations: true
  },
);

const SwitchStack = createSwitchNavigator(
  {
    AuthStack: {
      screen: AuthStack,
      navigationOptions: {header: null},
    },
    MainStack: {
      screen: DrawerNavigator,
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'AuthStack',
    gesturesEnabled: false,
    
  },
);

if (!HomeScreen.instance) {
  const defaultProps = {
    navigation: null,
    id: 'HomeScreen',
  };
  const homeScreen = new HomeScreen(defaultProps);
}

export function App() {
  return (
    <MenuProvider>
      <SwitchStack
        ref={(navigationRef: any) => {
          setNavigator(navigationRef);
        }}
      />
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    // flex: 1,
    // width: '100%',
  },
  tabContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderTopWidth: scaledSize(2),
    // paddingHorizontal: scaledSize(16),
    // paddingVertical: Scale(17),
    // width: scaledSize(70),
    // backgroundColor: 'cyan',
    // alignSelf: 'center',
    // width: '100%',
  },
  // homeIcons: {
  //   width: scaledSize(28.8),
  //   height: scaledSize(25),
  //   resizeMode: 'contain',
  // },
});
