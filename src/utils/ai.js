import axios from 'axios'

export const ask = async (prompt) => {
    try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            prompt: prompt,
            max_tokens: 100,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer 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`,
            },
          }
        );
        return response.data.choices[0].text
    } catch (error) {
        console.error('Error:', error);
    }
}