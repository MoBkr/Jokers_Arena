
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
    title: 'تنظيم Notion للمصادر',
    description: 'تجميع وترتيب كل المصادر والمنح الجديدة في الـ Roadmaps على نوشن.',
    status: 'running',
    category: 'Knowledge',
    ownersIds: ['JK005', 'JK001'], // مربوط بـ عمر خالد وأحمد محمود
    dueText: 'بكرة بالليل',
    discordUrl: 'https://discord.gg/joker-knowledge'
  },
  {
    id: 'T2',
    title: 'فيديوهات Reels المنح',
    description: 'تحضير 3 فيديوهات قصيرة بتشرح إزاي تسجل في منح الـ AI الجديدة.',
    status: 'running',
    category: 'Content',
    ownersIds: ['JK004'], // مربوط بـ ليلى إبراهيم
    dueText: 'يوم الخميس',
    discordUrl: 'https://discord.gg/joker-media'
  },
  {
    id: 'T3',
    title: 'محتوى رمضان المبارك',
    description: 'بدء كتابة بوستات "نصيحة في دقيقة" لشهر رمضان الكريم.',
    status: 'upcoming',
    category: 'Planning',
    ownersIds: [], // مفيش حد شغال عليه لسه
    dueText: 'خلال أسبوع',
    discordUrl: 'https://discord.gg/joker-ramadan'
  },
  {
    id: 'T4',
    title: 'تطوير ويب سايت شباب',
    description: 'إضافة قسم جديد للمدونة وتعديل الـ UI الخاص بصفحة الفريق.',
    status: 'running',
    category: 'Tech',
    ownersIds: ['JK001', 'JK008'], // أحمد محمود وإياد كريم
    dueText: 'الأحد الجاي',
    discordUrl: 'https://discord.gg/joker-dev'
  },
  {
    id: 'T5',
    title: 'تشغيل جروب فيسبوك',
    description: 'خطة لزيادة التفاعل على الجروب من خلال مسابقات أسبوعية.',
    status: 'upcoming',
    category: 'Community',
    ownersIds: ['JK006'], // هدير محمد
    dueText: 'الشهر الجاي',
    discordUrl: 'https://discord.gg/joker-community'
  }
];
