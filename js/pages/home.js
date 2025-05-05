import { header } from "../components/header.js";
import { hero } from "../components/hero.js";
import { aboutMe } from "../components/about-me.js";
import { latestPosts } from "../components/latest-posts.js";
import { singleServices } from "../components/single-services.js";
import { featuredProjectsSection } from "../components/featured-projects-section.js";
import { countingNumbers } from "../components/numbers.js";
import { clientFeedbackSection } from "../components/client-feedback-section.js";
import { choosePlan } from "../components/choose-your-plan.js";
import { subFooter } from "../components/sub-footer.js";
import { footer } from "../components/footer.js";

/* header */
header();

// /* hero this is me */
hero();

/* about me */
aboutMe();

/* 2 x 3 row */
singleServices();

/* count animation */
countingNumbers();

/* 6 pics filter */
featuredProjectsSection();

/* Feedback */
clientFeedbackSection();

/* Choose your plan same as My Offered */
choosePlan();

/* Latest post content */
latestPosts();

/* subfooter  */
subFooter();

/* footer */
footer();
