"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const facilities = [
  { id: 1, name: 'City Park Basketball Court', category: 'Basketball', image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=500&q=80' },
  { id: 2, name: 'Riverside Tennis Courts', category: 'Tennis', image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=500&q=80' },
  { id: 3, name: 'Community Center Soccer Field', category: 'Soccer', image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=500&q=80' },
  { id: 4, name: 'Lakeside Volleyball Court', category: 'Volleyball', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&q=80' },
];

export default function FacilityList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFacilities = selectedCategory === 'All'
    ? facilities
    : facilities.filter(facility => facility.category === selectedCategory);

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {['All', 'Basketball', 'Tennis', 'Soccer', 'Volleyball'].map(category => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFacilities.map(facility => (
          <Card key={facility.id} className="overflow-hidden">
            <img src={facility.image} alt={facility.name} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{facility.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge>{facility.category}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}