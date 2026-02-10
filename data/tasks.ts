
import { Task } from '../types';

/**
 * 💡 تعليمات التعديل:
 * 1. الـ ownersIds: حط فيها أكواد الميمبرز اللي شغالين ع التاسك (مثلاً ['JK001', 'JK004']).
 * 2. الحالة (status): يا إما 'running' (شغال) أو 'upcoming' (جاي في الطريق).
 * 3. الفئة (category): اكتب أي اسم فئة (Tech, Content, Media...).
 */

export const tasks: Task[] = [
  
  
  {
    id: 'T1',
    title: 'قصة عالم/صحابي وعلاقته بالعلم (كتابة محتوى)',
    description: 'Storytelling شبابي عن شخصية إسلامية جمعت بين العلم والعبادة',
    status: 'running',
    category: 'Content',
    ownersIds:  ['JK027', 'JK001','JK012','JK011','JK010','JK022','JK030','JK009','JK006'], // أحمد محمود وإياد كريم
    dueText: 'الخميس 12/2',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
  {
    id: 'T5',
    title: 'قصة عالم/صحابي وعلاقته بالعلم (تصميم بوستر)',
    description: 'Storytelling شبابي عن شخصية إسلامية جمعت بين العلم والعبادة',
    status: 'running',
    category: 'Design',
    ownersIds: [ 'JK005' ,'JK026' , 'JK003' , 'JK002' ,'JK028', 'JK015','JK029','JK014','JK025'], // هدير محمد
    dueText: 'الخميس 12/2',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
   {
    id: 'T8',
    title: 'كتابة محتوى) ليه دماغك بطيء في رمضان؟)',
    description: 'كتابة محتوى) ليه دماغك بطيء في رمضان؟) ',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
    {
    id: 'T9',
    title: 'تصميم بوستر) ليه دماغك بطيء في رمضان؟)',
    description: 'تصميم بوستر) ليه دماغك بطيء في رمضان؟) ',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
  
  {
    id: 'T6',
    title: 'فيديو تحفيزي عن فضل العشرة الأواخر وتقديم الرحلة رسمياً',
    description: 'اعلان الاستعداد للعشر الاواخر من رمضان ',
    status: 'running',
    category: 'Video',
    ownersIds: [ 'JK008' ,'JK007' , 'JK017' ,'JK004', 'JK024' ,'JK018','JK013','JK016','JK023','JK019'],
    dueText: 'السبت 14\2',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960749061476372'
  },
   {
    id: 'T7',
    title: 'متتبع عادات العشر الاواخر ',
    description: 'تصميم متتبع عادات للعشر الاواخر من رمضان ',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
  {
    id: 'T10',
    title: 'بداية العشرة الأواخر (كتابة محتوى) ',
    description: 'كتابة بوست عن بداية العشرة الاواخر و الترويج عن المعسكر الخاص بشباب في العشر الاواخر',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
   {
    id: 'T11',
    title: 'بداية العشرة الأواخر (تصميم بوستر) ',
    description: 'تصميم بوستر عن بداية العشرة الاواخر و الترويج عن المعسكر الخاص بشباب في العشر الاواخر',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
    {
    id: 'T12',
    title: ' قوة النية (كتابة محتوى)',
    description: 'شرح تأثير النية وأن البداية الصغيرة كافية ',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
      {
    id: 'T13',
    title: ' قوة النية (تصميم بوستر)',
    description: 'شرح تأثير النية وأن البداية الصغيرة كافية ',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
  {
    id: 'T14',
    title: '  تدبر القران',
    description: 'التركيز على التدبر بدل الكمية',
    status: 'upcoming',
    category: 'Video',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960749061476372'
  },
    {
    id: 'T15',
    title: '  كتابة محتوى) الذكر السهل)',
    description: 'أذكار بسيطة وسريعة خلال اليوم',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
  {
    id: 'T16',
    title: '  تصميم بوستر) الذكر السهل)',
    description: 'أذكار بسيطة وسريعة خلال اليوم',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
    {
    id: 'T17',
    title: '   الدعاء الحقيقي ',
    description: 'الدعاء الشخصي والصادق ',
    status: 'upcoming',
    category: 'Video',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960749061476372'
  },
  {
    id: 'T18',
    title: 'الصدقة وأنواعها (كتابة محتوى) ',
    description: 'شرح الصدقة بأشكالها المختلفة و التشجيع عليها وفضلها ',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
  {
    id: 'T19',
    title: 'الصدقة وأنواعها (تصميم بوستر) ',
    description: 'شرح الصدقة بأشكالها المختلفة و التشجيع عليها وفضلها ',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
  {
    id: 'T20',
    title: '  كتابة محتوى) إصلاح العلاقات (صلة الرحم)) ',
    description: 'خطوة بسيطة لإصلاح علاقة',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
  {
    id: 'T21',
    title: '  تصميم بوستر) إصلاح العلاقات (صلة الرحم)) ',
    description: 'خطوة بسيطة لإصلاح علاقة',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
    {
    id: 'T22',
    title: 'لحظة مع نفس-(حاسب نفسك)  (كتابة محتوى) ',
    description: 'دعوة للتأمل ومراجعة النفس',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
     {
    id: 'T23',
    title: 'لحظة مع نفس-(حاسب نفسك)  (تصميم بوستر) ',
    description: 'دعوة للتأمل ومراجعة النفس',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
       {
    id: 'T24',
    title: 'ليلة القدر',
    description: 'الهدوء والتركيز وعدم الضغط',
    status: 'upcoming',
    category: 'Video',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960749061476372'
  },
      {
    id: 'T25',
    title: ' ماذا بعد رمضان؟',
    description: '',
    status: 'upcoming',
    category: 'Video',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960749061476372'
  },
  {
    id: 'T26',
    title: ' ختام رمضان وتثبيت العادات و التهنئة بالعيد (كتبة محتوى)',
    description: '',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960142200344586'
  },
    {
    id: 'T26',
    title: ' ختام رمضان وتثبيت العادات و التهنئة بالعيد (تصميم بوستر)',
    description: '',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://discordapp.com/channels/1415464121515643123/1466960416713474058'
  },
];
