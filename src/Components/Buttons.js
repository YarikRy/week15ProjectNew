
export default function Buttons(props){
    return(
        <>
        {props.member.map((user) => {
            return (
                <>
                <button className='btn btn-success btn-lg mt-2' onClick={(e) => props.updateUser(e, user)}>Update</button>
                <button className='btn btn-danger btn-lg mt-2 ms-5' onClick={() => props.deleteUser(user.id)}>Delete</button>
                </>
            )
        })}
        </>
    )
}