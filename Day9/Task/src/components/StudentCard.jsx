
const StudentCard = ({ student }) => {
    return (
        <>
            <div>
                <h1>Task 1</h1>
                <div className="bg-amber-400 p-10 w-70 m-2">
                    <p>Name : {student.name}</p>
                    <p>Age : {student.age}</p>
                    <p>Course : {student.course}</p>
                    <p>Status: {student.isPlaced ? "Placed" : "Not Placed"}</p>
                </div>

            </div>
        </>
    )
}

export default StudentCard