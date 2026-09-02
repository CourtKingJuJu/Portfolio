import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function RagSumePage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askRagSume = async (submittedQuestion = question) => {
    if (!submittedQuestion.trim() || loading) return;

    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch(
        `https://ragsume.onrender.com/chat?question=${encodeURIComponent(submittedQuestion)}`,
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
    <div className='min-h-screen bg-[#09090b] font-sans text-[#e4e4e7] antialiased'>
      <div className='mx-auto max-w-[860px] px-5 py-10 sm:px-10'>
        {/* Header */}
        <div className='pt-8'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-[3px] border border-[#4F8EF7]/40 bg-[#4F8EF7]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[#4F8EF7]'>
            <span className='h-[6px] w-[6px] animate-pulse rounded-full bg-[#4F8EF7]' />
            AI Career Assistant
          </div>

          <h1 className='font-display text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl'>
            Rag<span className='text-[#4F8EF7]'>Sume</span>
          </h1>

          <p className='mt-3 max-w-[600px] text-sm leading-relaxed text-zinc-400 sm:text-base'>
            Ask questions about my background, education, projects, experience,
            and interests.
          </p>
        </div>

        {/* Chat */}
        <div className='mt-8 rounded-xl border border-white/[0.07] bg-[#111116] p-5 sm:p-7'>
          <div className='flex min-h-[350px] flex-col justify-center'>
            {!answer && !loading && (
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#4F8EF7]/30 bg-[#4F8EF7]/10 text-lg text-[#4F8EF7]'>
                  R
                </div>

                <h2 className='text-sm font-semibold text-white'>
                  Ask RagSume something
                </h2>

                <p className='mx-auto mt-2 max-w-md text-xs leading-relaxed text-zinc-500'>
                  Try asking about Julian's machine learning experience,
                  education, projects, work experience, or career goals.
                </p>

                <div className='mt-6 flex flex-wrap justify-center gap-2'>
                  {[
                    "What's Julian's experience with machine learning?",
                    "Tell me about Julian's co-op experience.",
                    'How did Julian get into Football?',
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setQuestion(suggestion);
                        askRagSume(suggestion);
                      }}
                      className='rounded-md border border-white/[0.07] bg-[#18181f] px-3 py-2 text-xs text-zinc-400 transition hover:border-[#4F8EF7]/50 hover:text-[#4F8EF7]'
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {loading && (
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#4F8EF7]/30 bg-[#4F8EF7]/10 text-lg text-[#4F8EF7]'>
                  R
                </div>

                <p className='text-sm text-zinc-500'>RagSume is thinking...</p>
              </div>
            )}

            {answer && !loading && (
              <div>
                <div className='mb-5 flex items-center gap-3'>
                  <div className='flex h-9 w-9 items-center justify-center rounded-full border border-[#4F8EF7]/30 bg-[#4F8EF7]/10 text-sm text-[#4F8EF7]'>
                    R
                  </div>

                  <div>
                    <p className='text-sm font-semibold text-white'>RagSume</p>

                    <p className='text-[10px] uppercase tracking-[0.08em] text-zinc-600'>
                      AI Career Assistant
                    </p>
                  </div>
                </div>

                <div className='rounded-lg border border-white/[0.07] bg-[#18181f] p-5'>
                  <div className='text-sm leading-relaxed text-zinc-300'>
                    <ReactMarkdown>{answer}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className='mt-6 border-t border-white/[0.07] pt-5'>
            <div className='flex gap-2'>
              <input
                type='text'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    askRagSume();
                  }
                }}
                placeholder='What did Julian do at QuickFacts?'
                disabled={loading}
                className='min-w-0 flex-1 rounded-md border border-white/[0.08] bg-[#09090b] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#4F8EF7]/60'
              />

              <button
                onClick={() => askRagSume()}
                disabled={loading || !question.trim()}
                className='rounded-md bg-[#4F8EF7] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#3a7af5] disabled:cursor-not-allowed disabled:opacity-40'
              >
                {loading ? 'Thinking...' : 'Ask'}
              </button>
            </div>

            <p className='mt-2 text-center text-[10px] text-zinc-600'>
              RagSume answers using information from Julian's knowledge base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RagSumePage;
