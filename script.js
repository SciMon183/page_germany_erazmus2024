const galleries = [
    [ // gallery home
        { src: "main.jpeg", description: "We’re staying at the Vitalis center, where we live and complete our internships. 🏡 The center is located in Gut Wehlitz 2, 04435 Schkeuditz, providing a peaceful environment for both work and relaxation. 💼 It's the perfect setting to focus on gaining practical experience while enjoying comfortable accommodation. 🌿" },
        { src: "main2.jpeg", description: "We’re staying at the Vitalis center, where we live and complete our internships. 🏡 The center is located in Gut Wehlitz 2, 04435 Schkeuditz, providing a peaceful environment for both work and relaxation. 💼 It's the perfect setting to focus on gaining practical experience while enjoying comfortable accommodation. 🌿" }
    ],
    [ // gallery week one
        { src: "week1/bhp.jpeg", description: "On the first day, we familiarized ourselves with the facility and got an overview of how everything operates. We also completed the required safety training (BHP), learning important guidelines for working safely. Afterward, we explored the surrounding area to get to know the environment better." },
        { src: "week1/doweb.jpeg", description: "On the second day, we started the HTML course, learning the basics of web development. We also had a discussion about soft and hard skills, highlighting their importance in the workplace. Additionally, we were introduced to the internship supervisor, who explained our upcoming tasks and expectations." },
        { src: "week1/doweb2.jpeg", description: "On the third day, we completed the HTML course, wrapping up the key concepts. After finishing the lessons, we began applying our knowledge by working on a website. It was our first hands-on experience in creating web pages." }
    ],
    [ // gallery week two
        { src: "week2/gniazdka.jpeg", description: "During the second week of our internship, we began the exciting process of installing electrical systems. ⚡ We focused on mounting outlets, paying close attention to their optimal placement for both functionality and safety. 🔌 This hands-on experience allowed us to apply our theoretical knowledge in a practical setting. Each successful installation brought a sense of accomplishment and reinforced our understanding of electrical circuits. 💡 We look forward to further developing our skills in the upcoming weeks! 📈" },
        { src: "week2/gniazdka2.jpeg", description: "During the second week of our internship, we began the exciting process of installing electrical systems. ⚡ We focused on mounting outlets, paying close attention to their optimal placement for both functionality and safety. 🔌 This hands-on experience allowed us to apply our theoretical knowledge in a practical setting. Each successful installation brought a sense of accomplishment and reinforced our understanding of electrical circuits. 💡 We look forward to further developing our skills in the upcoming weeks! 📈" },
        { src: "week2/lampy.jpeg", description: "We also tackled the installation of smart switches regular light switches, and halogen lights during our project 💡. The process involved carefully wiring the smart switches, which allow for convenient remote control and automation of the lighting system 🛠️. As we worked, we marveled at how technology can transform ordinary spaces into more functional and efficient environments 🌟. The halogen lights added a touch of elegance and brightness, perfectly complementing the modern switches we installed. It was a rewarding experience to blend traditional and smart technologies, enhancing both the aesthetics and functionality of the space!" },
        { src: "week2/jag.jpeg", description: "During the second week of our internship, we had the chance to dive into the Loxone system🛠️, which was quite an exciting experience! We worked with the Loxone Miniserver as the core of the setup, configuring it to control various devices. Most of our tasks revolved around installing and programming lighting systems 💡, setting up alarms 🚨, and integrating sensors 🕵️‍♂️. It was hands-on work that involved both creativity and technical skills, giving us valuable insight into how smart home technologies operate and how automation can simplify daily life. Every day brought fresh challenges, pushing us to sharpen our knowledge of these systems." },
        { src: "week2/las.jpeg", description: "During the second week of our internship, we had the chance to dive into the Loxone system🛠️, which was quite an exciting experience! We worked with the Loxone Miniserver, configuring it to control various devices. Most of our tasks revolved around setting up lighting systems 💡, configuringalarms 🚨, and integrating sensors 🕵️‍♂️. Of course, not everything went smoothly—at one point, something broke down ⚡. We had to troubleshoot the system, which turned out to be a great learning experience in problem-solving under pressure. Every day brought fresh challenges, but that only made it more rewarding as we developed our technical skills and understanding of automation." },
        { src: "week2/ole.jpeg", description: "During the second week of our internship, we had the chance to dive into the Loxone system 🛠️, which was quite an exciting experience! We spent most of the time working on lighting systems 💡, setting up alarms 🚨, and configuring sensors 🕵️‍♂️, among other tasks. It was hands-on work that involved both creativity and technical skills, giving us insight into how smart home technologies can be integrated to make daily life easier. Every day brought new challenges and opportunities to improve our understanding of automation systems." },
        { src: "week2/game.jpeg", description: "We developed a 2D video game 🎮 using Stencyl, a powerful game creation tool that simplifies the design process. The project involved crafting unique characters 🕹️, creating engaging levels 🏞️, and implementing various gameplay mechanics 🔍. We followed a structured development process 🛠️, which included planning, prototyping, and testing to enhance user experience. Throughout this project, we gained valuable skills in game development 🎨, such as graphics creation and user interface design. Ultimately, this experience not only improved our proficiency in using Stencyl 📈 but also fostered teamwork 🤝 and creativity 💡." }
    
    ],
    [ // gallery berlin
        { src: "berlin/branderburg.jpeg", description: "On Saturday, we went on a cultural trip to Berlin and had the chance to see the iconic Brandenburg Gate 🇩🇪. This historic landmark, once a symbol of division, now represents unity and peace ✌️. Standing in front of it, with its grand columns and rich history, was truly awe-inspiring. The square around it was buzzing with energy, full of people and life 🌍. It was an amazing experience to see such a powerful symbol up close!" },
        { src: "berlin/dworzec.jpeg", description: "We also visited Berlin’s main train station, the Berlin Hauptbahnhof 🚆. It’s an architectural marvel, with its sleek glass design and massive structure, connecting people from all over Europe 🌍. The station is full of life, with travelers rushing by and shops buzzing with activity 🛍️. Standing there, we could really feel the modern pulse of the city alongside its rich history. It was a great mix of the old and the new!" },
        { src: "berlin/futurarium.jpeg", description: "We also explored the Futurium in Berlin, an incredible museum that gave us a glimpse into the cities of the future 🌆. Inside, we saw amazing interactive exhibits that showed how we might live in the years to come, with futuristic homes, smart technology, and sustainable cities 🌱. It was fascinating to imagine how these innovations could shape our everyday lives, and it really got us thinking about what kind of future we’d like to live in. The whole experience was both eye-opening and inspiring!" },
        { src: "berlin/katedra.jpeg", description: "We also visited the stunning Berliner Dom, the largest cathedral in Berlin 🏛️. Its impressive dome and beautiful architecture made it a real highlight of the trip. Inside, we admired the intricate details, colorful stained glass, and the rich history that fills the space ⛪. Climbing to the top gave us another incredible view of the city, offering a peaceful moment above the bustling streets 🌇. The cathedral truly captured the grandeur and spirit of Berlin!" },
        { src: "berlin/panorama.jpeg", description: "On the roof of the Futurium, we had the chance to enjoy a fantastic panoramic view of Berlin 🌇. It was a perfect spot to take in the city’s mix of modern and historic architecture, with landmarks like the TV Tower and Reichstag in the distance. Surrounded by greenery, the rooftop felt like an oasis above the urban hustle 🌿. It was the ideal place to reflect on everything we’d seen and imagine the future while looking over the present-day cityscape!" },
        { src: "berlin/razem.JPG", description: "We also stopped by the Bundeskanzleramt, the German Chancellor’s Office, which is one of the most modern government buildings in Berlin 🏢. Its sleek, futuristic design stood out among the city’s landmarks, symbolizing the forward-thinking nature of Germany’s leadership. Standing in front of this impressive structure, we could feel the significance of the place where key political decisions are made 🇩🇪. It was fascinating to see such an important part of the country’s government up close!" },
        { src: "berlin/rower.jpeg", description: "We also visited the Volkswagen Museum, where we were amazed by a collection of iconic and modern cars 🚗. The displays featured everything from classic Volkswagens to sleek Lamborghinis and powerful Porsches, showcasing the evolution of automotive design and technology. It was exciting to see these incredible vehicles up close, each with its own unique story and style 🚘. The museum really highlighted the craftsmanship and innovation that go into making some of the world’s most beloved cars. It was a thrilling experience for all of us!" },
        { src: "berlin/uniwerek.jpeg", description: "We also visited the Humboldt-Universität zu Berlin, one of the oldest and most prestigious universities in Germany 🎓. The beautiful campus, with its historic buildings and lush green spaces, offered a glimpse into the rich academic tradition of the institution. Standing in front of the main entrance, we could almost feel the intellectual energy that has flowed through its halls for centuries 📚. It was inspiring to think about the many great thinkers and scholars who have studied there and shaped the world with their ideas. The visit was a wonderful addition to our cultural exploration of Berlin!" },
        { src: "berlin/zydzi.jpeg", description: "We also visited the Holocaust Memorial, a poignant tribute to the victims of the Holocaust 🕊️. The striking installation features thousands of stumbling stones—small brass plaques embedded in the pavement, each commemorating the lives of those who perished. As we walked among them, it was a sobering experience that made us reflect on the past and the importance of remembering history. The design of the memorial, with its abstract blocks, evokes a sense of unease and encourages contemplation, reminding us of the significance of tolerance and remembrance. It was a powerful moment during our visit to Berlin." }
    ],
    [ // gallery lipsko
        { src: "lipsko/lipsko.jpeg", description: "Leipzig is a dynamic city known for its rich cultural heritage and vibrant artistic scene. With its stunning architecture, from historic buildings to modern structures, the city beautifully blends the past with the present. Home to renowned universities and music traditions, Leipzig exudes a lively atmosphere that attracts visitors from around the world." },
        { src: "lipsko/aaa.jpg", description: "We also had the opportunity to admire the statue of Goethe, an iconic symbol of literary brilliance in Leipzig. 📚 This remarkable monument not only celebrates his profound contributions to literature but also serves as a reminder of the city’s rich cultural heritage. 🌟 Standing before it, we felt a deep connection to the artistic spirit that continues to thrive in Leipzig." },
        { src: "lipsko/bach.jpg", description: "During our trip to Leipzig, we had the pleasure of visiting the impressive statue of Bach, which stands as a tribute to the city's rich musical heritage. 🎶 The monument not only reflects the genius of this great composer but also encapsulates the vibrant cultural atmosphere of Leipzig. 🏛️ It was a truly memorable experience that deepened our appreciation for Bach's enduring legacy." },
      
        { src: "lipsko/kosciul.jpg", description: "We also visited St. Thomas Church, a stunning architectural masterpiece steeped in history. ⛪ The church is not only famous for its breathtaking design but also for its association with the renowned composer Johann Sebastian Bach, who served as its musical director. 🎼 Walking through its hallowed halls, we felt the weight of centuries of musical and cultural significance, making our visit truly inspiring." },
        { src: "lipsko/organy.jpg", description: "The church houses magnificent organs, celebrated for their intricate craftsmanship and powerful sound, which have inspired countless musicians and composers throughout the years. 🎹" },
        { src: "lipsko/rynek.jpg", description: "The market square in Leipzig is a vibrant gathering place that pulsates with energy and life. 🌟 Surrounded by stunning historical buildings, it features a variety of stalls offering local delicacies and handcrafted goods. 🥨 As we wandered through the square, we were captivated by the lively atmosphere and the joyful chatter of visitors and locals alike." },
        { src: "lipsko/stacja.jpg", description: "The Leipzig Central Station, or Hauptbahnhof, is an architectural marvel and one of the largest railway stations in Europe. 🏛️ Its grand facade and expansive glass roof create an impressive entrance, while the interior features a bustling concourse filled with shops, cafes, and waiting areas. 🚉 As a key transportation hub, the station seamlessly connects Leipzig to major cities across Germany and beyond, making it a vital part of the city’s infrastructure and an integral part of the travel experience." },
        { src: "lipsko/krematorium.jpeg", description: "Climbing to the top of the Monument to the Battle of the Nations in Leipzig 🏙️ was absolutely worth it! The panoramic view from up there is breathtaking 🌅—you can see the entire city stretching out below, from the charming old town to the modern skyline. Surrounded by green parks and the horizon, it felt like we had the whole of Leipzig at our feet 🌳🏙️. It’s the perfect spot to soak in the beauty of the city and take some epic photos 📸!" },
        { src: "lipsko/pomnik.jpeg", description: "The Monument to the Battle of the Nations in Leipzig 🏙️ is the largest in Europe, towering over 90 meters high ⛰️. It commemorates Napoleon's defeat in the 1813 Battle of Leipzig, a pivotal moment in European history ⚔️. Built from stone and concrete, the structure features powerful statues and a stunning interior that reflects the bravery of those who fought. From the top, the panoramic view of Leipzig is breathtaking 🌅. It's not just a monument—it's a journey into the past!" },
        { src: "lipsko/poomnik.jpeg", description: "The Monument to the Battle of the Nations in Leipzig 🏙️ is the largest in Europe, towering over 90 meters high ⛰️. It commemorates Napoleon's defeat in the 1813 Battle of Leipzig, a pivotal moment in European history ⚔️. Built from stone and concrete, the structure features powerful statues and a stunning interior that reflects the bravery of those who fought. From the top, the panoramic view of Leipzig is breathtaking 🌅. It's not just a monument—it's a journey into the past!" },
        { src: "lipsko/razem.JPG", description: "Our group visited the largest monument in Europe, the Monument to the Battle of the Nations in Leipzig 🏙️. It was built to commemorate the 1813 Battle of Leipzig, where Napoleon was decisively defeated ⚔️. Standing over 90 meters tall ⛰️, the monument is awe-inspiring both in its scale and historical significance. Walking around it, we could almost feel the echoes of history 🌍. It was an unforgettable experience for all of us!" }
    ],
    [ // gallery Schkeuditz
        { src: "schkeuditz/kawa.jpg", description: "In Schkeuditz, where we’re staying, the meals are absolutely delicious! 🍽️ We enjoy hearty breakfasts, filling lunches, and satisfying dinners every day. 🍳🥗🍲 There’s always a variety of options to suit everyone’s taste, ensuring we’re well-fed and energized. 🌟 And the best part? There are always warm drinks available—tea, coffee, you name it! ☕🍵 It’s the perfect combination of comfort and nourishment, making each meal a highlight of the day." },       
        { src: "schkeuditz/zachud.jpeg", description: "In Schkeuditz, the city where we live, there’s an airport that serves as a gateway to many destinations ✈️. One of the highlights of living here is the breathtaking **sunsets** we often experience 🌅. The sky transforms into a canvas of vibrant colors, with hues of orange, pink, and purple blending beautifully as the sun dips below the horizon. It’s a perfect way to unwind after a busy day, and we often find ourselves captivated by the stunning views. The combination of the airport and those gorgeous sunsets makes Schkeuditz a truly special place to call home!" },
        { src: "schkeuditz/lotnisko.jpg", description: "In Schkeuditz, the city where we live, there’s an airport that serves as a gateway to many destinations ✈️. One of the highlights of living here is the breathtaking **sunsets** we often experience 🌅. The sky transforms into a canvas of vibrant colors, with hues of orange, pink, and purple blending beautifully as the sun dips below the horizon. It’s a perfect way to unwind after a busy day, and we often find ourselves captivated by the stunning views. The combination of the airport and those gorgeous sunsets makes Schkeuditz a truly special place to call home!" }
    ],
    [ // gallery free time 
        { src: "free_time/fifa.jpeg", description: "In our spare time, we often find ourselves engrossed in video games, particularly enjoying the exhilarating matches of FIFA. ⚽ The competitive spirit and strategic gameplay foster a sense of camaraderie as we challenge each other to achieve victory on the virtual pitch. 🎮 Whether we’re executing skillful plays or celebrating triumphant goals, these gaming sessions provide an enjoyable escape and strengthen our bond as friends." },
        { src: "free_time/pingpong.jpeg", description: "In our free time, we love playing ping pong, a perfect mix of fun and competition. 🏓 The fast-paced rallies and quick reflexes make each game exciting, pushing us to improve with every match. 🎯 It's not just about the sport, though—it’s also a great way to unwind, share some laughs, and stay active together. 😊" },
        { src: "free_time/moping.jpeg", description: "In our free time, we make it a priority to take care of our rooms, ensuring everything is tidy and organized. 🧹 Whether it's mopping the floors or decluttering our spaces, the effort brings a sense of calm and satisfaction. 🌿 It’s a simple routine that not only keeps our environment clean but also helps us recharge and feel more productive. ✨" },
        { src: "free_time/bilard.jpeg", description: "We had a blast playing billiards at the club located within the center 🎱. The atmosphere was vibrant and lively, filled with laughter and friendly competition among us. Each game was filled with excitement as we tried to show off our skills and maybe even pull off a few trick shots 😄. It was a great way to unwind after a day of sightseeing and to bond with each other over some fun challenges. The combination of good company and the thrill of the game made for a memorable evening!" },
        { src: "free_time/dart.jpeg", description: "We had a fantastic time playing darts at the club within the center 🎯. The atmosphere was buzzing with excitement and friendly competition as we took turns aiming for the bullseye. Each throw was filled with laughter and playful banter, making the experience even more enjoyable 😄. It was a great way to relax and connect with each other after our day of adventures. The mix of skill and fun made for a memorable night full of camaraderie!" }
    ]
];

