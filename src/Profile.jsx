export default function Profile({id, teacher, student}) {
    return (
        <div>
            <h2> {id} </h2>
            <h2> {teacher} </h2>
            <ul>
                {student.map(item => {
                    return (
                        <li> {item} </li>
                    )
                })}
            </ul>
        </div>
    )


}