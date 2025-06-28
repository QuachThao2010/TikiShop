import HeaderMain from ".";
import PromoBanner from "./PromoBanner";

export default function Header(){
    return(
        <>
        <PromoBanner />
        <div className="flex flex-col ">
        
        <HeaderMain />

        </div>
    </>
    )
}