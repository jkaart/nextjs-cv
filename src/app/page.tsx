import { data } from "@/data/data";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main>
      <Hero data={data} />
    </main>
  );
}

export default Home
