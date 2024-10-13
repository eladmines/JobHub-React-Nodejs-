import { FaFileAlt, FaUsers, FaBookmark } from 'react-icons/fa';

export const MainTopCardsConstants = [
  {
    title: "Active Apps",
    icon: <FaFileAlt />,
    className: "active-applications-card",
    param: "savedJobsCount"
  },
  {
    title: "Test",
    icon: <FaUsers />,
    className: "next-meetup-card",
    count: 146
  },
  {
    title: "Saved Jobs",
    icon: <FaBookmark />,
    className: "savedjobs-card",
    count: 20
  }
];
