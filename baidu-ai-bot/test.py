import openai
import os

if __name__ == '__main__':
    openai.api_key = os.environ.get('OPENAI_API_KEY')
    client = openai.OpenAI(
        base_url='https://api.openai-proxy.org/v1'
    )

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Say hi"
            }
        ],
        model="gpt-3.5-turbo"
    )

    print(chat_completion)