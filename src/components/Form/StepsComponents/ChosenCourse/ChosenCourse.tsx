import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import listsModule from "../../../listsModule";
import { BasicSelect } from "../../../MUI_components/BasicSelectNames";
import { Button } from "../../../Buttons/Button";

import "../../../../styles/global.css";
import { useTranslation } from "react-i18next";

interface Courses {
  Course_name: string;
  Teacher_name: string;
}

export const ChosenCourse: React.FC = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const coursesList =
    currentLanguage === "pt" ? listsModule.courses : listsModule.courses_EN;

  const [chosenCourses, setChosenCourses] = useState<Courses[]>(() => {
    const savedCourses = sessionStorage.getItem("savedCourses");
    return savedCourses
      ? JSON.parse(savedCourses)
      : [{ Course_name: "", Teacher_name: "" }];
  });

  const handleAddCourse = () => {
    setChosenCourses((prevCourses) => [
      ...prevCourses,
      { Course_name: "", Teacher_name: "" },
    ]);
  };

  const handleRemoveCourse = (index: number) => {
    setChosenCourses((prevCourses) =>
      prevCourses.filter((_, courseIndex) => courseIndex !== index)
    );
  };

  const handleCourseChange = (
    index: number,
    field: keyof Courses,
    value: string
  ) => {
    setChosenCourses((prevCourses) =>
      prevCourses.map((course, courseIndex) =>
        courseIndex === index ? { ...course, [field]: value } : course
      )
    );
  };

  useEffect(() => {
    if (chosenCourses.length > 0) {
      sessionStorage.setItem("savedCourses", JSON.stringify(chosenCourses));
    }
  }, [chosenCourses]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("savedCourses");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Limpeza do event listener ao desmontar o componente
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
              label={t("chosen_course")}
              list={coursesList}
              value={courseObject.Course_name} // Passando o valor correto
              onChange={(event) => {
                handleCourseChange(index, "Course_name", event.target.value); // Atualiza o curso
              }}
            />
            <BasicSelect
              name={`courses[${index}].Teacher_name`} // Mudando para associar 'teacher' corretamente no objeto
              label={t("teacher_label")}
              list={listsModule.teacher}
              value={courseObject.Teacher_name} // Passando o valor correto
              onChange={(event) => {
                handleCourseChange(index, "Teacher_name", event.target.value); // Atualiza o teacher
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