let currentGalleryIndex = 0; // main chose first gallery 
let currentIndex = 0; // actual photo in gallery 

        // Funkcja do przełączania galerii
function switchGallery(galleryIndex) {
    currentGalleryIndex = galleryIndex;
    currentIndex = 0; 
    updateImage();
    updateThumbnailGallery(); 
    closeVideo(); // Zamykamy wideo, jeśli jest otwarte
}



// Funkcja do pokazania wideo alexa
function videoShow() {
    const videoContainer = document.getElementById('videoContainer');
    const videoContainerx = document.getElementById('videoContainerx');
    const mainImage = document.getElementById('mainImage');
    const imageDescription = document.getElementById('imageDescription');
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    const arrows = document.getElementById('arrow');
    const arrowso = document.getElementById('arrowone');

    mainImage.style.display = 'none';
    imageDescription.style.display = 'none';
    thumbnailGallery.style.display = 'none';
    videoContainer.style.display = 'flex'; 
    videoContainerx.style.display = 'none'; 
    arrows.style.display = 'none';
    arrowso.style.display = 'none';
}

// Funkcja do pokazania wideo x
function videoShowx() {
    const videoContainerx = document.getElementById('videoContainerx');
    const videoContainer = document.getElementById('videoContainer');
    const mainImage = document.getElementById('mainImage');
    const imageDescription = document.getElementById('imageDescription');
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    const arrows = document.getElementById('arrow');
    const arrowso = document.getElementById('arrowone');

    mainImage.style.display = 'none';
    imageDescription.style.display = 'none';
    thumbnailGallery.style.display = 'none';
    videoContainer.style.display = 'none'; 
    videoContainerx.style.display = 'flex'; 
    arrows.style.display = 'none';
    arrowso.style.display = 'none';
}

