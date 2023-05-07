import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { CgMoreO } from "react-icons/cg";
import { BiHomeCircle } from "react-icons/bi";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FaTwitter from "@mui/icons-material/Twitter";

export const Days = [];
export const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let i = 1; i <= 31; i++) {
  Days.push(i);
}

const Year = [];

for (let i = 2023; i >= 1903; i--) {
  Year.push(i);
}

export { Year };

export const leftSideIconData = [
  {
    icon: <BiHomeCircle />,
    name: "Home",
  },
  {
    icon: <TagIcon sx={{ fontSize: 40 }} />,
    name: "Explore",
  },
  {
    icon: <NotificationsNoneIcon sx={{ fontSize: 40 }} />,
    name: "Notifications",
  },
  {
    icon: <MailOutlineIcon />,
    name: "Messages",
  },
  {
    icon: <BookmarkBorderIcon sx={{ fontSize: 40 }} />,
    name: "Bookmarks",
  },
  {
    icon: <FaTwitter sx={{ fontSize: 40 }} />,
    name: "Twitter Blue",
  },
  {
    icon: <PermIdentityIcon sx={{ fontSize: 40 }} />,
    name: "Profile",
  },
  {
    icon: <CgMoreO />,
    name: "More",
  },
];

const blueTickIcon =
  "data:image/png;base64,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";

export const userPic = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
 