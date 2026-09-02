import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const RagSume = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askRagSume = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/chat?question=${encodeURIComponent(question)}`,
        {
          method: 'POST',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      setAnswer(data.answer);
    } catch (error) {
      console.error(error);
      setAnswer('Sorry, RagSume is currently unavailable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto max-w-2xl'>
      <h2 className='text-xl font-semibold text-[#4F8EF7]'>Ask RagSume</h2>

      <p className='mt-2 text-sm text-zinc-400'>
        Ask me about Julian's experience, education, skills, or interests.
      </p>

      <div className='mt-6 flex gap-2'>
        <input
          type='text'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              askRagSume();
            }
          }}
          placeholder='What did Julian do at GeoSpectrum?'
          className='flex-1 rounded-md border border-white/[0.07] bg-[#111116] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#4F8EF7]'
        />

        <button
          onClick={askRagSume}
          disabled={loading}
          className='rounded-md bg-[#4F8EF7] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#3a7af5] disabled:cursor-not-allowed disabled:opacity-50'
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </div>

      {answer && (
        <div className='mt-6 rounded-lg border border-white/[0.07] bg-[#111116] p-5'>
          <p className='whitespace-pre-wrap text-sm leading-relaxed text-zinc-300'>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </p>
        </div>
      )}
    </div>
  );
};

export default RagSume;
