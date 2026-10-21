// Landing page for families whose child is about to leave Infants and Toddlers
// (Part C) at age three. Community partners hand out a printed flyer whose QR
// code points at /go/<code>, which redirects here with utm_source=<code>. Codes
// are short and random so a URL, analytics row or sign-up email never names the
// partner, and the page itself never names the partner either. The code ->
// partner map in referrals/referrals.json is only used for the /go redirects.

export type Lang = 'en' | 'es';

export const APP_IFSP_URL = 'https://app.slingshotiep.com/ifsp';

export function copy(lang: Lang) {
  return lang === 'es' ? ES : EN;
}

const EN = {
  switchLabel: 'En español',
  title: 'Is your child turning 3 soon?',
  subtitle: 'Free help getting ready for the move from Infants and Toddlers to school services, in English or Spanish.',
  statusStrong: 'Coming in early 2027.',
  statusRest: 'We are not enrolling families yet. Leave your name below and we will contact you when it opens.',
  whoTitle: 'Who it is for',
  who: [
    'Your child is in Montgomery County Infants and Toddlers (has an IFSP)',
    'Your child will be between 2 and a half and 3 and a half during the program',
    'English and Spanish speaking families are welcome',
  ],
  getTitle: 'What you get (free)',
  get: [
    "Your child's IFSP explained in plain language, in English or Spanish",
    "A timeline with your child's real dates, so nothing sneaks up on you",
    'A simple way to keep notes on how your child is doing',
    'A certified special education advocate to help you get ready for your first school meeting (the IEP meeting), and to come with you if you want',
    'A thank you payment for your time at each check in',
  ],
  howTitle: 'How it works',
  how: [
    'You reach out to us. Nobody shares your name with us. Only you decide.',
    'We talk and answer your questions. You decide if you want to join.',
    "For about 6 months around your child's third birthday, you use the free tool and meet with your advocate before the school meeting.",
    'You can stop at any time and ask us to delete your information.',
  ],
  formTitle: 'Tell me when it opens',
  formIntro: 'We will only use it to contact you about this program.',
  firstName: 'First name',
  contact: 'Email or phone number',
  language: 'Language you prefer',
  langEn: 'English',
  langEs: 'Español',
  month: 'Month your child turns 3 (optional)',
  monthNone: 'Choose a month',
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  submit: 'Send',
  submitting: 'Sending...',
  done: 'Thank you. We will contact you when the program opens.',
  error: 'Something went wrong and we did not get this. Please email rob@slingshotiep.com or call or text (301) 456-5187.',
  tryTitle: 'Want to start now?',
  tryBody: 'The free IFSP tool works today. Create a free account with your email to see your child\'s timeline. You can switch the tool to Spanish after you sign in.',
  tryButton: 'Try the free IFSP tool',
  privacyTitle: 'Your privacy',
  privacy: [
    'You upload your own papers. We never ask the county or school for your records.',
    'We never ask about immigration status or for a Social Security number.',
    'Your information is never sold or used for advertising.',
    'You can ask us to delete your information at any time.',
  ],
  aboutTitle: 'Who is behind this',
  about: "Slingshot IEP is run by Rob Martin, a certified special education advocate and a Montgomery County parent of a child with autism.",
  questions: 'Questions?',
  spanish: 'Se habla español.',
};

const ES: typeof EN = {
  switchLabel: 'In English',
  title: '¿Su hijo o hija va a cumplir 3 años pronto?',
  subtitle: 'Ayuda gratuita para prepararse para el cambio de Infants and Toddlers a los servicios de la escuela, en español o en inglés.',
  statusStrong: 'Comienza a principios de 2027.',
  statusRest: 'Todavía no estamos inscribiendo familias. Deje su nombre abajo y le avisaremos cuando abra.',
  whoTitle: 'Para quién es',
  who: [
    'Su hijo está en Infants and Toddlers del condado de Montgomery (tiene un IFSP)',
    'Su hijo tendrá entre 2 años y medio y 3 años y medio durante el programa',
    'Bienvenidas las familias que hablan español o inglés',
  ],
  getTitle: 'Lo que recibe (gratis)',
  get: [
    'El IFSP de su hijo explicado en palabras sencillas, en español o en inglés',
    'Un calendario con las fechas reales de su hijo, para que nada le tome por sorpresa',
    'Una forma sencilla de anotar cómo va su hijo',
    'Un defensor certificado en educación especial que le ayuda a prepararse para su primera reunión con la escuela (la reunión del IEP) y que puede acompañarle si usted quiere',
    'Un pago de agradecimiento por su tiempo en cada reunión de seguimiento',
  ],
  howTitle: 'Cómo funciona',
  how: [
    'Usted se comunica con nosotros. Nadie nos da su nombre. Solo usted decide.',
    'Hablamos y respondemos sus preguntas. Usted decide si quiere participar.',
    'Durante unos 6 meses alrededor del tercer cumpleaños de su hijo, usa la herramienta gratuita y se reúne con su defensor antes de la reunión con la escuela.',
    'Puede dejar el programa cuando quiera y pedirnos que borremos su información.',
  ],
  formTitle: 'Avíseme cuando abra',
  formIntro: 'Solo lo usaremos para contactarle sobre este programa.',
  firstName: 'Nombre',
  contact: 'Correo electrónico o número de teléfono',
  language: 'Idioma que prefiere',
  langEn: 'English',
  langEs: 'Español',
  month: 'Mes en que su hijo cumple 3 años (opcional)',
  monthNone: 'Elija un mes',
  months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  submit: 'Enviar',
  submitting: 'Enviando...',
  done: 'Gracias. Le avisaremos cuando el programa abra.',
  error: 'Algo salió mal y no recibimos esto. Escriba a rob@slingshotiep.com o llame o mande un texto al (301) 456-5187.',
  tryTitle: '¿Quiere empezar ahora?',
  tryBody: 'La herramienta gratuita del IFSP ya funciona. Cree una cuenta gratis con su correo electrónico para ver el calendario de su hijo. Puede cambiar la herramienta a español después de entrar.',
  tryButton: 'Probar la herramienta gratuita',
  privacyTitle: 'Su privacidad',
  privacy: [
    'Usted sube sus propios documentos. Nunca le pedimos sus expedientes al condado ni a la escuela.',
    'Nunca preguntamos sobre su estatus migratorio ni pedimos un número de Seguro Social.',
    'Nunca vendemos su información ni la usamos para publicidad.',
    'Puede pedirnos que borremos su información en cualquier momento.',
  ],
  aboutTitle: 'Quién está detrás de esto',
  about: 'Slingshot IEP lo dirige Rob Martin, defensor certificado en educación especial y padre de una niña con autismo en el condado de Montgomery.',
  questions: '¿Preguntas?',
  spanish: 'Se habla español.',
};
