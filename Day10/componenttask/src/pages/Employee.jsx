
const Employee = ({ data }) => {
    return (
        <>
            <div className="flex gap-10 justify-center items-center m-4">
                {data.map((emp, i) => (
                    <div key={i} className='bg-purple-300 w-60 h-50 p-2 rounded'>
                        <h1>Employee name is {emp.name}</h1>
                        <p >Employee email is {emp.email}</p>
                        <p>Employee Department is {emp.department}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Employee