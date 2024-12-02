import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


// Définissez vos traductions en mémoire
const resources = {
  en: {
    translation: {
      "service1": "Advanced Chemical Analysis",
      "service1Description": "We offer a comprehensive range of advanced chemical analyses to ensure the quality and purity of monetary components.",
      "service2": "Research and Development",
      "service2Description": "Our research and development team continually works on innovating and improving chemical techniques in the monetary field.",
      "service3": "Consultation Expertise",
      "service3Description": "Our inventory includes automated machines for money development, advanced temperature regulators, and sophisticated chemical fusion apparatus.",
      "service4": "Professional Training",
      "service4Description": "We offer professional training programs to educate monetary professionals on the latest technological and technical advancements.",
      "service5": "Quality Control",
      "service5Description": "Our laboratory is equipped with the most advanced technologies to perform rigorous quality control to ensure compliance with global standards.",
      "OffersYou": `We offer you the best chemical solution for cleaning banknotes containing any type of security color.`,
      "ChimicalSolution": `Chemical solution for cleaning banknotes containing any type of security color`,
      "Thisisananti-laundering": `This is an anti-laundering chemical for bank notes designed to remove excess substance that
       coats them. Universal SSD solution works best when combined with Activation Powder`,
      "Our Location": "Our Location",
      "WelcometoLaboMonétaire": "Welcome to the Monetary Laboratory",
      "home": "Home",
      "whoWeAre": "Who We Are",
      "services": "Services",
      "testimonials": "Testimonials",
      "videos": "Videos",
      "contact": "Contact",
      "SpecializationSSDSolutions": "Excellence in Monetary Chemistry and SSD Solutions",
      "Wearealaboratoryspecializing": `The Monetary Laboratory, an unrivaled authority in the realm of monetary chemistry for several decades,
      is acclaimed for its unparalleled results and a plethora of laudatory testimonials. 
      With a cadre of highly skilled technicians, our laboratory extends its services globally,
      with a notable presence in North Africa and across the continent, meeting the discerning needs of our esteemed clientele. 
      Under the visionary leadership of Dr.Tony and his distinguished team, the laboratory proudly operates from its prestigious headquarters at 2 Avenue Gabriel, 75010 Paris, France.`,
      "AdvancedChemical": "Pioneering Chemical Analyses and Advanced Techniques",
      "Ourlaboratory": `Our laboratory conducts cutting- edge chemical, microbiological, and molecular analyses,
    utilizing the latest technologies. 
      We employ a sophisticated approach with microorganisms and chemical cells to deliver precise and reliable analyses,
    meticulously integrating results with advanced statistical treatments applied to banknotes. 
      Harnessing the power of spectrophotometry and other state- of - the - art molecular chemistry techniques,
  we perform rigorous toxicity and ecotoxicity assessments, alongside comprehensive quality and authenticity controls,
  ensuring the highest level of integrity in our results.`,
      "High-Quality": "Exquisite Products and Superior Equipment",
      "Weoffer": `We offer an extensive array of premium products and cutting- edge equipment to address the diverse demands in the field of monetary chemistry. 
      Our distinguished offerings include the universal SSD solution(D6 and D7), the SSD PK58 solution for preservation,
  along with other exceptional products such as Vectrol powder, ZUTA S4 paste, and Castrox Oxide. 
      Our equipment inventory boasts automated machines for money development, advanced temperature regulators, and sophisticated chemical fusion apparatus,
  all engineered to deliver optimal outcomes for our clientele.`,
      "WhoWeAreParagraph": `The Monetary Laboratory, an international leader in monetary chemistry for several decades, is renowned for its exceptional results and numerous commendations.Equipped with a team of highly qualified technicians, the laboratory extends its services worldwide, particularly in North Africa and across the continent, to meet the needs of its clients.Under the enlightened leadership of Dr.Tony and his associates, the laboratory proudly operates from its headquarters at 2 Avenue Gabriel, 75010 Paris, France.`
    }
  },
  fr: {
    translation: {
      "service1": "Analyses Chimiques Avancées",
      "service1Description": "Nous proposons une gamme complète d'analyses chimiques avancées pour garantir la qualité et la pureté des composants monétaires.",
      "service2": "Recherche et Développement",
      "service2Description": "Notre équipe de recherche et développement travaille continuellement à innover et à améliorer les techniques chimiques dans le domaine monétaire.",
      "service3": "Expertise en Consultation",
      "service3Description": "Notre inventaire comprend des machines automatisées pour le développement de l'argent, des régulateurs de température avancés et des appareils sophistiqués de fusion chimique.",
      "service4": "Formation Professionnelle",
      "service4Description": "Nous proposons des programmes de formation professionnelle pour éduquer les professionnels monétaires sur les dernières avancées technologiques et techniques.",
      "service5": "Contrôle de Qualité",
      "service5Description": "Notre laboratoire est équipé des technologies les plus avancées pour effectuer un contrôle de qualité rigoureux afin de garantir la conformité aux normes mondiales.",
      "OffersYou": `Nous vous offrons la meilleure solution chimique pour nettoyer les billets de banque contenant tout type de couleur de sécurité.`,
      "ChimicalSolution": `Solution chimique pour nettoyer les billets de banque contenant tout type de couleur de sécurité`,
      "Thisisananti-laundering": `Il s'agit d'un produit chimique anti-blanchiment pour les billets de banque conçu pour éliminer l'excès de substance qui les recouvre. La solution SSD universelle fonctionne mieux lorsqu'elle est combinée avec de la poudre d'activation`,
      "Our Location": "Notre Emplacement",
      "WelcometoLaboMonétaire": "Bienvenue au Laboratoire Monétaire",
      "home": "Accueil",
      "whoWeAre": "Qui sommes-nous",
      "services": "Services",
      "testimonials": "Témoignages",
      "videos": "Vidéos",
      "contact": "Contact",
      "SpecializationSSDSolutions": "Excellence en Chimie Monétaire et Solutions SSD",
      "Wearealaboratoryspecializing": `Le Laboratoire Monétaire, numéro un international dans le domaine de la chimie monétaire depuis plusieurs décennies,
  est salué pour ses résultats exceptionnels et ses nombreux témoignages élogieux. 
      Doté d'une équipe de techniciens hautement qualifiés, le laboratoire déploie ses services à l'échelle mondiale,
  notamment en Afrique du Nord et dans le reste du continent, afin de répondre aux besoins exigeants de sa clientèle distinguée. 
      Sous la direction éclairée du Dr Tony et de son équipe éminente, le laboratoire est fier de son siège social situé au 2 Avenue Gabriel, 75010 Paris, France.`,
      "AdvancedChemical": "Analyses Chimiques Pionnières et Techniques Avancées",
      "Ourlaboratory": `Notre laboratoire réalise des analyses chimiques, microbiologiques et moléculaires à la pointe de la technologie,
  en utilisant les technologies les plus récentes. 
      Nous adoptons une approche sophistiquée avec des micro - organismes et des cellules chimiques pour fournir des analyses précises et fiables,
  intégrant méticuleusement les résultats avec des traitements statistiques avancés appliqués aux billets de banque. 
      En exploitant la puissance de la spectrophotométrie et d'autres techniques de chimie moléculaire de pointe, 
      nous effectuons des évaluations rigoureuses de la toxicité et de l'écotoxicité, ainsi que des contrôles complets de qualité et d'authenticité,
  garantissant le plus haut niveau d'intégrité dans nos résultats.`,
      "High-Quality": "Produits Exquis et Équipements Supérieurs",
      "Weoffer": `Nous proposons une vaste gamme de produits de qualité supérieure et d'équipements de pointe pour répondre aux diverses exigences dans le domaine de la chimie monétaire. 
      Nos offres distinguées incluent la solution SSD universelle (D6 et D7), la solution SSD PK58 pour la conservation, 
      ainsi que d'autres produits exceptionnels tels que la poudre Vectrol, la pâte ZUTA S4, et l'Oxyde de Castrox. 
      Notre inventaire d'équipements comprend des machines automatisées pour le développement de l'argent, des régulateurs de température avancés, 
      et des appareils sophistiqués de fusion chimique, tous conçus pour offrir des résultats optimaux à notre clientèle.`,
      "WhoWeAreParagraph": `Le Laboratoire Monétaire, numéro un international dans le domaine de la chimie monétaire depuis plusieurs décennies, est reconnu pour ses résultats exceptionnels et ses nombreux témoignages élogieux. Doté d'une équipe de techniciens hautement qualifiés, le laboratoire déploie ses services à travers le monde, notamment en Afrique du Nord et dans le reste du continent, pour répondre aux besoins de sa clientèle. Sous la direction éclairée du Dr Tony et de ses collaborateurs, le laboratoire est fier de son siège social situé au 2 Avenue Gabriel, 75010 Paris, France.`,
    }
  },
  ar: {
    translation: {
      "service1": "تحليلات كيميائية متقدمة",
      "service1Description": "نقدم مجموعة شاملة من التحاليل الكيميائية المتقدمة لضمان جودة ونقاء المكونات النقدية.",
      "service2": "البحث والتطوير",
      "service2Description": "يعمل فريق البحث والتطوير لدينا باستمرار على الابتكار وتحسين التقنيات الكيميائية في مجال النقود.",
      "service3": "خبرة الاستشارات",
      "service3Description": "يتضمن مخزوننا آلات متطورة لتطوير النقود، ومنظمات حرارة متقدمة، وأجهزة دمج كيميائي معقدة.",
      "service4": "التدريب المهني",
      "service4Description": "نقدم برامج تدريب مهني لتعليم المحترفين في مجال النقود عن أحدث التطورات التكنولوجية والفنية.",
      "service5": "مراقبة الجودة",
      "service5Description": "يتمتع مختبرنا بأحدث التقنيات لإجراء مراقبة جودة صارمة لضمان الامتثال للمعايير العالمية.",
      "OffersYou": `نحن نقدم لك أفضل حل كيميائي لتنظيف الأوراق النقدية التي تحتوي على أي نوع من الألوان الأمنية.`,
      "ChimicalSolution": `حل كيميائي لتنظيف الأوراق النقدية التي تحتوي على أي نوع من الألوان الأمنية`,
      "Thisisananti-laundering": `هذا هو مبيض كيميائي للأوراق النقدية مصمم لإزالة المادة الزائدة التي تغطيها. تعمل الحلول SSD العالمية بشكل أفضل عندما تتم مزجها مع مسحوق التنشيط`,
      "Our Location": "موقعنا",
      "WelcometoLaboMonétaire": "مرحبًا بكم في مختبر النقد",
      "home": "الصفحة الرئيسية",
      "whoWeAre": "من نحن",
      "services": "الخدمات",
      "testimonials": "الشهادات",
      "videos": "الفيديوهات",
      "contact": "اتصل بنا",
      "SpecializationSSDSolutions": "التفوق في الكيمياء النقدية وحلول SSD",
      "Wearealaboratoryspecializing": `يُعد مختبر النقد الرائد العالمي في مجال الكيمياء النقدية على مدى عقود، 
      مشهورًا بنتائجه الاستثنائية والعديد من الشهادات المشيدة. 
      بفضل فريق من الفنيين ذوي الكفاءة العالية، يقوم المختبر بتقديم خدماته على مستوى العالم، 
      مع تواجد ملحوظ في شمال إفريقيا وباقي القارة، لتلبية احتياجات عملائه المرموقين. 
      تحت القيادة الرشيدة للدكتور توني وفريقه المميز، يفتخر المختبر بمقره الرئيسي الواقع في 2 شارع غابرييل، 75010 باريس، فرنسا.`,
      "AdvancedChemical": "تحليلات كيميائية متقدمة وتقنيات رائدة",
      "Ourlaboratory": `يجري مختبرنا تحليلات كيميائية وميكروبيولوجية وجزيئية متقدمة باستخدام أحدث التقنيات. 
      نتبنى نهجًا متطورًا باستخدام الكائنات الدقيقة والخلايا الكيميائية لتقديم تحليلات دقيقة وموثوقة، 
      مع دمج النتائج بعناية مع المعالجات الإحصائية المتقدمة المطبقة على الأوراق النقدية. 
      باستغلال القوة التحليلية للطيف الضوئي وتقنيات الكيمياء الجزيئية الأخرى المتقدمة، 
      نقوم بإجراء تقييمات دقيقة للسمية وسمية البيئة، إلى جانب اختبارات شاملة للجودة والأصالة، 
      مما يضمن أعلى مستوى من النزاهة في نتائجنا.`,
      "High-Quality": "منتجات فائقة الجودة ومعدات متطورة",
      "Weoffer": `نحن نقدم مجموعة واسعة من المنتجات الممتازة والمعدات المتطورة لتلبية الاحتياجات المتنوعة في مجال الكيمياء النقدية. 
      تشمل عروضنا البارزة الحل الشامل SSD (D6 و D7)، وحل SSD PK58 للحفظ، 
      بالإضافة إلى منتجات أخرى استثنائية مثل مسحوق Vectrol، ومعجون ZUTA S4، وأكسيد Castrox. 
      يتضمن مخزوننا من المعدات آلات أوتوماتيكية لتطوير الأموال، ومنظمات حرارة متقدمة، 
      وأجهزة دمج كيميائي متطورة، جميعها مصممة لتحقيق نتائج مثالية لعملائنا.`,
      "WhoWeAreParagraph": `يُعد مختبر النقد الرائد الدولي في مجال الكيمياء النقدية على مدى عقود، ويُعرف بنتائجه الاستثنائية والعديد من الشهادات المشيدة. وبفضل فريق من الفنيين ذوي الكفاءة العالية، يقوم المختبر بتقديم خدماته في جميع أنحاء العالم، وخاصة في شمال إفريقيا وباقي القارة، لتلبية احتياجات عملائه. تحت القيادة الرشيدة للدكتور توني وزملائه، يفتخر المختبر بمقره الرئيسي الواقع في 2 شارع غابرييل، 75010 باريس، فرنسا.`,
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        return value;
      }
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie']
    }
  });

export default i18n;