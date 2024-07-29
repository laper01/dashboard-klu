import {
    Bell,
    CircleUser,
    FileUp,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    UserPen,
    Users,
} from "lucide-react";

import { Badge } from "@/Components/ui/badge";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <NavLink
                to="#"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </NavLink>
            <NavLink
                to="#"
                className={({ isActive }) =>
                    isActive
                        ? "text-foreground hover:text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                }
            >
                Dashboard
            </NavLink>
        </>
    );
}
