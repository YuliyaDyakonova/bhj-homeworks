const chatWidget = document.querySelector(".chat-widget");
const chatWidgetButton = document.querySelector(".chat-widget__side-text");
const chatWidgetMessages = document.querySelector( '.chat-widget__messages');

let timer;

const botAnswers = ["Добрый день! До свидания!",
                    "Вы где?",
                    "К сожалению, все операторы заняты. Не пишите нам больше",
                    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
                    "Где ваша совесть?",
                    "Мы ничего не будем вам продавать",
                    "Вы не купили ниодного товара, чтобы так с нами разговаривать!"];

chatWidgetButton.addEventListener("click", function () {
    chatWidget.classList.toggle("chat-widget_active");
    messageWidgetInput.focus();
});

const messageWidgetInput = document.querySelector(".chat-widget__input");
messageWidgetInput.addEventListener("keydown", sendHandlerQuestion);

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sendHandlerQuestion(event) {
    if (event.code === "Enter" && event.target.value !== "") {
        if (timer) {
            clearTimeout(timer);
        }
        let userMessage = event.target.value;
        const date = new Date();
        const questionTime = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
        chatWidgetMessages.innerHTML += `<div class="message_client">
                                            <div class="message__time">${questionTime}</div>
                                            <div class="message__text">
                                                ${userMessage}
                                            </div>
                                        </div>`;
        event.target.value = "";
        chatWidgetMessages.closest(".chat-widget__messages-container").scrollTop = chatWidgetMessages.scrollHeight;

        setTimeout(sendHandlerAnswer, 500);

        timer = setTimeout(sendHandlerAnswer, 30000);
    }
}

function sendHandlerAnswer() {
    const botMessage = botAnswers[getRandomInteger(0, botAnswers.length - 1)];
    const date = new Date();
    const answerTime = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
    chatWidgetMessages.innerHTML += `<div class="message">
                                        <div class="message__time">${answerTime}</div>
                                        <div class="message__text">
                                            ${botMessage}
                                        </div>
                                    </div>`;
    chatWidgetMessages.closest(".chat-widget__messages-container").scrollTop = chatWidgetMessages.scrollHeight;
}