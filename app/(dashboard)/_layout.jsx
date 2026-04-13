import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { colors } from "../../constants/colors"
import { Ionicons } from "@expo/vector-icons"
import UserOnly from "../../components/auth/UserOnly"

const DashboardLayout = () => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light'];
  return (
    <UserOnly>
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: theme.background,
            marginBottom: 10,
            position: 'absolute',
        },
        tabBarActiveTintColor: theme.text,
    }}
    >
        <Tabs.Screen name="create" 
        options={{ title: 'Create', tabBarIcon: () => (<Ionicons name="add" color={theme.text} size={24} />) }} />
        <Tabs.Screen name="books" 
        options={{ title: 'Books', tabBarIcon: ({focused}) => (<Ionicons name={focused ? "book" : "book-outline"} color={theme.text} size={24} />) }} />
        <Tabs.Screen name="profile"
        options={{ title: 'Profile', tabBarIcon: ({focused}) => (<Ionicons name={focused ? "person" : "person-outline"} color={theme.text} size={24} />) }} />
    </Tabs>
    </UserOnly>
  )
}
export default DashboardLayout
