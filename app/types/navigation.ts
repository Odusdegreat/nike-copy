import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Profile: undefined;
};

export type TabNavigationProp = BottomTabNavigationProp<RootTabParamList>;
