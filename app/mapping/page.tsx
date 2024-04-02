const Mapping = () => {
  const items = [1, 2, 3, 4, 5];
  const filteredItems = items.filter((item) => {
    return item < 3;
  });

  const students = [
    { id: 1, name: "prinjal", marks: 20 },
    { id: 2, name: "deepsom", marks: 60 },
    { id: 3, name: "asdfsdf", marks: 40 },
    { id: 4, name: "sdfsdf", marks: 10 },
    { id: 5, name: "zfcgdfg", marks: 50 },
    { id: 6, name: "fgsfdg", marks: 40 },
  ];

  const filteredStudents = students.filter((student)=>{
    return student.marks>30
  })

  return (
    <div className="h-screen w-screen flex gap-4 flex-col items-center justify-center">
      {filteredStudents.map((item) => (
        <div className="p-5 bg-orange-400 " key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Mapping;
