import { ReactNode } from "react";

type FooterLinkProps = {
  children: ReactNode;
};
export default function FooterLink({ children } : FooterLinkProps){
    return(
        <a href="#" className="hover:text-blue-600">{ children }</a> 
    )
}   