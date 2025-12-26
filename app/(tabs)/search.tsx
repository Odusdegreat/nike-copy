import { Search as SearchIcon } from "lucide-react-native";
import { Text, TextInput, View } from "react-native";
import Screen from "../../components/layout/Screen";

export default function SearchScreen() {
  return (
    <Screen>
      <View className="px-4 pt-12">
        <Text className="text-2xl font-bold mb-6">Search</Text>

        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
          <SearchIcon size={20} color="#999" />
          <TextInput
            placeholder="Search for products..."
            className="flex-1 ml-3 text-base"
            placeholderTextColor="#999"
          />
        </View>
      </View>
    </Screen>
  );
}
