import Image from "next/image";
import Hero from "./_compoents/Hero";
import { Button } from "@/components/ui/button";
import CategorySearch from "./_compoents/CategorySearch";

export default function Home() {
  return (
    <div>
        {/* {Hero Section} */}
        <Hero/>

        {/* SearchBar + Category */}
        <CategorySearch/>
    </div>
  );
}
