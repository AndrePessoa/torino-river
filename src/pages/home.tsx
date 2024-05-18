import Map from "../components/map";
import { Rules } from "../components/rules";
import { Metrology } from "../components/metrology";

const totalDistance = 7450;

export function Home() {
  return (
    <>
      <Map>{(distance) => <div>{distance * totalDistance}m</div>}</Map>
      <Rules />
      <Metrology />
    </>
  );
}
