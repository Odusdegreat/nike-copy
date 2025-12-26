import { Heart } from "lucide-react-native";
import { Text, View } from "react-native";
import Screen from "../../components/layout/Screen";

export default function FavoritesScreen() {
  return (
    <Screen scroll={false}>
      <View className="flex-1 items-center justify-center px-4">
        <Heart size={64} color="#ccc" />
        <Text className="text-xl font-bold mt-4">No Favorites Yet</Text>
        <Text className="text-gray-600 text-center mt-2">
          Save your favorite items by tapping the heart icon
        </Text>
      </View>
    </Screen>
  );
}
