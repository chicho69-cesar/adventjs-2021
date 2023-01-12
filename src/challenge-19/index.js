function learn(time, courses) {
  const allCoursesInTime = courses
    .flatMap((course, index) =>
      courses.slice(index + 1).map((nextCourse, nextIndex) => ({
        total: course + nextCourse,
        pair: [index, index + nextIndex + 1] || null,
      }))
    )
    .filter(({ total }) => total <= time)
    .sort((a, b) => b?.total - a?.total)
  
    return allCoursesInTime[0]?.pair || null
}

function learnAlt(time, courses) {
  if (courses.length < 2) return null

  const result = {time: 0, courses: null}

  loop: for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const sum = courses[i] + courses[j]

      if (sum > time) continue
      if (sum > result.time) {
        result.time = sum
        result.courses = [i, j]

        if (sum === time) break loop
      }
    }
  }

  return result.courses
}

module.exports = learn