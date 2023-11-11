

export default function MemberList(props) {
    return (
        <div className="mb-2 mt-4 container">
        {props.member.map((user, index) => (
            <div key={index} className="container">
                <div className="row">
                    <div className="col fs-2 fw-bold">
                        Member #{index}
                    </div>
                </div>
              <div className="row fs-3 fw-bold">
                <div className="col">
                    Name: {user.memberName}
                </div>
                <div className="col">
                    Age: {user.memberAge}
                </div>
                <div className="col">
                    Weight: {user.memberWeight} lbs
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}