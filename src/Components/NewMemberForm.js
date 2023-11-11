
export default function MemberForm(props) {
    return (
        <div className="container">
            <form className="fw-bold fs-5">
                <h3 className="fs-1">Add New Member</h3>
                <label className="form-label">Name</label>
                <input className="form-control" type='text' placeholder='Name' onChange={(e) => props.setNewMemberName(e.target.value)} value={props.newMemberName}></input>
                <label className="form-label">Age</label>
                <input className="form-control" type='text' placeholder='Age' onChange={(e) => props.setNewMemberAge(e.target.value)} value={props.newMemberAge}></input>
                <label className="form-label">Weight</label>
                <input className="form-control" type='text' placeholder='Weight' onChange={(e) => props.setNewMemberWeight(e.target.value)} value={props.newMemberWeight}></input>
            </form>
        </div>
    )
}