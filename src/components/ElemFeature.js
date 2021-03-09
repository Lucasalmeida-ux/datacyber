import Link from 'next/link'

export default function Elem(props) {

    const Button = function() {
        if(props.link) {
            return <Link href={props.link}><a className="text-sm text-gray-100 p-2 uppercase rounded-md bg-blue-400 hover:bg-blue-500">Confira</a></Link>
        } 
        return <></>
    }

    return(
    <div className="mb-8">
        {props.icons}
        <h1 className="text-md uppercase font-black pt-2">{props.title}</h1>
        <p className="text-sm text-gray-600 mb-2 p-2">{props.desc}</p>
        <Button />
    </div>
    )
}