// Funkcja do zamknięcia wideo alexa
function closeVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const videoContainerx = document.getElementById('videoContainerx');
    const mainImage = document.getElementById('mainImage');
    const imageDescription = document.getElementById('imageDescription');
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    const arrows = document.getElementById('arrow');
    const arrowso = document.getElementById('arrowone');

    videoContainer.style.display = 'none'; 
    videoContainerx.style.display = 'none'; 
    mainImage.style.display = 'inline'; 
    imageDescription.style.display = 'inline'; 
    thumbnailGallery.style.display = 'inline'; 
    arrows.style.display = 'inline';
    arrowso.style.display = 'inline';
}
// Funkcja do zamknięcia wideo x
function closeVideox() {
    const videoContainerx = document.getElementById('videoContainerx');
    const videoContainer = document.getElementById('videoContainer');
    const mainImage = document.getElementById('mainImage');
    const imageDescription = document.getElementById('imageDescription');
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    const arrows = document.getElementById('arrow');
    const arrowso = document.getElementById('arrowone');

    videoContainerx.style.display = 'none'; 
    videoContainer.style.display = 'none'; 
    mainImage.style.display = 'inline'; 
    imageDescription.style.display = 'inline'; 
    thumbnailGallery.style.display = 'inline'; 
    arrows.style.display = 'inline';
    arrowso.style.display = 'inline';
}







