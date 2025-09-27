let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")


function speak(text) {
    if (!('speechSynthesis' in window)) {
        alert("Speech Synthesis is not supported in this browser.")
        return
    }
    let text_speak = new SpeechSynthesisUtterance(text) 
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript

    content.innerText = transcript  
    takeCommand(transcript.toLowerCase())
}


btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})


function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"

    if (message.toLowerCase().includes("hello") || message.includes("hey")) {
        speak("Hello sir, how can I help you?")
    } 
    else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Group 2.")
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube")
        window.location.href = "https://www.youtube.com/"
    }
    else if (message.includes("open google")) {
        speak("Opening Google")
        window.location.href = "https://www.google.com/"
    }
    else if (message.includes("open instagram")) {
        speak("Opening Instagram")
        window.location.href = "https://www.instagram.com/"
    }
    else if (message.includes("open facebook")) {
        speak("Opening Facebook")
        window.location.href = "https://www.facebook.com/"
    }
    else if (message.includes("open calculator")) {
        speak("Opening calculator")
        window.open("ms-calculator://") 
    }
    else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp")
        window.location.href = "https://web.whatsapp.com/"
    }
    else if (message.includes("time")) {
        let time=new Date().toLocaleString(undefined,{hour:"numeric", minute:"numeric"})
        speak(time)
    }
    else if (message.includes("date")) {
        let date=new Date().toLocaleString(undefined,{day:"numeric", month:"short"})
        speak(date)
    }

    
    else if (message.includes("what") || message.includes("how") || message.includes("is") || message.includes("define")) {
        
        speak(`This is what I found on the internet regarding ${message}`)

        setTimeout(() => {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(message)}`
        }, 1000)
    } 
    else {
        speak(`Sorry, I didn't understand that`)
    }
}