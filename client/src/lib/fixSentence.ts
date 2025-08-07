export const fixSentence = async (sentence: string): Promise<string> => {
  const response = await fetch('http://localhost:3000/api/ai/fix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sentence }),
  });

  const data = await response.json();
  return data.fixedSentence;
};
