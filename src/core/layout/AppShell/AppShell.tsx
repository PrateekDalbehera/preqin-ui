import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppOutlet from "./AppOutlet";

const AppShell = () => {
    return (
        <>
            <AppHeader/>
            <AppOutlet/>
            <AppFooter/>
        </>
    );
};

export default AppShell;