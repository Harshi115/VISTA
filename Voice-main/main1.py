import speech_recognition as sr
import pyttsx3
import webbrowser
import requests
import random
import wikipedia
import datetime

# Initialize the text-to-speech engine
engine = pyttsx3.init()


def speak(text):
    engine.say(text)
    engine.runAndWait()


def greet():
    now = datetime.datetime.now()
    current_time = now.strftime("%H:%M")
    current_date = now.strftime("%B %d, %Y")
    current_day = now.strftime("%A")

    speak(f"Good morning! Today is {current_day}, {current_date}. The time is {current_time}.")
    speak("I am your voice assistant. How can I help you today?")


def take_command():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        audio = r.listen(source)
        try:
            command = r.recognize_google(audio)
            print(f"You said: {command}")
            return command.lower()
        except Exception as e:
            print("Sorry, I did not understand that.")
            return None


def play_youtube_video(video_name):
    search_url = f"https://www.youtube.com/results?search_query={video_name.replace(' ', '+')}"
    webbrowser.open(search_url)
    speak(f"Playing {video_name} on YouTube.")


def get_news():
    api_key = '077f38eb2eb44c53aed07fa62edbf5e9'  # Replace with your News API key
    url = f'https://newsapi.org/v2/top-headlines?country=us&apiKey={api_key}'
    response = requests.get(url)
    news = response.json()
    articles = news['articles']
    if articles:
        for article in articles[:5]:  # Read top 5 news articles
            speak(article['title'])
    else:
        speak("Sorry, I couldn't fetch the news.")


def tell_joke():
    jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call fake spaghetti? An impasta!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "What do you call cheese that isn't yours? Nacho cheese!"
    ]
    joke = random.choice(jokes)
    speak(joke)


def tell_random_fact():
    fact = wikipedia.summary("Random fact", sentences=1)
    speak(fact)


def get_weather(city):
    api_key = '93dda482c9f4e19b3dbe90fa36c0dcf9'  
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    response = requests.get(url)
    weather = response.json()
    if weather['cod'] == 200:
        temp = weather['main']['temp']
        description = weather['weather'][0]['description']
        speak(f"The current temperature in {city} is {temp} degrees Celsius with {description}.")
    else:
        speak("Sorry, I couldn't fetch the weather information.")


# Main loop
if __name__ == "__main__":
    greet()
    while True:
        command = take_command()
        if command:
            if 'play' in command and 'youtube' in command:
                video_name = command.replace("play", "").replace("youtube", "").strip()
                play_youtube_video(video_name)

            elif 'news' in command:
                get_news()

            elif 'joke' in command:
                tell_joke()

            elif 'fact' in command:
                tell_random_fact()

            elif 'weather' in command:
                city = command.replace("weather", "").strip()
                get_weather(city)

            elif 'search' in command:
                query = command.replace("search", "").strip()
                webbrowser.open(f"https://www.google.com/search?q={query}")
                speak(f"Searching for {query} on Google.")

            elif 'wikipedia' in command:
                query = command.replace("wikipedia", "").strip()
                summary = wikipedia.summary(query, sentences=2)
                speak(summary)

            elif 'open google' in command:
                webbrowser.open("https://www.google.com")
                speak("Opening Google.")

            elif 'stop' in command:
                speak("Goodbye!")
                break