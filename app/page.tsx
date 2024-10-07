import FacilityList from '@/components/FacilityList';
import MapButton from '@/components/MapButton';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book Free Sports Facilities</h1>
      <FacilityList />
      <MapButton />
    </div>
  );
}