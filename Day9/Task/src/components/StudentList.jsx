
const StudentList = ({ studentData }) => {
    return (
        <>
            <div>
                <div>
                    <h1>Task 3</h1>
                    {studentData.map((stud, i) => (
                        <div className="bg-red-400 m-4 p-2">
                            <p>{stud.id} - {stud.name} - {stud.course}</p>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}

export default StudentList