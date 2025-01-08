import { Box } from "@mui/material";
import { useState } from "react";
import listsModule from "../../../listsModule";
import { BasicSelect } from "../../BasicSelectNames";
import { Button } from "../../../Buttons/Button";

import "../../../../styles/global.css";

interface Courses {
  Course_name: string;
  Teacher_name: string;
}

export const ChosenCourse: React.FC = () => {
  // Inicializando com um curso vazio
  const [chosenCourses, setChosenCourses] = useState<Courses[]>([
    { Course_name: "", Teacher_name: "" },
  ]);

  const handleAddCourse = () => {
    setChosenCourses([...chosenCourses, { Course_name: "", Teacher_name: "" }]);
  };

  const handleRemoveCourse = (index: number) => {
    setChosenCourses((prevCourses) =>
      prevCourses.filter((_, courseIndex) => courseIndex !== index)
    );
  };

  return (
    <Box
      marginY={10}
      marginX="auto"
      display="flex"
      flexDirection="column"
      gap={8}
      marginTop={10}
      width={500}
      sx={{
        "@media (max-width: 600px)": {
          width: "300px",
        },
      }}
    >
      {chosenCourses.map((courseObject, index) => (
        <div key={index}>
          <div className="space-y-4">
            <BasicSelect
              name={`courses[${index}].Course_name`} // Mudando para associar 'course' corretamente no objeto
              label="Chosen course"
              list={listsModule.courses_EN}
              value={courseObject.Course_name} // Passando o valor correto
              onChange={(event) => {
                setChosenCourses((prevCourses) =>
                  prevCourses.map((course, courseIndex) =>
                    courseIndex === index
                      ? { ...course, course: event.target.value } // Atualiza o curso
                      : course
                  )
                );
              }}
            />
            <BasicSelect
              name={`courses[${index}].Teacher_name`} // Mudando para associar 'teacher' corretamente no objeto
              label="Teacher"
              list={listsModule.teacher}
              value={courseObject.Teacher_name} // Passando o valor correto
              onChange={(event) => {
                setChosenCourses((prevCourses) =>
                  prevCourses.map((course, courseIndex) =>
                    courseIndex === index
                      ? { ...course, teacher: event.target.value } // Atualiza o teacher
                      : course
                  )
                );
              }}
            />
          </div>
          <div className="flex justify-between mt-8">
            <Button hasBg={true} onClick={() => handleRemoveCourse(index)}>
              Remove
            </Button>
            <Button hasBg={true} onClick={handleAddCourse}>
              Add more
            </Button>
          </div>
        </div>
      ))}
    </Box>
  );
};
