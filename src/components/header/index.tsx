import { useSearch } from "@/context/SearchContext";
import Logo from "./Logo";
import PromoBanner from "./PromoBanner";
import SearchBar from "./SearchBar";
import ServicesBar from "./ServicesBar";
import TopNavLink from "./TopNavLink";
import UtilityIcons from "./UtilityIcons";


export default function HeaderClient() {

  const { searchItem, setSearchItem } = useSearch();
  return (
    <>
    <PromoBanner />
    <div className=" flex justify-center items-center py-1 px-16">
      <Logo />
      <div className="flex-1 ml-4">
        <div className="flex gap-4 py-2">
          <SearchBar searchItem={searchItem} onSearchChange={setSearchItem} />
          <UtilityIcons />
        </div>
        <div>
          <TopNavLink />
        </div>
      </div>
        </div>
        <ServicesBar />
    </>

    )
}


