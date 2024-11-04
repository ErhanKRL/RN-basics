import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import Voice, { SpeechResultsEvent } from 'react-native-voice';

interface SpeechState {
  isListening: boolean;
  recognizedTexts: string[];
  currentText: string;
}

export default function App() {
  const [state, setState] = useState<SpeechState>({
    isListening: false,
    recognizedTexts: [],
    currentText: '',
  });

  useEffect(() => {
    // Event listeners
    Voice.onSpeechStart = () => {
      setState((prev) => ({ ...prev, isListening: true }));
    };

    Voice.onSpeechEnd = () => {
      setState((prev) => {
        if (prev.currentText) {
          return {
            ...prev,
            isListening: false,
            recognizedTexts: [...prev.recognizedTexts, prev.currentText],
            currentText: '',
          };
        }
        return { ...prev, isListening: false };
      });
    };

    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      const resultText = e?.value?.[0] ?? ""; // Use an empty string if e.value[0] is undefined
      setState((prev) => ({ ...prev, currentText: resultText }));
    };

    // Cleanup
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('tr-TR');
    } catch (err) {
      console.error('Error starting voice:', err);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
    } catch (err) {
      console.error('Error stopping voice:', err);
    }
  };

  const toggleListening = async () => {
    try {
      if (state.isListening) {
        await stopListening();
      } else {
        await startListening();
      }
    } catch (err) {
      console.error('Toggle listening error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Konuşma Tanıma</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {state.recognizedTexts.map((text, index) => (
          <View key={index} style={styles.textContainer}>
            <Text style={styles.recognizedText}>{text}</Text>
          </View>
        ))}
        {state.currentText ? (
          <View style={styles.textContainer}>
            <Text style={styles.currentText}>{state.currentText}</Text>
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            state.isListening ? styles.buttonListening : null,
          ]}
          onPress={toggleListening}>
          <Text style={styles.buttonText}>
            {state.isListening ? 'Dinleniyor...' : 'Konuşmaya Başla'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  textContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  recognizedText: {
    fontSize: 16,
    color: '#333',
  },
  currentText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  controlsContainer: {
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonListening: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
