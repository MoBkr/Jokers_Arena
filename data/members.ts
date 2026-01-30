
import { Member } from '../types';

/**
 * 💡 تعليمات التعديل:
 * 1. لإضافة عضو جديد: انسخ سطر من "الأعضاء" وعدل الـ ID والاسم والـ mentorId.
 * 2. الـ mentorId لازم يكون كود الـ HR المسؤول عن العضو (مثلاً HR001).
 * 3. الأكواد تبدأ بـ JK للأعضاء، HR للمرشدين، LD للقادة.
 */

export const members: Member[] = [
  // --- القادة (Team Leaders) ---
  { id: 'LD000', name: 'محمد بابكر', role: 'Team Leader', points: 5000 },
  { id: 'LD001', name: 'سارة عيد', role: 'Team Leader', points: 4800 },
   { id: 'LD007', name: 'مينا مسعود', role: 'Team Leader', points: 4800 },
  
  // --- المرشدين (HRs) ---
  { id: 'HR001', name: 'سارة متابعة', role: 'HR', points: 3000 },
  { id: 'HR002', name: 'ياسين رقابة', role: 'HR', points: 2900 },

  // --- الأعضاء التابعين لـ سارة (HR001) ---
  { id: 'JK001', name: 'أحمد محمود', role: 'Programmer', points: 1250, mentorId: 'HR001' },
  { id: 'JK002', name: 'سارة علي', role: 'Content Writer', points: 1100, mentorId: 'HR001' },
  { id: 'JK003', name: 'ياسين حسن', role: 'Graphic Designer', points: 1400, mentorId: 'HR001' },
  { id: 'JK004', name: 'ليلى إبراهيم', role: 'Video Maker', points: 950, mentorId: 'HR001' },
  { id: 'JK005', name: 'عمر خالد', role: 'Knowledge Builder', points: 880, mentorId: 'HR001' },

  // --- الأعضاء التابعين لـ ياسين (HR002) ---
  { id: 'JK006', name: 'هدير محمد', role: 'Customer Support', points: 1020, mentorId: 'HR002' },
  { id: 'JK007', name: 'مريم يوسف', role: 'Content Writer', points: 750, mentorId: 'HR002' },
  { id: 'JK008', name: 'إياد كريم', role: 'Programmer', points: 1180, mentorId: 'HR002' },
  { id: 'JK009', name: 'زياد طارق', role: 'Graphic Designer', points: 600, mentorId: 'HR002' },
  { id: 'JK010', name: 'نوران باسم', role: 'Video Maker', points: 1300, mentorId: 'HR002' },
];
