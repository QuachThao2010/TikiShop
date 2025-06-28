type Props = {
    imageLink: string,
    title: string
}

export default function ButtonNavLink(props: Props){
    return(
    <button type="button" className="flex items-center gap-1 px-3">
        <img src={props.imageLink} className="w-6 h-6" alt="" />
        <span>{props.title}</span>
    </button> 
    )
}