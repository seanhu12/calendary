import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { TimelineCalendar,EventItem } from '@howljs/calendar-kit';

export default function App() {
  const exampleEvents= [{
    id: '1',
    title: 'Event 1',
    start: '2022-11-06T09:00:05.313Z',
    end: '2022-11-06T12:00:05.313Z',
    color: '#A3C7D6',
  },
  {
    id: '2',
    title: 'Event 2',
    start: '2022-11-06T11:00:05.313Z',
    end: '2022-11-06T14:00:05.313Z',
    color: '#B1AFFF',
  },]

    
  
  
  return (
    
    <SafeAreaView style={styles.container}>
      <TimelineCalendar viewMode="day" events={exampleEvents} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
});
