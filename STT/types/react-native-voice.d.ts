declare module 'react-native-voice' {
    import { EmitterSubscription } from 'react-native';
  
    export type SpeechStartEvent = {
      error?: any;
    };
  
    export type SpeechEndEvent = {
      error?: any;
    };
  
    export type SpeechResultsEvent = {
      value?: string[];
    };
  
    export type SpeechErrorEvent = {
      error: {
        code: string;
        message: string;
      };
    };
  
    export type SpeechRecognizedEvent = {
      error?: any;
    };
  
    export type SpeechVolumeChangeEvent = {
      value: number;
    };
  
    class Voice {
      static onSpeechStart: (e: SpeechStartEvent) => void;
      static onSpeechEnd: (e: SpeechEndEvent) => void;
      static onSpeechResults: (e: SpeechResultsEvent) => void;
      static onSpeechError: (e: SpeechErrorEvent) => void;
      static onSpeechRecognized: (e: SpeechRecognizedEvent) => void;
      static onSpeechVolumeChanged: (e: SpeechVolumeChangeEvent) => void;
      static start(locale: string): Promise<void>;
      static stop(): Promise<void>;
      static destroy(): Promise<void>;
      static isAvailable(): Promise<boolean>;
      static removeAllListeners(): void;
      static addListener(
        event: string,
        handler: (e: any) => void
      ): EmitterSubscription;
    }
  
    export default Voice;
  }
  