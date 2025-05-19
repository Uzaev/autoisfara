import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CarComparisonTable } from "./components/CarComparisonTable";
import { CarGallery } from "./components/CarGallery";
import { CarDetails } from "./components/CarDetails";
import { CarSearch } from "./components/CarSearch";

export default function Autoisfara() {
  const [selectedCars, setSelectedCars] = useState([]);

  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Autoisfara - Энциклопедия Авто</h1>
      <Tabs defaultValue="compare">
        <TabsList className="grid grid-cols-4 gap-2 mb-6">
          <TabsTrigger value="compare">Сравнение</TabsTrigger>
          <TabsTrigger value="details">Характеристики</TabsTrigger>
          <TabsTrigger value="gallery">Галерея</TabsTrigger>
          <TabsTrigger value="search">Поиск</TabsTrigger>
        </TabsList>

        <TabsContent value="compare">
          <Card>
            <CardContent className="p-4">
              <CarComparisonTable selectedCars={selectedCars} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details">
          <Card>
            <CardContent className="p-4">
              <CarDetails selectedCars={selectedCars} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery">
          <Card>
            <CardContent className="p-4">
              <CarGallery selectedCars={selectedCars} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="search">
          <Card>
            <CardContent className="p-4">
              <CarSearch setSelectedCars={setSelectedCars} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
