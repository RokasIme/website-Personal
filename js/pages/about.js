import { header } from "../components/header.js";
import { blueTitleColumn } from "../components/blue-title-column.js";
import { aboutFreeText } from "../components/about-free-text.js";
import { aboutMe } from "../components/about-me.js";
import { aboutTools } from "../components/about-tools.js";
import { qualificationsSection } from "../components/qualifications-section.js";
import { clientFeedbackSection } from "../components/client-feedback-section.js";
import { subFooter } from "../components/sub-footer.js";
import { footer } from "../components/footer.js";

header();
blueTitleColumn("About Me", "About Me", "./about/index.html");
aboutMe();
aboutFreeText();
aboutTools();
qualificationsSection();
clientFeedbackSection();
subFooter();
footer();