// Funkcje do przełączania obrazów
function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleries[currentGalleryIndex].length - 1;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex < galleries[currentGalleryIndex].length - 1) ? currentIndex + 1 : 0;
    updateImage();
}

function updateImage() {
    const gallery = galleries[currentGalleryIndex];
    const mainImage = document.getElementById('mainImage');
    const description = document.getElementById('imageDescription');

    mainImage.src = gallery[currentIndex].src;
    description.innerText = gallery[currentIndex].description;
}

// Funkcja do aktualizacji miniaturek galerii
function updateThumbnailGallery() {
    const gallery = galleries[currentGalleryIndex];
    const thumbnailGallery = document.getElementById("thumbnailGallery");
    thumbnailGallery.innerHTML = ""; 

    gallery.forEach((item, index) => {
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = `Thumbnail ${index + 1}`;
        img.classList.add("thumbnail");

        img.addEventListener("click", () => {
            currentIndex = index;
            updateImage();
        });

        thumbnailGallery.appendChild(img);
    });
}

// Wywołaj tę funkcję przy pierwszym załadowaniu, aby zainicjować galerię
updateThumbnailGallery();

// Pobieramy elementy
const mainImage = document.getElementById('mainImage');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
// Otwórz pop-up po kliknięciu na główne zdjęcie
mainImage.addEventListener('click', function() {
var popupImage = document.getElementById("popupImage");
    popup.style.display = 'flex'; // Wyświetlamy pop-up
    popupImage.src = mainImage.src;
});
// Zamknij pop-up po kliknięciu na X
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Ukrywamy pop-up
});
// Zamknij pop-up po kliknięciu poza obszar zdjęcia
popup.addEventListener('click', function(event) {
    // Sprawdź, czy kliknięto w obszar popupu, a nie zdjęcia
    if (event.target === popup) {
        popup.style.display = 'none'; // Ukrywamy pop-up
    }
});












