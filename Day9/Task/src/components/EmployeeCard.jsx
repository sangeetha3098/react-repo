const EmployeeCard = (props) => {
    const { employee } = props
    return (
        <>
            <div>
                <div>
                    <h1>Task 2</h1>
                    <div className="bg-red-400 p-10 w-70 m-2">
                        <p>Name : {employee.name}</p>
                        <p>Email : {employee.email}</p>
                        <p>City : {employee.city}</p>
                        <p>Experience: {employee.experience}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EmployeeCard