let youtubeLink = document.getElementById("youtubeLink");
let gmailLink = document.getElementById("gmailLink");
let githubLink = document.getElementById("githubLink");
let chatGPTLink = document.getElementById("chatGPTLink");
let bardLink = document.getElementById("bardLink");
let portfolioLink = document.getElementById("portfolioLink");
let bakaaaLink = document.getElementById("bakaaaLink");
let dictionaryLink = document.getElementById("dictionaryLink");
let genderCheckLink = document.getElementById("genderCheckLink");
let weatherLink = document.getElementById("weatherLink");
let qrGeneratorLink = document.getElementById("qrGeneratorLink");
let blogLink = document.getElementById("blogLink");
let tuduLink = document.getElementById("tuduLink");
let bmChemLink = document.getElementById("bmChemLink");
let quizLink = document.getElementById("quizLink");

let btn = document.getElementById("btn");

function deselectAllBookmarks() {
    const bookmarkElements = [
        youtubeLink,
        gmailLink,
        githubLink,
        chatGPTLink,
        bardLink,
        portfolioLink,
        bakaaaLink,
        dictionaryLink,
        genderCheckLink,
        weatherLink,
        qrGeneratorLink,
        blogLink,
        tuduLink,
        bmChemLink,
        quizLink
    ];

    bookmarkElements.forEach(bookmark => {
        bookmark.style.backgroundColor = "";
    });
}


let arr = [];

youtubeLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("youtube");
    youtubeLink.style.backgroundColor = "#525050a8";
});

gmailLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("gmail");
    gmailLink.style.backgroundColor = "#525050a8";
});

githubLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("github");
    githubLink.style.backgroundColor = "#525050a8";
});

chatGPTLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("chatGpt");
    chatGPTLink.style.backgroundColor = "#525050a8";
});

bardLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("bard");
    bardLink.style.backgroundColor = "#525050a8";
});

bardLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("bard");
    bardLink.style.backgroundColor = "#525050a8";
});

portfolioLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("myPortfolio");
    portfolioLink.style.backgroundColor = "#525050a8";
});

bakaaaLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("bakaaa");
    bakaaaLink.style.backgroundColor = "#525050a8";
});

dictionaryLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("dictionary");
    dictionaryLink.style.backgroundColor = "#525050a8";
});

genderCheckLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("checkYourGender");
    genderCheckLink.style.backgroundColor = "#525050a8";
});

weatherLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("weather");
    weatherLink.style.backgroundColor = "#525050a8";
});

qrGeneratorLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("qr");
    qrGeneratorLink.style.backgroundColor = "#525050a8";
});

blogLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("blog");
    blogLink.style.backgroundColor = "#525050a8";
});

tuduLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("tudu");
    tuduLink.style.backgroundColor = "#525050a8";
});

bmChemLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("bmChem");
    bmChemLink.style.backgroundColor = "#525050a8";
});

quizLink.addEventListener("click", () => {
    deselectAllBookmarks();
    arr.unshift("quiz");
    quizLink.style.backgroundColor = "#525050a8";
});



btn.addEventListener("click", () => {
    if (arr[0] === "youtube") {
        window.open("https://www.youtube.com/");
    }
    if (arr[0] === "gmail") {
        window.open("https://mail.google.com/");
    }
    if (arr[0] === "github") {
        window.open("https://github.com/");
    }
    if (arr[0] === "chatGpt") {
        window.open("https://chat.openai.com/");
    }
    if (arr[0] === "bard") {
        window.open("https://bard.google.com/chat");
    }
    if (arr[0] === "myPortfolio") {
        window.open("https://sparshlohana.live/");
    }
    if (arr[0] === "bakaaa") {
        window.open("https://bakaaa.sparshlohana.live/");
    }
    if (arr[0] === "dictionary") {
        window.open("https://dictionary.sparshlohana.live/");
    }
    if (arr[0] === "checkYourGender") {
        window.open("https://checkyourgender.sparshlohana.live/");
    }
    if (arr[0] === "weather") {
        window.open("https://weather.sparshlohana.live/");
    }
    if (arr[0] === "qr") {
        window.open("https://qr.sparshlohana.live/");
    }
    if (arr[0] === "blog") {
        window.open("https://myblog.sparshlohana.live/");
    }
    if (arr[0] === "tudu") {
        window.open("https://todo.sparshlohana.live/");
    }
    if (arr[0] === "bmChem") {
        window.open("https://www.bmchem.in/");
    }
    if (arr[0] === "quiz") {
        window.open("https://quiz.sparshlohana.live/");
    }
});