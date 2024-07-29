import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
    Wifi
  } from "lucide-react"

  import { Badge } from "@/Components/ui/badge"
  import { Button } from "@/Components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/Components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu"
  import { Input } from "@/Components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"
  import { Link, NavLink } from "react-router-dom"
import Nav from "./Nav"

import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"

export default function Header(){

    const [isLoading , SetIsLoading] = useState(false);
    const { user, getToken, logout } = useAuth();
    const token = getToken();
    const navigate = useNavigate();

    async function name() {
        console.log(token);
        SetIsLoading(true);
        try{
            const response = await axios.post(
                'api/logout',
                {},
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            logout();
            navigate('/');
        }catch(error){
            console.log(error);

        }finally{
            SetIsLoading(false)
        }
    }

    return(
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={name} >Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    );
}
