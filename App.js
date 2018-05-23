import React from "react";
import HomeScreen from "./components/Home/Home";
import ModalScreen from "./components/Modal/Modal";
import KontrolleScreen from "./components/Kontrolle/Kontrolle";
import ScanScreen from "./components/Scanner/Qr";
import SucheScreen from "./components/Search/Search";
import InspectionScreen from "./components/Inspection/Inspection";
import EndInspectionScreen from "./components/EndInspection/EndInspection";
import ThanksScreen from "./components/Thanks/Thanks";
import { StackNavigator } from "react-navigation";

const MainStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Kontrolle: {
        screen: KontrolleScreen
    },
    Scan: {
        screen: ScanScreen
    },
    Suche: {
        screen: SucheScreen
    },
    Inspection: {
        screen: InspectionScreen
    },
    EndInspection: {
        screen: EndInspectionScreen
    },
    Thanks: {
        screen: ThanksScreen
    }
}, {
    initialRouteName: "Home",
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#1ebccf"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold",
            color: "#ffffff",
            fontSize: 30
        }
    }
});

const RootStack = StackNavigator({
    Main: {
        screen: MainStack
    },
    MyModal: {
        screen: ModalScreen
    }
}, {
    mode: "modal",
    headerMode: "none"
});

export default class App extends React.Component {
    render() {
        return <RootStack / > ;
    }
}