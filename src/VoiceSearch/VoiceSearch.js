import * as React from 'react';
import 'regenerator-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceSearch = () => {
  const {
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>your Browser Does not Support Voice Search</span>;
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}><i class="fa fa-microphone" aria-hidden="true"></i></button>
      <br/>
    </div>
  );
};
export default VoiceSearch;