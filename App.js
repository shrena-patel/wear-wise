import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
    return (_jsxs(View, { style: styles.container, children: [_jsx(Text, { children: "Open up App.js to start working on your app!" }), _jsx(StatusBar, { style: "auto" })] }));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
