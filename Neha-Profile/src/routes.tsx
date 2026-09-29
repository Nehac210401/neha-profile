import type {RouteObject} from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Accountant from "./pages/Accountant";
import AccountManager from "./pages/AccountManager";
import Administrator from "./pages/Administrator";
import FrontEndDeveloper from "./pages/FrontendDevleoper";
import ProjectManager from "./pages/ProjectManger";


const routes : RouteObject[] = [
    {path: "/",
     element: <App/>,
     children: [
        {index: true, element: <Home/>},
        {path: "accountant", element: <Accountant/>},
        {path: "account-manager", element: <AccountManager/>},
        {path: "administrator", element: <Administrator/>},
        {path: "frontend-developer", element: <FrontEndDeveloper/>},
        {path: "project-manager", element: <ProjectManager/>}
     ],
    },
];
export default routes;