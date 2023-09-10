import { studentsList } from "../data/students"

export const Students = () => {
  return (
    <>
      {studentsList.map((s,i) => <div key={i}>{s.name} {s.lastname}</div>)}
    </>
  )
}
