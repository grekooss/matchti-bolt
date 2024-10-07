"use client"

import { MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function MapButton() {
  const router = useRouter()

  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full p-4"
      onClick={() => router.push('/map')}
    >
      <MapPin className="mr-2 h-4 w-4" /> View Map
    </Button>
  );
}