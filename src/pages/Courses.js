import Course from '../components/Course';
import { Row } from 'react-bootstrap';
import UseCourses from '../hooks/UseCourses';

const Courses = () => {
    const { courses, setCourses } = UseCourses();

    return (
        <Row sm={1} md={2} lg={3} xl={3} xxl={4} className="g-5 m-auto mx-xxl-4 mx-xl-3 mb-3">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                />)
            }
        </Row>
    )
}

export default Courses