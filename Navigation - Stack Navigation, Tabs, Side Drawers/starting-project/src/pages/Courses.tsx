import React, { useState } from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage, IonGrid, IonRow, IonCol, IonButtons, isPlatform, IonIcon, IonFab, IonFabButton } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
// import { useHistory } from 'react-router-dom';

import AddGoalModal from '../components/AddGoalModal';
import CourseItem from '../components/CourseItem';

export const COURSE_DATA = [
    {
        id: 'c1',
        title: 'Ionic + React - The Practical Guide',
        enrolled: new Date('03/05/2021'),
        goals: [
            { id: 'c1g1', text: 'Finish the course!' },
            { id: 'c1g2', text: 'Learn a lot!' }
        ]
    },
    {
        id: 'c2',
        title: 'React.js - The Complete Guide',
        enrolled: new Date('12/11/2014'),
        goals: [
            { id: 'c2g1', text: 'Finish the course!' },
            { id: 'c2g2', text: 'Learn a lot!' },
        ]
    },
    {
        id: 'c3',
        title: 'JavaScript - The Complete Guide',
        enrolled: new Date('06/02/2020'),
        goals: [
            { id: 'c3g1', text: 'Finish the course!' },
            { id: 'c3g2', text: 'Learn a lot!' }
        ]
    },
]

const Courses: React.FC = () => {
    // const history = useHistory();

    // const changePageHandler = () => {
    //     history.push('/course-goals')
    // }
    const [isAdding, setIsAdding] = useState(false);

    const startAddCourseHandler = () => {
        setIsAdding(true);
    }
    const cancelAddCourseHandler = () => {
        setIsAdding(false)
    }

    return (
        <React.Fragment>
            <AddGoalModal show={isAdding} onCancel={cancelAddCourseHandler} />
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Courses</IonTitle>
                        {!isPlatform('android') &&
                            <IonButtons slot="end">
                                <IonButton onClick={startAddCourseHandler}>
                                    <IonIcon slot="icon-only" icon={addOutline} />
                                </IonButton>
                            </IonButtons>
                        }
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {COURSE_DATA.map(course => (
                            <IonRow key={course.id}>
                                <IonCol size-md="4" offset-md="4" >
                                    <CourseItem title={course.title} id={course.id} enrolmentDate={course.enrolled} />
                                </IonCol>
                            </IonRow>
                        ))}
                    </IonGrid>
                    {isPlatform('android') && <IonFab horizontal="end" vertical='bottom' slot="fixed">
                        <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                            <IonIcon icon={addOutline} />
                        </IonFabButton>
                    </IonFab>}
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}

export default Courses;