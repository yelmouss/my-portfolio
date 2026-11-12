export const articles = [
  {
    slug: "preparer-projet-web",
    category: { fr: "Développement web", en: "Web development", ar: "تطوير الويب" },
    sources: [
      { title: "MDN — Accessibility", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility" },
      { title: "web.dev — Learn Performance", url: "https://web.dev/learn/performance" },
    ],
    content: {
      fr: {
        title: "Préparer un projet web : du besoin à la mise en ligne",
        description: "Une méthode concrète pour définir un site ou une application avant de choisir sa technologie.",
        sections: [
          { title: "Définir le problème et les utilisateurs", paragraphs: [
            "Commencez par décrire qui utilisera le produit, dans quelle situation et ce qui lui pose problème aujourd'hui. Pour un site de services, l'objectif peut être de recevoir des demandes qualifiées ; pour une application interne, de réduire les étapes nécessaires au traitement d'un dossier.",
            "Choisissez un indicateur observable, comme le nombre de formulaires valides ou le temps nécessaire à une tâche. Une mesure n'explique pas tout : complétez-la par des retours d'utilisateurs et vérifiez que les données collectées respectent leur confidentialité.",
          ] },
          { title: "Prioriser les parcours avant les fonctionnalités", paragraphs: [
            "Écrivez les étapes d'un parcours principal : trouver une prestation, comprendre son contenu, poser une question et recevoir une confirmation. Pour chaque étape, identifiez les informations nécessaires et ce qui doit se passer en cas d'erreur.",
            "Classez ensuite les besoins en indispensables pour la première version et améliorations ultérieures. Un formulaire utilisable peut être prioritaire sur un espace client complet. Précisez aussi qui fournit les textes et images, qui valide les livrables et qui gère les accès au domaine et à l'hébergement.",
          ] },
          { title: "Choisir une solution et préparer la livraison", paragraphs: [
            "Comparez les options selon le besoin réel : un site éditorial n'a pas forcément besoin d'une application sur mesure, tandis qu'un outil avec des rôles et des règles métier complexes peut justifier un développement spécifique. Considérez le coût des mises à jour, les licences et la capacité du propriétaire à modifier le contenu.",
            "Avant la mise en ligne, testez les liens et les formulaires sur mobile et au clavier, vérifiez les messages d'erreur et mesurez le chargement sur une connexion réaliste. Prévoyez des sauvegardes, un responsable des mises à jour et une procédure de récupération ; le lancement est le début de la maintenance, pas sa fin.",
          ] },
        ],
      },
      en: {
        title: "Planning a web project: from need to launch",
        description: "A practical way to define a website or application before choosing its technology.",
        sections: [
          { title: "Define the problem and the users", paragraphs: [
            "Start by describing who will use the product, in what situation and what makes their task difficult today. A service website might aim to receive relevant enquiries; an internal application might aim to reduce the steps needed to process a case.",
            "Choose an observable measure, such as valid form submissions or time spent on a task. A metric cannot explain everything: combine it with user feedback and check that any data collection respects privacy.",
          ] },
          { title: "Prioritise journeys before features", paragraphs: [
            "Write down the steps in a primary journey: find a service, understand it, ask a question and receive confirmation. For each step, identify the information needed and what should happen when something goes wrong.",
            "Separate essentials for the first release from later improvements. A usable form may matter more than a complete customer portal. Also decide who provides text and images, approves deliverables and controls the domain and hosting accounts.",
          ] },
          { title: "Choose an approach and prepare delivery", paragraphs: [
            "Compare options against the actual need: an editorial website may not require a custom application, while a tool with roles and complex business rules might. Consider update costs, licences and the owner's ability to edit content.",
            "Before launch, test links and forms on a phone and with a keyboard, check error messages and measure loading on a realistic connection. Plan backups, assign update responsibilities and document recovery; launch is the start of maintenance, not the end.",
          ] },
        ],
      },
      ar: {
        title: "التخطيط لمشروع ويب: من الحاجة إلى النشر",
        description: "طريقة عملية لتحديد موقع أو تطبيق قبل اختيار التقنية.",
        sections: [
          { title: "حدد المشكلة والمستخدمين", paragraphs: [
            "ابدأ بوصف مستخدمي المنتج والظروف التي سيستخدمونه فيها والصعوبة التي يواجهونها اليوم. قد يكون هدف موقع خدمات استقبال طلبات مناسبة، بينما قد يهدف تطبيق داخلي إلى تقليل خطوات معالجة ملف.",
            "اختر مؤشراً يمكن ملاحظته، مثل عدد النماذج الصحيحة أو الوقت اللازم لإنجاز مهمة. لا يفسر المؤشر كل شيء؛ اجمع آراء المستخدمين أيضاً وتأكد من احترام الخصوصية عند جمع البيانات.",
          ] },
          { title: "رتب مسارات المستخدم قبل الوظائف", paragraphs: [
            "اكتب خطوات المسار الأساسي: العثور على خدمة وفهمها وطرح سؤال وتلقي تأكيد. حدد المعلومات اللازمة في كل خطوة وما ينبغي أن يحدث عند وقوع خطأ.",
            "افصل الضروري للإصدار الأول عن التحسينات اللاحقة. قد يكون نموذج سهل الاستخدام أهم من بوابة عملاء كاملة. حدد كذلك من يوفر النصوص والصور ويعتمد التسليمات ويتحكم في حسابات النطاق والاستضافة.",
          ] },
          { title: "اختر الحل واستعد للتسليم", paragraphs: [
            "قارن الخيارات وفق الحاجة الفعلية: لا يحتاج الموقع التحريري بالضرورة إلى تطبيق مخصص، بينما قد تبرر الأدوار وقواعد العمل المعقدة تطويراً خاصاً. ضع في الحسبان تكاليف التحديث والتراخيص وقدرة صاحب الموقع على تعديل المحتوى.",
            "قبل النشر، اختبر الروابط والنماذج على الهاتف وباستخدام لوحة المفاتيح، وتحقق من رسائل الخطأ وسرعة التحميل على اتصال واقعي. خطط للنسخ الاحتياطية وحدد مسؤول التحديثات وطريقة الاستعادة؛ النشر بداية الصيانة وليس نهايتها.",
          ] },
        ],
      },
    },
  },
  {
    slug: "utiliser-ia-developpement",
    category: { fr: "Intelligence artificielle", en: "Artificial intelligence", ar: "الذكاء الاصطناعي" },
    sources: [
      { title: "OWASP — LLM Prompt Injection", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
      { title: "NIST — AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    ],
    content: {
      fr: {
        title: "Utiliser l'IA pour développer sans perdre le contrôle",
        description: "Comment cadrer une demande, vérifier une réponse et protéger les données dans un flux de développement assisté.",
        sections: [
          { title: "Confier une tâche délimitée", paragraphs: [
            "Un assistant peut aider à expliquer un message d'erreur, proposer des cas de test ou comparer des approches. Décrivez le résultat attendu, les contraintes techniques et un exemple d'entrée et de sortie. Une demande limitée est plus facile à vérifier qu'une réécriture complète du projet.",
            "Fournissez seulement le contexte nécessaire. Ne transmettez pas de clés, de données personnelles ou de code confidentiel à un service externe sans autorisation et sans avoir vérifié ses conditions de traitement des données.",
          ] },
          { title: "Traiter la réponse comme une proposition", paragraphs: [
            "Une réponse plausible peut contenir une API inexistante, une faille ou une hypothèse incorrecte. Consultez la documentation de la version utilisée, lisez les changements et exécutez les tests pertinents. Ajoutez un cas qui reproduit le problème initial ainsi que les erreurs et limites importantes.",
            "Pour une modification de base de données, vérifiez notamment la migration, les permissions et la possibilité de retour arrière. Pour un texte produit avec l'IA, vérifiez les faits et les sources : la génération ne constitue pas une preuve d'exactitude.",
          ] },
          { title: "Garder des frontières de sécurité", paragraphs: [
            "Du contenu externe, tel qu'une page web ou un document récupéré par un assistant, peut contenir des instructions malveillantes. Traitez ce contenu comme des données non fiables, pas comme une autorisation d'exécuter des commandes ou de divulguer des informations.",
            "Limitez les droits des outils, demandez une validation humaine avant les actions sensibles et conservez un moyen d'examiner les changements. Si une suggestion échoue aux contrôles, corrigez-la ou abandonnez-la plutôt que de contourner les protections.",
          ] },
        ],
      },
      en: {
        title: "Using AI in development without losing control",
        description: "How to scope a request, verify a response and protect data in an AI-assisted workflow.",
        sections: [
          { title: "Assign a bounded task", paragraphs: [
            "An assistant can help explain an error, suggest test cases or compare approaches. Describe the expected result, technical constraints and an example input and output. A bounded request is easier to verify than rewriting an entire project.",
            "Provide only the context required. Do not send keys, personal information or confidential code to an external service without permission and without checking how the service handles data.",
          ] },
          { title: "Treat the answer as a proposal", paragraphs: [
            "A plausible answer may contain a nonexistent API, a vulnerability or a wrong assumption. Check the documentation for the version in use, read the changes and run relevant tests. Include a case reproducing the original problem and important errors and boundaries.",
            "For a database change, check the migration, permissions and rollback plan. For AI-generated text, verify facts and sources: generation is not evidence that a claim is accurate.",
          ] },
          { title: "Keep security boundaries", paragraphs: [
            "External content, such as a webpage or document retrieved by an assistant, can contain malicious instructions. Treat it as untrusted data, not permission to run commands or disclose information.",
            "Limit tool permissions, require human approval for sensitive actions and retain a way to review changes. If a suggestion fails checks, fix or discard it rather than bypassing safeguards.",
          ] },
        ],
      },
      ar: {
        title: "استخدام الذكاء الاصطناعي في التطوير مع الحفاظ على التحكم",
        description: "كيف تحدد الطلب وتراجع الإجابة وتحمي البيانات أثناء التطوير بمساعدة الذكاء الاصطناعي.",
        sections: [
          { title: "حدد مهمة واضحة", paragraphs: [
            "يمكن للمساعد شرح رسالة خطأ أو اقتراح حالات اختبار أو مقارنة حلول. صف النتيجة المطلوبة والقيود التقنية ومثالاً للمدخلات والمخرجات. يسهل التحقق من طلب محدود أكثر من إعادة كتابة مشروع كامل.",
            "قدم السياق الضروري فقط. لا ترسل المفاتيح أو البيانات الشخصية أو الشيفرة السرية إلى خدمة خارجية دون إذن ودون مراجعة طريقة تعاملها مع البيانات.",
          ] },
          { title: "اعتبر الإجابة اقتراحاً", paragraphs: [
            "قد تتضمن إجابة مقنعة واجهة غير موجودة أو ثغرة أو افتراضاً خاطئاً. راجع وثائق الإصدار المستخدم واقرأ التغييرات وشغّل الاختبارات المناسبة. أضف حالة تعيد إنتاج المشكلة الأصلية وحالات الأخطاء والحدود المهمة.",
            "عند تغيير قاعدة بيانات، تحقق من الترحيل والصلاحيات وخطة التراجع. وعند إنشاء نص بالذكاء الاصطناعي، تحقق من الحقائق والمصادر؛ توليد النص ليس دليلاً على صحة المعلومات.",
          ] },
          { title: "حافظ على حدود الأمان", paragraphs: [
            "قد يحتوي المحتوى الخارجي، مثل صفحة أو مستند يسترجعه المساعد، على تعليمات خبيثة. تعامل معه كبيانات غير موثوقة لا كإذن لتنفيذ أوامر أو كشف معلومات.",
            "قلل صلاحيات الأدوات واطلب موافقة بشرية قبل الإجراءات الحساسة واحتفظ بطريقة لمراجعة التغييرات. إذا فشل اقتراح في الفحص، أصلحه أو ارفضه بدلاً من تجاوز وسائل الحماية.",
          ] },
        ],
      },
    },
  },
  {
    slug: "tests-maintenance-logiciel",
    category: { fr: "Logiciel", en: "Software", ar: "البرمجيات" },
    sources: [
      { title: "OWASP — Authorization Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" },
      { title: "PostgreSQL — Backup and Restore", url: "https://www.postgresql.org/docs/current/backup.html" },
    ],
    content: {
      fr: {
        title: "Rendre une application plus fiable : tests, erreurs et sauvegardes",
        description: "Un plan de maintenance pragmatique pour les fonctionnalités et les données importantes.",
        sections: [
          { title: "Tester les comportements qui comptent", paragraphs: [
            "Commencez par les parcours dont l'échec coûte le plus : connexion, modification de données, commande ou envoi d'un formulaire. Pour chacun, testez le cas attendu, une entrée invalide et les permissions d'un utilisateur qui ne devrait pas accéder à l'action.",
            "Un test unitaire convient à une règle isolée ; un test d'intégration vérifie la collaboration entre composants ; un test de bout en bout couvre un parcours complet. Choisissez le niveau qui détecte le risque sans multiplier des tests fragiles sur des détails visuels.",
          ] },
          { title: "Prévoir les échecs et les accès", paragraphs: [
            "Un réseau ou un service tiers peut être indisponible. Affichez un message compréhensible, évitez de présenter l'opération comme réussie et prévoyez une nouvelle tentative lorsque c'est approprié. Journalisez les erreurs utiles au diagnostic sans enregistrer de secrets ni de données sensibles.",
            "Contrôlez les droits côté serveur pour chaque opération sensible : masquer un bouton ne protège pas une API. Réexaminez les accès des comptes et des services lorsque les responsabilités changent.",
          ] },
          { title: "Sauvegarder et vérifier la restauration", paragraphs: [
            "Définissez quelles données sauvegarder, à quelle fréquence et combien de temps les conserver selon la perte acceptable pour l'activité. Protégez les sauvegardes et conservez au moins une copie séparée du système principal.",
            "Une sauvegarde n'est utile que si elle peut être restaurée. Effectuez périodiquement une restauration dans un environnement isolé, vérifiez les données obtenues et documentez qui contacter et quelles étapes suivre en cas d'incident.",
          ] },
        ],
      },
      en: {
        title: "Making an application reliable: tests, errors and backups",
        description: "A practical maintenance plan for important features and data.",
        sections: [
          { title: "Test the behaviours that matter", paragraphs: [
            "Start with journeys where failure is costly: sign-in, changing data, checkout or submitting a form. For each, test the expected case, invalid input and permissions for someone who should not be able to perform the action.",
            "A unit test suits an isolated rule; an integration test checks components working together; an end-to-end test covers a complete journey. Choose the level that detects the risk without multiplying fragile tests of visual details.",
          ] },
          { title: "Plan for failure and access", paragraphs: [
            "A network or third-party service can become unavailable. Show a clear message, do not report the operation as successful and offer a retry where appropriate. Log errors useful for diagnosis without recording secrets or sensitive data.",
            "Check permissions on the server for every sensitive operation: hiding a button does not protect an API. Review account and service access when responsibilities change.",
          ] },
          { title: "Back up and verify restoration", paragraphs: [
            "Decide what to back up, how often and how long to retain it based on the data loss the business can tolerate. Protect backups and keep at least one copy separate from the primary system.",
            "A backup is useful only if it can be restored. Periodically restore it in an isolated environment, verify the resulting data and document who to contact and what steps to take during an incident.",
          ] },
        ],
      },
      ar: {
        title: "زيادة موثوقية التطبيق: الاختبارات والأخطاء والنسخ الاحتياطية",
        description: "خطة صيانة عملية للوظائف والبيانات المهمة.",
        sections: [
          { title: "اختبر السلوكيات المهمة", paragraphs: [
            "ابدأ بالمسارات التي يسبب فشلها ضرراً أكبر: تسجيل الدخول أو تعديل البيانات أو الطلب أو إرسال نموذج. اختبر لكل مسار الحالة المتوقعة والمدخلات غير الصالحة وصلاحيات مستخدم لا ينبغي أن ينفذ الإجراء.",
            "يناسب اختبار الوحدة قاعدة منفردة، ويتحقق اختبار التكامل من تعاون المكونات، ويغطي اختبار المسار الكامل رحلة المستخدم. اختر المستوى الذي يكشف الخطر دون الإكثار من اختبارات هشة للتفاصيل البصرية.",
          ] },
          { title: "استعد للأخطاء واضبط الوصول", paragraphs: [
            "قد تنقطع الشبكة أو تتعطل خدمة خارجية. اعرض رسالة واضحة ولا تعرض العملية كأنها نجحت، وأتح إعادة المحاولة عند ملاءمتها. سجل الأخطاء المفيدة للتشخيص دون تسجيل الأسرار أو البيانات الحساسة.",
            "تحقق من الصلاحيات على الخادم لكل عملية حساسة؛ إخفاء الزر لا يحمي واجهة API. راجع وصول الحسابات والخدمات عند تغير المسؤوليات.",
          ] },
          { title: "انسخ البيانات وتحقق من استعادتها", paragraphs: [
            "حدد البيانات التي يجب نسخها وتكرار النسخ ومدة الاحتفاظ وفق مقدار فقد البيانات المقبول للنشاط. احم النسخ واحتفظ بنسخة واحدة على الأقل منفصلة عن النظام الأساسي.",
            "لا تفيد النسخة إلا إذا أمكن استعادتها. جرب الاستعادة دورياً في بيئة معزولة وتحقق من البيانات الناتجة ووثق الأشخاص الذين يجب الاتصال بهم والخطوات اللازمة عند وقوع حادث.",
          ] },
        ],
      },
    },
  },
  {
    slug: "diagnostic-seo",
    category: { fr: "SEO", en: "SEO", ar: "تحسين محركات البحث" },
    sources: [
      { title: "Google Search Central — SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { title: "Google Search Central — Helpful Content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { title: "Google Search Console — URL Inspection", url: "https://support.google.com/webmasters/answer/9012289" },
    ],
    content: {
      fr: {
        title: "Diagnostiquer le SEO d'un site sans promettre la première place",
        description: "Une démarche pour examiner l'indexation, le contenu et l'expérience avant de prioriser les corrections.",
        sections: [
          { title: "Commencer par les pages importantes", paragraphs: [
            "Choisissez quelques URL correspondant aux besoins réels des visiteurs : accueil, service principal, guide utile ou fiche produit. Vérifiez qu'elles sont accessibles, qu'elles renvoient le bon statut et que la navigation interne permet de les trouver.",
            "Dans Search Console, l'inspection d'URL aide à examiner l'état connu par Google et les éventuels problèmes d'exploration ou d'indexation. Une URL présente dans un sitemap n'est pas nécessairement indexée, et une page indexée n'est pas assurée d'obtenir du trafic.",
          ] },
          { title: "Examiner les réponses apportées aux visiteurs", paragraphs: [
            "Pour chaque page, demandez-vous quelle question elle résout et si le visiteur peut agir avec les informations fournies. Ajoutez des exemples vérifiables, des explications spécifiques et des liens pertinents lorsque cela aide ; évitez de créer plusieurs pages qui répètent la même réponse en changeant seulement une ville ou un mot-clé.",
            "Utilisez des titres descriptifs et une structure de rubriques logique. Les images importantes doivent avoir un texte alternatif adapté à leur fonction. Les données structurées peuvent aider à décrire une page, mais elles ne remplacent pas un contenu utile et ne garantissent pas un affichage enrichi.",
          ] },
          { title: "Prioriser et mesurer les changements", paragraphs: [
            "Consignez le problème observé, les URL concernées et la correction proposée. Traitez d'abord les obstacles qui empêchent l'accès ou la compréhension, puis améliorez le contenu et l'expérience mobile. Vérifiez les modifications après déploiement plutôt que de supposer qu'elles sont actives.",
            "Suivez les impressions, clics et requêtes dans Search Console sur une période cohérente, en tenant compte de la saisonnalité et des autres changements. Ces données orientent le travail, mais aucun prestataire ne contrôle le classement de Google.",
          ] },
        ],
      },
      en: {
        title: "Diagnosing website SEO without promising first place",
        description: "A process for reviewing indexing, content and experience before prioritising fixes.",
        sections: [
          { title: "Start with important pages", paragraphs: [
            "Select a few URLs that address real visitor needs: the homepage, a primary service, a useful guide or a product page. Check that they are accessible, return the correct status and can be found through internal navigation.",
            "Search Console's URL Inspection tool helps examine Google's known state and possible crawling or indexing issues. A URL in a sitemap is not necessarily indexed, and an indexed page is not guaranteed traffic.",
          ] },
          { title: "Review the answers visitors receive", paragraphs: [
            "For each page, ask which question it answers and whether visitors can act on the information provided. Add verifiable examples, specific explanations and relevant links where useful; avoid creating several pages that repeat the same answer with only a city or keyword changed.",
            "Use descriptive titles and a logical heading structure. Important images need alternative text appropriate to their purpose. Structured data can help describe a page, but cannot replace useful content or guarantee a rich result.",
          ] },
          { title: "Prioritise and measure changes", paragraphs: [
            "Record the observed issue, affected URLs and proposed fix. Address barriers to access or understanding first, then improve content and the mobile experience. Verify changes after deployment rather than assuming they are live.",
            "Monitor impressions, clicks and queries in Search Console over a consistent period, accounting for seasonality and other changes. These signals guide work, but no provider controls Google's rankings.",
          ] },
        ],
      },
      ar: {
        title: "تشخيص SEO للموقع دون الوعد بالمركز الأول",
        description: "خطوات لمراجعة الفهرسة والمحتوى والتجربة قبل ترتيب الإصلاحات.",
        sections: [
          { title: "ابدأ بالصفحات المهمة", paragraphs: [
            "اختر بعض الروابط التي تلبي احتياجات الزوار الفعلية: الصفحة الرئيسية أو خدمة أساسية أو دليل مفيد أو صفحة منتج. تحقق من إمكانية الوصول إليها ورمز الاستجابة الصحيح وإمكانية العثور عليها من التنقل الداخلي.",
            "تساعد أداة فحص عنوان URL في Search Console على مراجعة حالة الصفحة المعروفة لدى Google ومشكلات الزحف أو الفهرسة المحتملة. وجود رابط في خريطة الموقع لا يعني بالضرورة فهرسته، والفهرسة لا تضمن الزيارات.",
          ] },
          { title: "راجع الإجابات المقدمة للزائر", paragraphs: [
            "اسأل عن السؤال الذي تجيب عنه كل صفحة وما إذا كانت المعلومات تمكن الزائر من اتخاذ خطوة. أضف أمثلة قابلة للتحقق وشروحاً محددة وروابط مناسبة عند فائدتها؛ وتجنب إنشاء صفحات تكرر الإجابة نفسها مع تغيير المدينة أو كلمة البحث فقط.",
            "استخدم عناوين وصفية وتسلسلاً منطقياً للعناوين الفرعية. تحتاج الصور المهمة إلى نص بديل يناسب وظيفتها. يمكن للبيانات المنظمة المساعدة في وصف الصفحة، لكنها لا تعوض المحتوى المفيد ولا تضمن نتيجة غنية.",
          ] },
          { title: "رتب التغييرات وقس نتائجها", paragraphs: [
            "وثق المشكلة المرصودة والروابط المتأثرة والإصلاح المقترح. عالج أولاً العوائق التي تمنع الوصول أو الفهم ثم حسّن المحتوى وتجربة الهاتف. تحقق من التغييرات بعد النشر بدلاً من افتراض أنها أصبحت فعالة.",
            "تابع مرات الظهور والنقرات وطلبات البحث في Search Console خلال فترة متسقة، مع مراعاة الموسمية والتغييرات الأخرى. تساعد هذه البيانات في توجيه العمل، لكن لا يتحكم أي مقدم خدمة في ترتيب Google.",
          ] },
        ],
      },
    },
  },
];
