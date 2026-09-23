window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

const translations = {
    ru: {
        "nav-who": "Для кого",
        "nav-process": "Как проходит",
        "nav-about": "Обо мне",
        "nav-book": "Записаться",
        "hero-subtitle": "ЭЛЕН ОЗКЫЛЫЧ | ТЕРАПЕВТ СОСТОЯНИЙ",
        "hero-title": "Выйдите из петли автоматических реакций.",
        "hero-desc": "Если прошло уже время, а боль всё ещё не отпускает — на встрече вы получите поддержку, ясность и первые шаги, которые помогут снова почувствовать опору под ногами.",
        "hero-btn": "Записаться бесплатно",
        "hero-subtext": "Бережная конфиденциальная встреча в онлайн-формате (30-40 минут)",
        "who-title": "Персональная демо-сессия для вас, если вы:",
        "who-card-1": "После утраты, развода или тяжёлых жизненных перемен прошло уже время, но вы не можете вернуться к полноценной жизни.",
        "who-card-2": "Вы просыпаетесь, выполняете привычные дела, но внутри все кажется пустым и бессмысленным.",
        "who-card-3": "Каждый день похож на предыдущий, а ощущение, что жизнь проходит мимо, становится все сильнее.",
        "who-card-4": "Вам кажется, что пора двигаться дальше, но вы не можете понять, почему не получается.",
        "section-btn": "Записаться",
        "process-title": "Как будет проходить демо-сессия",
        "step-1-desc": "Выберем удобное время для встречи — всё проходит онлайн в Zoom.",
        "step-2-desc": "Определим, что именно забирает ваши силы сегодня и удерживает вас в состоянии, из которого не получается выбраться.",
        "step-3-desc": "Увидим, к какому состоянию и жизни вы действительно хотите прийти.",
        "step-4-desc": "Составим понятный план первых шагов из текущего состояния к тому, в котором вы хотите жить.",
        "step-5-desc": "Получите практический инструмент самопомощи для моментов тревоги, боли и внутреннего напряжения.",
        "step-6-desc": "Если совпадём по ценностям — предложим форматы дальнейшей работы.",
        "process-footer": "В конце демо-сессии у вас будет больше ясности, понимание своей ситуации и направление, в котором двигаться дальше.",
        "section-btn-free": "Бесплатно",
        "about-title": "Кто я и чем могу быть вам полезна",
        "about-text-1": "Меня зовут Элен Озкылыч. Я знаю, что такое переживать тяжелые жизненные кризисы не только как специалист, но и как человек. В моей жизни были абьюзивные отношения, болезненный развод, а в прошлом году я пережила утрату мужа и осталась одна с тремя несовершеннолетними детьми.",
        "about-text-2": "Я знаю, как выглядит состояние, когда внутри боль, пустота, растерянность и кажется, что жизнь остановилась. Сегодня я помогаю людям обрести внутреннюю опору и постепенно вернуться к жизни, в которой снова появляются силы, желания и смысл.",
        "cred-1": "+ Диплом по ПСИХОЛОГИИ",
        "cred-2": "+ Сертифицированный КОУЧ ICF",
        "cred-3": "+ Специалист по эмоциональному иммунитету",
        "cred-4": "+ Сертифицированный учитель ЙОГИ",
        "cred-5": "+ Тренер личностного роста",
        "about-btn": "Записаться",
        "book-title": "Прошло уже время, но внутри по-прежнему пусто, тяжело и кажется, что ничего не меняется. Это не значит, что так будет всегда!",
        "book-note": "Запишитесь на бесплатную демо-сессию и получите ясность, почему вы застряли в этой точке, а также понимание первых шагов к состоянию, в котором снова появляются силы.",
        "footer-brand": "Elen Oz | Терапевт состояний"
    },
    en: {
        "nav-who": "For Whom",
        "nav-process": "Process",
        "nav-about": "About Me",
        "nav-book": "Book Session",
        "hero-subtitle": "ELEN OZKILICH | STATE THERAPIST",
        "hero-title": "Break the loop of automatic reactions.",
        "hero-desc": "If time has passed, but the pain still hasn't let go — in this meeting you will receive support, clarity, and the first steps to help you feel grounded once again.",
        "hero-btn": "Book for Free",
        "hero-subtext": "A careful, confidential online meeting (30-40 minutes)",
        "who-title": "The personal demo session is for you, if:",
        "who-card-1": "After a loss, divorce, or major life changes, time has passed, but you cannot return to a fulfilling life.",
        "who-card-2": "You wake up, do routine tasks, but inside everything feels empty and meaningless.",
        "who-card-3": "Every day feels like the previous one, and the feeling that life is passing you by grows stronger.",
        "who-card-4": "It seems to you that it's time to move on, but you can't figure out why it isn't working.",
        "section-btn": "Book Now",
        "process-title": "How the demo session works",
        "step-1-desc": "We will choose a convenient time for the meeting — everything takes place online via Zoom.",
        "step-2-desc": "We will determine exactly what drains your energy today and keeps you in a state you can't escape.",
        "step-3-desc": "We will envision the state and the life you truly want to achieve.",
        "step-4-desc": "We will create a clear plan of the first steps from your current state to the one you desire.",
        "step-5-desc": "You will receive a practical self-help tool for moments of anxiety, pain, and inner tension.",
        "step-6-desc": "If our values align, we will suggest formats for further collaboration.",
        "process-footer": "At the end of the demo session, you will have more clarity, an understanding of your situation, and a direction in which to move forward.",
        "section-btn-free": "Free Session",
        "about-title": "Who I am and how I can help you",
        "about-text-1": "My name is Elen Ozkilich. I know what it means to go through severe life crises, not just as a specialist, but as a person. In my life, I have experienced abusive relationships, a painful divorce, and last year I survived the loss of my husband, left alone with three minor children.",
        "about-text-2": "I know what it feels like when there is pain, emptiness, and confusion inside, and it seems like life has stopped. Today, I help people find their inner anchor and gradually return to a life where strength, desires, and meaning reappear.",
        "cred-1": "+ Degree in PSYCHOLOGY",
        "cred-2": "+ Certified ICF COACH",
        "cred-3": "+ Specialist in Emotional Immunity",
        "cred-4": "+ Certified YOGA Teacher",
        "cred-5": "+ Personal Growth Trainer",
        "about-btn": "Book Session",
        "book-title": "Time has passed, but it is still empty and heavy inside, and it seems nothing changes. This doesn't mean it will always be this way!",
        "book-note": "Sign up for a free demo session and get clarity on why you are stuck at this point, as well as an understanding of the first steps toward a state where strength reappears.",
        "footer-brand": "Elen Oz | State Therapist"
    },
    tr: {
        "nav-who": "Kimler İçin",
        "nav-process": "Süreç",
        "nav-about": "Hakkımda",
        "nav-book": "Randevu Al",
        "hero-subtitle": "ELEN OZKILICH | DURUM TERAPİSTİ",
        "hero-title": "Otomatik tepki döngüsünü kırın.",
        "hero-desc": "Üzerinden zaman geçmesine rağmen acı hala yakanızı bırakmıyorsa — bu görüşmede destek, netlik ve ayaklarınızı tekrar yere sağlam basmanızı sağlayacak ilk adımları bulacaksınız.",
        "hero-btn": "Ücretsiz Randevu Al",
        "hero-subtext": "Özenli, gizlilik esasına dayalı çevrimiçi görüşme (30-40 dakika)",
        "who-title": "Kişisel demo seansı sizin için uygun, eğer:",
        "who-card-1": "Kayıp, boşanma veya ağır yaşam değişikliklerinin üzerinden zaman geçmiş olmasına rağmen tam anlamıyla hayata dönemiyorsanız.",
        "who-card-2": "Uyanıyor, rutin işlerinizi yapıyor ancak içinizde her şeyi boş ve anlamsız hissediyorsanız.",
        "who-card-3": "Her gün bir öncekine benziyor ve hayatın akıp gittiği hissi giderek güçleniyorsa.",
        "who-card-4": "Artık ilerleme vakti geldiğini düşünüyor, ancak neden yapamadığınızı bir türlü anlayamıyorsanız.",
        "section-btn": "Randevu Al",
        "process-title": "Demo seansı nasıl gerçekleşecek",
        "step-1-desc": "Görüşme için uygun bir zaman seçeceğiz — her şey Zoom üzerinden çevrimiçi gerçekleşir.",
        "step-2-desc": "Bugün enerjinizi tam olarak neyin tükettiğini ve sizi çıkamadığınız bu durumda neyin tuttuğunu belirleyeceğiz.",
        "step-3-desc": "Gerçekten ulaşmak istediğiniz ruh halini ve hayatı göreceğiz.",
        "step-4-desc": "Mevcut durumunuzdan yaşamak istediğiniz duruma giden ilk adımların net bir planını çıkaracağız.",
        "step-5-desc": "Kaygı, acı ve içsel gerilim anlarında kullanabileceğiniz pratik bir kendi kendine yardım aracı edineceksiniz.",
        "step-6-desc": "Eğer değerlerimiz uyuşursa, gelecekteki çalışmalarımız için işbirliği formatları önereceğiz.",
        "process-footer": "Demo seansının sonunda daha fazla netliğe, durumunuzu anlama becerisine ve ilerlemeniz gereken yöne sahip olacaksınız.",
        "section-btn-free": "Ücretsiz Görüşme",
        "about-title": "Ben kimim ve size nasıl yardımcı olabilirim",
        "about-text-1": "Adım Elen Ozkilich. Ağır yaşam krizleri geçirmenin ne demek olduğunu sadece bir uzman olarak değil, bir insan olarak da biliyorum. Hayatımda istismarcı ilişkiler, sancılı bir boşanma yaşadım ve geçen yıl eşimi kaybederek üç küçük çocukla yalnız kaldım.",
        "about-text-2": "İçinizde acı, boşluk, kafa karışıklığı varken ve hayat durmuş gibi hissederken bunun nasıl bir durum olduğunu biliyorum. Bugün insanlara içsel dayanaklarını bulmalarında ve gücün, arzuların ve anlamın yeniden var olduğu bir hayata yavaş yavaş dönmelerinde yardımcı oluyorum.",
        "cred-1": "+ PSİKOLOJİ Diploması",
        "cred-2": "+ Sertifikalı ICF KOÇU",
        "cred-3": "+ Duygusal Bağışıklık Uzmanı",
        "cred-4": "+ Sertifikalı YOGA Eğitmeni",
        "cred-5": "+ Kişisel Gelişim Eğitmeni",
        "about-btn": "Randevu Al",
        "book-title": "Zaman geçti, ancak içerisi hala boş, ağır ve hiçbir şey değişmiyor gibi geliyor. Bu her zaman böyle kalacağı anlamına gelmez!",
        "book-note": "Ücretsiz bir demo seansına kaydolun ve neden bu noktada takılı kaldığınıza dair netlik kazanın; aynı zamanda gücünüzün yeniden ortaya çıkacağı o duruma giden ilk adımları anlayın.",
        "footer-brand": "Elen Oz | Durum Terapisti"
    }
};

let currentLang = 'ru'; 

function setLanguage(lang) {
    currentLang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-switcher a').forEach(btn => btn.classList.remove('active'));
    const activeButton = document.getElementById(`btn-${lang}`);
    if (activeButton) activeButton.classList.add('active');
}

const btnEn = document.getElementById('btn-en');
const btnRu = document.getElementById('btn-ru');
const btnTr = document.getElementById('btn-tr');

if (btnEn) btnEn.addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });
if (btnRu) btnRu.addEventListener('click', (e) => { e.preventDefault(); setLanguage('ru'); });
if (btnTr) btnTr.addEventListener('click', (e) => { e.preventDefault(); setLanguage('tr'); });

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('ru');
});