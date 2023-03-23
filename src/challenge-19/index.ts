function learn(time: number, courses: number[]): (number[] | null) {
  interface CoursesInTime {
    total: number;
    pair: number[];
  }
  
  const allCoursesInTime: CoursesInTime[] = courses
    .flatMap((course: number, index: number) =>
      courses.slice(index + 1).map((nextCourse: number, nextIndex: number) => ({
        total: course + nextCourse,
        pair: [index, index + nextIndex + 1] || null,
      }))
    )
    .filter(({ total }) => total <= time)
    .sort((a: CoursesInTime, b: CoursesInTime) => b?.total - a?.total);
  
  return allCoursesInTime[0]?.pair || null;
}