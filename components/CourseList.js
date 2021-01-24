import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector'
const termMap = {F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);
const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");
  const termCourses = courses.filter(course => selectedTerm == getCourseTerm(course));

  return(
    <View>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm = {setSelectedTerm}/>
      <ScrollView contentContainerStyle={styles.courseList}>
      { termCourses.map(course => <Course key={course.id} course={course} />) }
      </ScrollView>
      
    </View>
  )
};

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
});
  
export default CourseList;