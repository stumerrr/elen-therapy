// --- YAPIŞKAN MENÜ (SCROLL) EFEKTİ --- //
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

// --- 1. LANGUAGE TRANSLATION DICTIONARY --- //
const translations = {
    ru: {
        "nav-philosophy": "Философия",
        "nav-method": "Метод",
        "nav-book": "Записаться",
        "hero-subtitle": "Терапевт состояний & Личный коуч",
        "hero-title": "Выйдите из петли автоматических реакций.",
        "hero-desc": "Перестаньте жить в режиме «Дня сурка». Терапия, которая помогает выйти из выживания в осознанную жизнь.",
        "hero-btn": "Начать путь",
        "phil-title": "Почему жизнь снова приводит вас в одну и ту же точку?",
        "phil-card1-title": "Симптом",
        "phil-card1-desc": "Эмоциональное истощение и бег по кругу — это не корень проблемы, а сигналы системы.",
        "phil-card2-title": "Анализ",
        "phil-card2-desc": "Мы смотрим глубже поверхности. Исследуем не просто реакцию, а состояние и убеждения за ней.",
        "phil-card3-title": "Выход",
        "phil-card3-desc": "Создаем новую внутреннюю опору — ресурс, который возвращает контроль над решениями.",
        "method-title": "Мой подход",
        "method-desc": "Глубокая терапевтическая работа, сочетающая разбор автоматических реакций с поиском персональной внутренней опоры.",
        "bento-box1-title": "Внутренняя опора",
        "bento-box1-desc": "Обретите равновесие, которое останется с вами навсегда.",
        "method-box-title": "Терапия состояний",
        "method-box-desc": "Структурная, глубинная и меняющая качество жизни.",
        "bento-box2-title": "Безопасное пространство",
        "bento-box2-desc": "Без осуждения. Без шаблонов. Только глубокая работа.",
        "blog-title": "Последние инсайты",
        "post1-date": "14 Июля",
        "post1-body": `<p>Представьте врача, который всю жизнь лечит симптомы, но никогда не задается вопросом, почему болезнь вообще появилась.</p>
                       <p>Именно эта мысль неожиданно пришла ко мне на випассане. И я вдруг поняла, почему когда-то ушла со второго курса медицинского института. Долгое время мне казалось, что это была ошибка. Но сейчас я вижу: если бы тогда осталась, скорее всего, я искала бы ответы только внутри одной системы. А мне всегда было тесно в одном объяснении.</p>
                       <p>Мне хотелось понимать человека целиком: не только тело, психику или эмоции, а то, как всё это связано между собой.</p>
                       <p>Именно поэтому сегодня на сессиях мне редко бывает достаточно самого запроса. За тревогой я ищу состояние. За состоянием — убеждения. За убеждениями — опыт, который когда-то сформировал человека. Потому что, когда меняется только симптом, жизнь часто очень быстро возвращает человека в ту же точку. А когда меняется состояние, начинают меняться и решения, и отношения, и сама жизнь.</p>`,
        "post2-date": "13 Июля",
        "post2-body": `<p>Сегодня на сессии был очень интересный момент. Ко мне пришла женщина, которая работает с людьми. В какой-то момент она начала бояться своей собственной работы.</p>
                       <p>Сначала могло показаться, что проблема именно в страхе. Но, как это часто бывает, страх оказался лишь вершиной айсберга. Во время проходки мы нашли то, что стояло за ним. Внутри жило переживание: «А вдруг мне придётся что-то объяснять, а мои объяснения не поймут?» Именно оно запускало всё состояние.</p>
                       <p>Но для меня на этом работа не заканчивается. Я не хочу, чтобы человек просто понял причину. Мне важно, чтобы у него появилась новая внутренняя опора. То, что в своём методе я называю «Секретным Ингредиентом». Это невозможно объяснить как технику или упражнение. Каждый человек находит его сам во время глубокого погружения.</p>
                       <p>И самое интересное начинается уже после сессии. Проходит неделя, месяц или даже больше. В какой-то ситуации снова включается старая программа. Раньше человек автоматически уходил в страх, тревогу или бессилие. Теперь происходит иначе. Он вспоминает свой «Секретный Ингредиент», возвращает на него внимание, и внутри словно что-то переключается. Меняется не мысль – сначала меняется состояние. А уже из нового состояния рождаются другие мысли, другие слова и другие решения.</p>`,
        "post3-date": "11 Июля",
        "post3-body": `<p>Иногда мне кажется, что человек приходит не тогда, когда готов меняться. А тогда, когда больше не может жить по-старому. За последние месяцы я много думала об этом.</p>
                       <p>Почему один человек годами терпит, хотя ему больно. Почему другой приходит на сессию после, казалось бы, совсем незначительного события. И постепенно я поняла одну вещь: У КАЖДОГО ЕСТЬ СВОЙ ПРЕДЕЛ. Только выглядит он по-разному. Для кого-то это развод. Для кого-то потеря близкого человека. Для кого-то очередной конфликт, после которого вдруг приходит мысль: «Я больше так не могу». Но дело не в самом событии. Оно лишь становится последней каплей.</p>
                       <p>Мы умеем терпеть. Привыкаем жить в напряжении. Привыкаем тревожиться, чувствовать себя недостаточно хорошими. И однажды это состояние становится настолько привычным, что мы перестаем замечать его. Нам начинает казаться, что именно так и живут все.</p>
                       <p>Мне кажется, прийти за помощью — это один из самых смелых шагов. Потому что гораздо легче продолжать убеждать себя, что «всё само пройдет», чем честно посмотреть внутрь и признать: мне нужна другая жизнь. Местом, где можно просто остановиться и спросить себя: «А как я на самом деле себя чувствую?»</p>`,
        "read-more": "Читать дальше →",
        "read-less": "Свернуть ↑",
        "book-title": "Записаться на консультацию",
        "book-note": "Начните свой путь к осознанности. Все сессии требуют предварительного подтверждения.",
        "footer-brand": "Elen Oz | Терапевт состояний"
    },
    en: {
        "nav-philosophy": "Philosophy",
        "nav-method": "The Method",
        "nav-book": "Book Session",
        "hero-subtitle": "State Therapist & Personal Coach",
        "hero-title": "Break the loop of automatic reactions.",
        "hero-desc": "Stop living in 'Groundhog Day.' Discover authentic therapy tailored to help you step out of survival mode and into conscious living.",
        "hero-btn": "Start Your Journey",
        "phil-title": "Why does life keep bringing you back to the same point?",
        "phil-card1-title": "The Symptom",
        "phil-card1-desc": "Emotional exhaustion and looping patterns are not the core issues; they are signals of the system.",
        "phil-card2-title": "The Analysis",
        "phil-card2-desc": "We look beneath the surface: examining not just reactions, but the underlying beliefs and emotional states.",
        "phil-card3-title": "The Way Out",
        "phil-card3-desc": "We build a renewed internal anchor—giving you the clarity and power to choose your responses.",
        "method-title": "My Approach",
        "method-desc": "Deep therapeutic work dismantling automatic reactions while discovering your personal anchor.",
        "bento-box1-title": "Inner Anchor",
        "bento-box1-desc": "Find a point of balance that stays with you forever.",
        "method-box-title": "State Therapy",
        "method-box-desc": "Structured, deep, and transformational.",
        "bento-box2-title": "Safe Space",
        "bento-box2-desc": "No judgment. No templates. Only deep, transformative work.",
        "blog-title": "Latest Insights",
        "post1-date": "July 14",
        "post1-body": `<p>Imagine a doctor who spends their whole life treating symptoms, but never asks why the disease appeared in the first place.</p>
                       <p>This exact thought struck me during a Vipassana retreat. Suddenly, I realized why I had dropped out of medical school during my second year. For a long time, I thought it was a mistake. But now I see: had I stayed, I would have searched for answers within a single rigid system. One explanation was always too narrow for me.</p>
                       <p>I wanted to understand the human being as a whole: not just the physical body, the psyche, or emotions, but how they intertwine.</p>
                       <p>That is why in sessions, addressing the superficial issue alone is rarely enough. Behind anxiety, I seek the state. Behind the state, beliefs. Behind beliefs, the experiences that shaped the person. When only the symptom changes, life quickly circles back to the same starting point. But when the state shifts, decisions, relationships, and life itself begin to transform.</p>`,
        "post2-date": "July 13",
        "post2-body": `<p>There was a very interesting moment during a session today. A woman who works closely with people came to me; at a certain point, she had become terrified of her own professional work.</p>
                       <p>At first glance, fear seemed to be the problem. But as is often the case, fear was merely the tip of the iceberg. Looking deeper, we discovered what lay underneath: a core fear of <em>"What if I have to explain myself, and they misunderstand me?"</em> That single worry ignited the entire state.</p>
                       <p>My work never stops at intellectualizing the cause. Knowing why is not enough; one must discover a new internal anchor. In my methodology, I call this the <strong>"Secret Ingredient."</strong> It cannot be taught as a simple exercise—each client discovers it during deep immersion.</p>
                       <p>The true transformation happens after the session. Weeks or months later, old triggers inevitably return. Previously, the client would spiral into helplessness or anxiety. Now, recalling their "Secret Ingredient," an internal shift occurs immediately. The state transforms first, and from that grounded state, clearer thoughts, words, and decisions emerge naturally.</p>`,
        "post3-date": "July 11",
        "post3-body": `<p>Sometimes it seems to me that a person seeks help not when they are ready to change, but when they can no longer live the old way. Over recent months, I have reflected deeply on this.</p>
                       <p>Why does one person endure pain for years, while another books a session after a seemingly minor event? Gradually, I realized: <strong>Everyone has their threshold.</strong> It simply manifests differently: a divorce, a loss, or an everyday argument after which the realization hits: "I cannot do this anymore." The event is never the cause—only the final straw.</p>
                       <p>We learn to tolerate. We adapt to perpetual tension, anxiety, and feeling inadequate until distress feels like normal life.</p>
                       <p>Seeking help is never a sign of weakness; it is one of the bravest choices a person can make. It is far easier to convince yourself that "it will pass on its own" than to look inward and admit: I need a different life. This space exists so you can pause and ask yourself honestly: <em>"How do I truly feel right now?"</em> Often, the greatest shifts begin with that single question.</p>`,
        "read-more": "Read more →",
        "read-less": "Show less ↑",
        "book-title": "Reserve Your Consultation",
        "book-note": "Begin your healing journey. All appointments are reviewed and pending manual confirmation.",
        "footer-brand": "Elen Oz | State Therapist"
    },
    tr: {
        "nav-philosophy": "Felsefe",
        "nav-method": "Yöntem",
        "nav-book": "Seans Al",
        "hero-subtitle": "Duygu Durum Terapisti & Kişisel Koç",
        "hero-title": "Otomatik tepki döngüsünü kırın.",
        "hero-desc": "Hayatta kalma modundan çıkıp bilinçli bir yaşama adım atmanıza yardımcı olacak terapi yaklaşımı.",
        "hero-btn": "Yolculuğa Başla",
        "phil-title": "Neden hayat sizi sürekli aynı noktaya getirir?",
        "phil-card1-title": "Belirti",
        "phil-card1-desc": "Duygusal tükenmişlik ve kısır döngüler asıl problem değil, sistemin verdiği sinyallerdir.",
        "phil-card2-title": "Analiz",
        "phil-card2-desc": "Yüzeyin ötesine bakıyoruz: Sadece tepkileri değil, ardındaki inanç ve duygu durumlarını inceliyoruz.",
        "phil-card3-title": "Çıkış Yolu",
        "phil-card3-desc": "Kendi içsel dayanağınızı oluşturarak kararlarınızın kontrolünü yeniden elinize alıyoruz.",
        "method-title": "Yaklaşımım",
        "method-desc": "Otomatik tepki kalıplarını çözümleyen ve içsel gücünüzü açığa çıkaran derin terapi çalışması.",
        "bento-box1-title": "İçsel Dayanak",
        "bento-box1-desc": "Sizinle sonsuza dek kalacak bir denge noktası bulun.",
        "method-box-title": "Duygu Durum Terapisi",
        "method-box-desc": "Net, derinlikli ve yaşam kalitesini dönüştüren bir süreç.",
        "bento-box2-title": "Güvenli Alan",
        "bento-box2-desc": "Yargılama yok. Şablonlar yok. Yalnızca derin ve dönüştürücü çalışma.",
        "blog-title": "Son İçgörüler",
        "post1-date": "14 Temmuz",
        "post1-body": `<p>Bütün hayatını semptomları tedavi etmeye adayan, ancak hastalığın neden ortaya çıktığını hiç sorgulamayan bir doktor düşünün.</p>
                       <p>Bu düşünce aklıma bir inziva sırasında geldi. Ve bir zamanlar tıp fakültesini ikinci sınıfta neden bıraktığımı birden anladım. Uzun süre bunun bir hata olduğunu sanmıştım. Oysa kalsaydım, cevapları yalnızca tek bir katı sistem içinde arayacaktım. Tek bir açıklama bana her zaman dar gelmişti.</p>
                       <p>İnsanı bir bütün olarak anlamak istiyordum: Yalnızca bedeni, zihni veya duyguları değil; hepsinin birbiriyle nasıl bağlandığını.</p>
                       <p>Bu yüzden seanslarımda yalnızca ilk şikayetle yetinmem. Kaygının ardındaki duygu durumunu, o durumun ardındaki inançları, inançların ardındaki geçmiş deneyimleri ararım. Çünkü yalnızca belirti değiştiğinde, hayat insanı hızla aynı döngüye geri iter. Ancak içsel durum değiştiğinde kararlar, ilişkiler ve yaşamın kendisi değişmeye başlar.</p>`,
        "post2-date": "13 Temmuz",
        "post2-body": `<p>Bugün seansta çok ilginç bir an yaşandı. İnsanlarla çalışan bir kadın danışanım geldi; bir noktada kendi işinden korkmaya başlamıştı.</p>
                       <p>İlk bakışta sorun korku gibi görünüyordu. Ancak korku buzdağının yalnızca görünen yüzüydü. Derine indiğimizde altında yatan asıl hissi bulduk: <em>"Ya bir şeyleri açıklamam gerekir ve onlar beni anlamazsa?"</em> Bütün kaygıyı başlatan şey buydu.</p>
                       <p>Benim için çalışma sadece nedeni anlamakla bitmez. Kişinin kendi içinde yeni bir dayanak noktası bulması gerekir. Yöntemimde buna <strong>"Gizli İçerik"</strong> diyorum. Bu bir teknik değil, derin bir farkındalıkla kişinin kendi keşfettiği bir güçtür.</p>
                       <p>Asıl dönüşüm seanstan sonra başlar. Haftalar sonra eski tetikleyici tekrar devreye girdiğinde, kişi otomatik olarak çaresizliğe kapılmak yerine bu içsel dayanağını hatırlar. Önce duygu durumu sakinleşir, ardından o sakin durumdan bambaşka kararlar ve tepkiler doğar.</p>`,
        "post3-date": "11 Temmuz",
        "post3-body": `<p>Bazen bana öyle geliyor ki insan değişmeye hazır olduğunda değil, artık eskisi gibi yaşayamayacak hale geldiğinde terapiye geliyor.</p>
                       <p>Neden biri acıya yıllarca katlanır da bir başkası küçük bir olaydan sonra destek arar? Zamanla anladım ki: <strong>Herkesin bir eşiği vardır.</strong> Kimi için boşanma, kimi için kayıp, kimi içinse sıradan bir tartışmadır o eşik. Yaşanan olay yalnızca bardağı taşıran son damladır.</p>
                       <p>Sabretmeye alışırız. Gergin yaşamaya, yetersiz hissetmeye o kadar alışırız ki bunu hayatın normali zannederiz.</p>
                       <p>Yardım istemek asla zayıflık değildir; aksine en cesur adımlardan biridir. "Zamanla geçer" diyerek kendini kandırmak yerine, dürüstçe yüzleşip başka bir yaşama ihtiyacım var diyebilmektir. Burası durup kendinize şu soruyu sorabileceğiniz bir alan: <em>"Gerçekten şu an nasıl hissediyorum?"</em> Bazen en büyük değişimler bu soruyla başlar.</p>`,
        "read-more": "Devamını oku →",
        "read-less": "Kapat ↑",
        "book-title": "Danışmanlık Randevusu Al",
        "book-note": "Tüm seanslar ön inceleme ve onaya tabidir.",
        "footer-brand": "Elen Oz | Duygu Durum Terapisti"
    }
};

