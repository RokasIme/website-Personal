import { header } from "../components/header.js";
import { blueTitleColumn } from "../components/blue-title-column.js";
import { singleServices } from "../components/single-services.js";
import { countingNumbers } from "../components/numbers.js";
import { choosePlan } from "../components/choose-your-plan.js";
import { clientFeedbackSection } from "../components/client-feedback-section.js";
import { footer } from "../components/footer.js";


header();
blueTitleColumn('Services', 'Services', './services/index.html');
singleServices();
countingNumbers();
choosePlan();
clientFeedbackSection();
footer();