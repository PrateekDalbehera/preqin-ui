import { Routes, Route } from "react-router-dom";

import { AppShell } from "@core/layout";
import { PageNotFound } from "@core/error";
import { Home } from "@features/home";
import { PreqinInsights } from "@features/insights";
import { Commitments, Investors } from "@features/investors";
import { PreqinPro } from "@features/preqin-pro";

const AppRoutes = () => {
    const routes = [
        { id: 1, path: '/investors', component: Investors },
        { id: 2, path: '/investor/commitment/:id', component: Commitments },
        { id: 3, path: '/preqin-pro', component: PreqinPro },
        { id: 4, path: '/insights', component: PreqinInsights }
    ];

    return (
        <Routes>
            <Route key="appshell" path="/" element={<AppShell/>}>
                {/* Default route */}
                <Route key="home" index element={<Home />} />
                {
                    routes.map(
                        ({ id, path, component: Component }) => (
                            <Route key={id} path={path} element={<Component />}/>
                        ))
                }
            </Route>

            <Route key="pagenotfound" path="*" element={<PageNotFound/>} />
        </Routes>
    );
};

export default AppRoutes;