let currentLang = 'ru'; // Aktif dili takip etmek için değişken

// --- 2. LANGUAGE SWITCHER LOGIC --- //
function setLanguage(lang) {
    currentLang = lang;

    // Normal metin (innerText) alanlarını güncelle
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // HTML içeren (innerHTML) paragraf/blog alanlarını güncelle
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Aktif dil değiştiğinde eğer makale "açık" (expanded) durumdaysa buton metnini ayarla
    document.querySelectorAll('.blog-toggle').forEach(button => {
        const card = button.closest('.blog-card');
        const excerpt = card.querySelector('.blog-excerpt');
        if (excerpt && excerpt.classList.contains('expanded')) {
            button.querySelector('span') ? button.querySelector('span').innerText = translations[lang]["read-less"] : button.innerText = translations[lang]["read-less"];
        }
    });

    // Aktif dil butonunun vurgusunu güncelle
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

// --- 3. ЧИТАТЬ ДАЛЬШЕ (READ MORE) AKORDEON MANTIĞI --- //
function initInsightToggles() {
    const toggleButtons = document.querySelectorAll('.blog-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.blog-card');
            const excerpt = card.querySelector('.blog-excerpt');

            if (!excerpt) return;

            const isCollapsed = excerpt.classList.contains('collapsed');
            
            // Eğer butonda span varsa span'i, yoksa butonun direkt text'ini seç
            const targetText = button.querySelector('span') || button;

            if (isCollapsed) {
                excerpt.classList.remove('collapsed');
                excerpt.classList.add('expanded');
                targetText.innerText = translations[currentLang]["read-less"];
            } else {
                excerpt.classList.remove('expanded');
                excerpt.classList.add('collapsed');
                targetText.innerText = translations[currentLang]["read-more"];
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
}

// --- 4. INITIALIZE ON PAGE LOAD --- //
document.addEventListener('DOMContentLoaded', () => {
    // Sayfa doğrudan Rusça açılacak şekilde ayarlandı
    setLanguage('ru');
    initInsightToggles();
});