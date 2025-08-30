import Lesson from "@/components/elements/Lesson";
import React from "react";

const LessonPage = async ({
  params,
}: {
  params: Promise<{
    courseId: string;
    unitId: string;
    sessionId: string;
    lessonId: string;
  }>;
}) => {
  const { courseId, unitId, sessionId, lessonId } = await params;
  return (
    <Lesson
      courseId={courseId}
      unitId={unitId}
      sessionId={sessionId}
      lessonId={lessonId}
    />
  );
};

export default LessonPage;
