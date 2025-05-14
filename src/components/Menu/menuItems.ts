import {
  Home,
  Users,
  GraduationCap,
  UserCheck,
  BookOpen,
  LayoutGrid,
  Edit3,
  FileText,
  FileCheck,
  Award,
  CheckSquare,
  Calendar,
  MessageCircle,
  Megaphone,
  User,
  Settings2 as Settings,
  LogOut,
} from 'lucide-react';

export let role = "admin";

export const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: Home,
        label: 'Home',
        href: '/',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: UserCheck,
        label: 'Teachers',
        href: '/list/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: GraduationCap,
        label: 'Students',
        href: '/list/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: Users,
        label: 'Parents',
        href: '/list/parents',
        visible: ['admin', 'teacher'],
      },
      {
        icon: BookOpen,
        label: 'Subjects',
        href: '/list/subjects',
        visible: ['admin'],
      },
      {
        icon: LayoutGrid,
        label: 'Classes',
        href: '/list/classes',
        visible: ['admin', 'teacher'],
      },
      {
        icon: Edit3,
        label: 'Lessons',
        href: '/list/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        icon: FileText,
        label: 'Exams',
        href: '/list/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: FileCheck,
        label: 'Assignments',
        href: '/list/assignments',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: Award,
        label: 'Results',
        href: '/list/results',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: CheckSquare,
        label: 'Attendance',
        href: '/list/attendance',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: Calendar,
        label: 'Events',
        href: '/list/events',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: MessageCircle,
        label: 'Messages',
        href: '/list/messages',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: Megaphone,
        label: 'Announcements',
        href: '/list/announcements',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: User,
        label: 'Profile',
        href: '/profile',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: Settings,
        label: 'Settings',
        href: '/settings',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: LogOut,
        label: 'Logout',
        href: '/logout',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
];


// ==========================================
// export const menuItems = [
//     {
//         title: "MENU",
//         items: [
//             {
//                 icon: "/home.png",
//                 label: "Home",
//                 href: "/",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/teacher.png",
//                 label: "Teachers",
//                 href: "/list/teachers",
//                 visible: ["admin", "teacher"],
//             },
//             {
//                 icon: "/student.png",
//                 label: "Students",
//                 href: "/list/students",
//                 visible: ["admin", "teacher"],
//             },
//             {
//                 icon: "/parent.png",
//                 label: "Parents",
//                 href: "/list/parents",
//                 visible: ["admin", "teacher"],
//             },
//             {
//                 icon: "/subject.png",
//                 label: "Subjects",
//                 href: "/list/subjects",
//                 visible: ["admin"],
//             },
//             {
//                 icon: "/class.png",
//                 label: "Classes",
//                 href: "/list/classes",
//                 visible: ["admin", "teacher"],
//             },
//             {
//                 icon: "/lesson.png",
//                 label: "Lessons",
//                 href: "/list/lessons",
//                 visible: ["admin", "teacher"],
//             },
//             {
//                 icon: "/exam.png",
//                 label: "Exams",
//                 href: "/list/exams",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/assignment.png",
//                 label: "Assignments",
//                 href: "/list/assignments",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/result.png",
//                 label: "Results",
//                 href: "/list/results",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/attendance.png",
//                 label: "Attendance",
//                 href: "/list/attendance",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/calendar.png",
//                 label: "Events",
//                 href: "/list/events",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/message.png",
//                 label: "Messages",
//                 href: "/list/messages",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/announcement.png",
//                 label: "Announcements",
//                 href: "/list/announcements",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//         ],
//     },
//     {
//         title: "OTHER",
//         items: [
//             {
//                 icon: "/profile.png",
//                 label: "Profile",
//                 href: "/profile",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/setting.png",
//                 label: "Settings",
//                 href: "/settings",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//             {
//                 icon: "/logout.png",
//                 label: "Logout",
//                 href: "/logout",
//                 visible: ["admin", "teacher", "student", "parent"],
//             },
//         ],
//     },
// ];