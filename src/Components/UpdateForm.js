import Buttons from "./Buttons"

export default function UpdateForm(props) {
    return (
        <div className="container">
            <form className="fw-bold fs-5 mt-2">
                <h3>Update This Member</h3>
                <label className="form-label">Update Name</label>
                <input placeholder="Name" className="form-control" type='text' onChange={(e) => props.setUpdatedName(e.target.value)} value={props.updatedName}></input>

                <label className="form-label">Update Age</label>
                <input placeholder="Age" className="form-control" type='text' onChange={(e) => props.setUpdatedAge(e.target.value)} value={props.updatedAge}></input>

                <label className="form-label">Update Weight</label>
                <input placeholder="Weight" className="form-control" type='text' onChange={(e) => props.setUpdatedWeight(e.target.value)} value={props.updatedWeight}></input>
                <Buttons
                member={props.member}
                deleteUser={props.deleteUser}
                updateUser={props.updateUser}
                />
            </form>
        </div>
    )
}

