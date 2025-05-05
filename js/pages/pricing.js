import { header } from "../components/header.js";
import { blueTitleColumn } from "../components/blue-title-column.js";
import { choosePlan } from "../components/choose-your-plan.js";
import { faqSection } from "../components/faq-section.js";
import { footer } from "../components/footer.js";


header();
blueTitleColumn('Pricing Plan', 'Pricing Plan', './pricing/index.html');
choosePlan();
faqSection();
footer();