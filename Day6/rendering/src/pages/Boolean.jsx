const Boolean = () => {
  const isActive = true;
  const status = false;
  return (
    <>
      <div className="bg-green-300 p-6">
      {isActive ? <p className="text-red-600">This is true</p>:<p className="text-pink-800">This is false</p>}
     
      </div>
      <div  className="bg-purple-300 p-6">
         {status ? <p className="text-red-600">Completed the Test</p> : <p className="text-pink-800">Not completed the test</p>}
      </div>
    </>
  );
};

export default Boolean;
