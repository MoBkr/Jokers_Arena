
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
   { id: 'LD007', name: 'مينا السبعاوي', role: 'Team Leader', points: 4800 },
   { id: 'LD002', name: 'ندى عاصم', role: 'Team Leader', points: 4800 },
  
  // --- المرشدين (HRs) ---
  { id: 'HR001', name: 'منه العطار', role: 'HR', points: 3000 },
  { id: 'HR002', name: 'ملك علاء', role: 'HR', points: 2900 },
  { id: 'HR003', name: 'روضه سيد', role: 'HR', points: 2900 },
  { id: 'HR004', name: 'ايه ايمن', role: 'HR', points: 2900 },
  { id: 'HR005', name: 'ندى محمد', role: 'HR', points: 2900 },
  { id: 'HR006', name: 'هبه قريشي', role: 'HR', points: 2900 },

  // --- الأعضاء التابعين لـ منه (HR001) ---
  { id: 'JK009', name: 'أحمد محجوب', role: 'Content Writer', points: 690, mentorId: 'HR001' },
  { id: 'JK008', name: 'جنه الدسوقي', role: 'Video Maker', points: 1089, mentorId: 'HR001' },
  { id: 'JK005', name: 'سما أحمد', role: 'Graphic Designer', points: 1435, mentorId: 'HR001' },
  { id: 'JK007', name: 'الاء هاني', role: 'Video Maker', points: 1555, mentorId: 'HR001' },
  { id: 'JK030', name: 'روان حسن', role: 'Leader of Content Writeres', points: 0, mentorId: 'HR001' },

  // --- الأعضاء التابعين لـ ملك علاء (HR002) ---
  { id: 'JK017', name: 'مسك محمد', role: 'Video Maker', points: 959, mentorId: 'HR002' },
  { id: 'JK004', name: 'يوأنا عزيز', role: 'Graphic Designer', points: 583, mentorId: 'HR002' },
  { id: 'JK026', name: 'سهر محمد', role: 'Graphic Designer', points: 1081, mentorId: 'HR002' },
  { id: 'JK024', name: 'سدرة ابراهيم', role: 'Leader of Video Makers', points: 1495, mentorId: 'HR002' },
  { id: 'JK015', name: 'شروق شريف', role: 'Video Maker', points: 641, mentorId: 'HR002' },
  
 
  // --- الأعضاء التابعين لـ روضه سيد (HR003) ---
  { id: 'JK022', name: 'أميرة عبدالعزيز', role: 'Content Writer', points: 1535, mentorId: 'HR003' },
  { id: 'JK029', name: 'مينا مايز', role: 'Graphic Designer', points: 730, mentorId: 'HR003' },
  { id: 'JK014', name: 'شيري', role: 'Graphic Designer', points: 740, mentorId: 'HR003' },
  
  


  // --- الأعضاء التابعين لـ ايه ايمن (HR004) ---
  { id: 'JK010', name: 'شهد شراب', role: 'Content Writer', points: 970, mentorId: 'HR004' },
  { id: 'JK025', name: 'منه مدحت', role: 'Graphic Designer', points: 635, mentorId: 'HR004' },
  { id: 'JK018', name: 'مريم محمد', role: 'Video Maker', points: 1580, mentorId: 'HR004' },
  { id: 'JK013', name: 'خالد محمد', role: 'Video Maker', points: 285, mentorId: 'HR004' },
  { id: 'JK016', name: 'زياد سامي', role: 'Video Maker', points: 1105, mentorId: 'HR004' },
  



  // --- الأعضاء التابعين لـ ندى محمد (HR005) ---
  
  { id: 'JK011', name: 'بسنت عصام', role: 'Content Writer', points: 835, mentorId: 'HR005' },
  { id: 'JK012', name: 'رويده ياسر', role: 'Content Writer', points: 491, mentorId: 'HR005' },
  { id: 'JK023', name: 'هنا محمد', role: 'Video Maker', points: 1315, mentorId: 'HR005' },
  { id: 'JK019', name: 'مي مجدي', role: 'Video Maker', points: 853, mentorId: 'HR005' },
  { id: 'JK006', name: 'نوران اشرف', role: 'Content Writer', points: 1347, mentorId: 'HR005' },


  
// --- الأعضاء التابعين لـ هبه قريشي (HR006) ---

  { id: 'JK003', name: 'نور حمدي', role: 'Graphic Designer', points: 1295, mentorId: 'HR006' },
  { id: 'JK001', name: 'هدى صبري', role: 'Content Writer', points: 1120, mentorId: 'HR006' },
  { id: 'JK002', name: 'تغريد سامح', role: 'Graphic Designer', points: 1231, mentorId: 'HR006' },
  { id: 'JK028', name: 'رنا وائل', role: 'Leader of Graphic Designerers', points: 665, mentorId: 'HR006' },
  { id: 'JK027', name: 'نور زكريا', role: 'Content Writer', points: 593, mentorId: 'HR006' },




];
