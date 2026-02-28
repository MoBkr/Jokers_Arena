
import { Task } from '../types';

/**
 * 💡 تعليمات التعديل:
 * 1. الـ ownersIds: حط فيها أكواد الميمبرز اللي شغالين ع التاسك (مثلاً ['JK001', 'JK004']).
 * 2. الحالة (status): يا إما 'running' (شغال) أو 'upcoming' (جاي في الطريق).
 * 3. الفئة (category): اكتب أي اسم فئة (Tech, Content, Media...).
 */

export const tasks: Task[] = [


{
  id: 'T16',
  title: 'تصميم بوستر - الذكر السهل',
  description: 'أذكار بسيطة وسريعة خلال اليوم',
  status: 'completed',
  category: 'Design',
  ownersIds: ['JK005', 'JK026', 'JK003', 'JK002', 'JK028', 'JK014', 'JK025', 'JK017', 'JK004'],
  dueText: 'السبت 28/2',
  discordUrl: 'https://chat.whatsapp.com/JGR3pn2Abro3uO7Ef4lCnT'
},

{
  id: 'T18',
  title: 'كتابة محتوى - الصدقة وأنواعها',
  description: 'شرح الصدقة بأشكالها المختلفة والتشجيع عليها وفضلها',
  status: 'completed',
  category: 'Content',
  ownersIds: ['JK027', 'JK001', 'JK012', 'JK011', 'JK010', 'JK022', 'JK030', 'JK009', 'JK006'],
  dueText: ' 28/2 السبت',
  discordUrl: 'https://chat.whatsapp.com/Jz0SULZUZxc4rGJ7DBmQDU?mode=gi_t'
},

{
  id: 'T19',
  title: 'تصميم بوستر - الصدقة وأنواعها',
  description: 'شرح الصدقة بأشكالها المختلفة والتشجيع عليها وفضلها',
  status: 'running',
  category: 'Design',
  ownersIds: ['JK005', 'JK026', 'JK003', 'JK002', 'JK028', 'JK014', 'JK025', 'JK017', 'JK004'],
  dueText: 'الاثنين 2/3',
  discordUrl: 'https://chat.whatsapp.com/JGR3pn2Abro3uO7Ef4lCnT'
},

{
  id: 'T20',
  title: 'كتابة محتوى - إصلاح العلاقات (صلة الرحم)',
  description: 'خطوة بسيطة لإصلاح علاقة',
  status: 'running',
  category: 'Content',
  ownersIds: ['JK027', 'JK001', 'JK012', 'JK011', 'JK010', 'JK022', 'JK030', 'JK009', 'JK006'],
  dueText: 'الاثنين 2/3',
  discordUrl: 'https://chat.whatsapp.com/Jz0SULZUZxc4rGJ7DBmQDU?mode=gi_t'
},

{
  id: 'T21',
  title: 'تصميم بوستر - إصلاح العلاقات (صلة الرحم)',
  description: 'خطوة بسيطة لإصلاح علاقة',
  status: 'upcoming',
  category: 'Design',
  ownersIds: [],
  dueText: '',
  discordUrl: 'https://chat.whatsapp.com/JGR3pn2Abro3uO7Ef4lCnT'
},

{
  id: 'T22',
  title: 'كتابة محتوى - لحظة مع النفس (حاسب نفسك)',
  description: 'دعوة للتأمل ومراجعة النفس',
  status: 'upcoming',
  category: 'Content',
  ownersIds: [],
  dueText: '',
  discordUrl: 'https://chat.whatsapp.com/Jz0SULZUZxc4rGJ7DBmQDU?mode=gi_t'
},

{
  id: 'T23',
  title: 'تصميم بوستر - لحظة مع النفس (حاسب نفسك)',
  description: 'دعوة للتأمل ومراجعة النفس',
  status: 'upcoming',
  category: 'Design',
  ownersIds: [],
  dueText: '',
  discordUrl: 'https://chat.whatsapp.com/JGR3pn2Abro3uO7Ef4lCnT'
},

      {
    id: 'T25',
    title: ' ماذا بعد رمضان؟',
    description: 'فيديو ختامي عن فضل رمضان والإستمرارية بعده',
    status: 'running',
    category: 'Video',
    ownersIds: ['JK008', 'JK007', 'JK015', 'JK024', 'JK018', 'JK013', 'JK016', 'JK023', 'JK019'],
    dueText: 'الخميس 3/5',
    discordUrl: 'https://chat.whatsapp.com/CfhJLJYaYIv2cu9ZhJjxzu?mode=gi_t'
  },
  {
    id: 'T26',
    title: ' ختام رمضان وتثبيت العادات و التهنئة بالعيد (كتبة محتوى)',
    description: '',
    status: 'upcoming',
    category: 'Content',
    ownersIds: [],
    dueText: '',
    discordUrl: 'https://chat.whatsapp.com/Jz0SULZUZxc4rGJ7DBmQDU?mode=gi_t'
  },
    {
    id: 'T26',
    title: ' ختام رمضان وتثبيت العادات و التهنئة بالعيد (تصميم بوستر)',
    description: '',
    status: 'upcoming',
    category: 'Design',
    ownersIds: [] ,
    dueText: '',
    discordUrl:'https://chat.whatsapp.com/JGR3pn2Abro3uO7Ef4lCnT'
  },
];
