type Prop = {
    imageLink: string
}
export default function IconPayment(props: Prop){
    return(
        <img src={props.imageLink} alt="" className="rounded-xl h-10 w-10" />
    )
}