import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Progress } from "@/Components/ui/progress";
import { User, BarChart2, MapPin } from "lucide-react";
import AllCivilian from "./chart/AllCivilian";
import NavChart from "./NavChart";
import MainChart from "./MainChart";

const Main: React.FC = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-12  gap-6 mb-8">
                <Card className="col-span-12 lg:col-span-3 bg-white shadow-lg h-25">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                        <User size={24} className="text-blue-500" />
                        <div>
                            <CardTitle className="text-xl font-semibold">
                                Hi admin
                            </CardTitle>
                            <p className="text-sm text-gray-500">
                                Selamat datang dashboard interaktif dinas sosial
                            </p>
                        </div>
                    </CardHeader>
                </Card>

                <Card className="col-span-12 lg:col-span-6 bg-white shadow-lg h-25">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold flex items-center">
                            <BarChart2
                                size={20}
                                className="mr-2 text-green-500"
                            />
                            <div className="w-64">
                            Kategori Pendataan
                            </div>

                            <div className="w-full">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="category1">
                                            Category 1
                                        </SelectItem>
                                        <SelectItem value="category2">
                                            Category 2
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className="col-span-12 lg:col-span-3 h-25 shadow-lg">
                    <AllCivilian />
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                    <Card key={i} className="bg-white shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold flex items-center">
                                <MapPin
                                    size={20}
                                    className="mr-2 text-purple-500"
                                />
                                Kecamatan
                                <div className="px-8 w-full">
                                    <Select>
                                        <SelectTrigger className="w-full mt-2">
                                            <SelectValue placeholder="Select kecamatan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="kecamatan1">
                                                Kecamatan 1
                                            </SelectItem>
                                            <SelectItem value="kecamatan2">
                                                Kecamatan 2
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mt-2" >
                                    <NavChart />
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* <div className="w-72 h-72 bg-gray-200 rounded-full mx-auto"></div> */}
                            <MainChart/>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Main;
