import { SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from '../styles';

// Import components
import Subtitle from '@/components/subtitle';
import TaskItem from '../../components/task-item';

/**
 * HomePage component
 * 
 * This component is used to display the home page
 * 
 * TODO: Add tasks to display
 * 
 * @returns {JSX.Element} HomePage component
 */

export default function HomePage() {
    return (
      <SafeAreaView style={styles.container}>
        <Subtitle title="Your Tasks" />
        <TaskItem taskName="Task 1" description={"This is task 1"} categoryColor={"lightblue"}/>
        <TaskItem taskName="Task 2" description={"This is task 2"} categoryColor={"pink"}/>
        <TaskItem taskName="Task 3" description={"This is task 3"} categoryColor={"pink"}/>
      </SafeAreaView>
    );
}