let clickCount = 0;
const timeLimit = 1000; // 1 second
let clickTimer;

function handleClick() {
    clickCount++;
    if (!clickTimer) {
        clickTimer = setTimeout(() => {
            clickCount = 0; // Reset click count after time limit
            clickTimer = null; // Reset the timer
        }, timeLimit);
    }

    // Check if the click count has reached 9
    if (clickCount === 7) {
        window.location.href = "http://chooja.pl"; // Redirect to the URL
    }
}
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', handleClick);
});





const button = document.getElementById('dupa');
const themeStylesheet = document.getElementById('themeStylesheet');
const body = document.body;

// Funkcja zmieniająca motyw z animacją
button.addEventListener('click', () => {
    // Dodaj klasę fade-out, aby rozpocząć animację zanikania
    body.classList.add('fade-out');

    // Używamy setTimeout, aby poczekać na zakończenie animacji przed zmianą stylu
    setTimeout(() => {
        // Sprawdź aktualny arkusz stylów
        if (themeStylesheet.getAttribute('href') === 'light.css') {
            // Przełącz na ciemny motyw (dark.css)
            themeStylesheet.setAttribute('href', 'dark.css');
        } else {
            // Przełącz na jasny motyw (light.css)
            themeStylesheet.setAttribute('href', 'light.css');
        }

        // Usuń klasę fade-out i pozwól na wyłonienie nowego stylu
        body.classList.remove('fade-out');
    }, 200); // 500ms odpowiada czasowi trwania animacji (transition)
});


