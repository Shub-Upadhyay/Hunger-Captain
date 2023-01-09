export default function Buttons ({name})
{
    return (
        <button className="buttons" style={{
            borderRadius:'19px',
            width:'5%',
            margin:'1%',
            alignContent:'center'
        }} >{name}</button>
    );
}

