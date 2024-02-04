export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  MainApp: undefined;
  EmailRegistration: undefined;
  UsernamePasswordRegistration: {email: String};
  BasicInfoRegistration: {
    accessToken: string;
    refreshToken: string;
  };
  PhoneNumberRegistration: undefined;
  ChatScreen: undefined;
  PublicProfile: undefined;
  AccountSettings: undefined;
  ImageRegistration: undefined;
};
