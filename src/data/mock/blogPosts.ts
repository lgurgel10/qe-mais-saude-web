
import { BlogPost } from "@/types/blogTypes";
import { mentalHealthPosts } from "./mentalHealth";
import { therapyApproachesPosts } from "./therapyApproaches";
import { developmentalIssuesPosts } from "./developmentalIssues";
import { lifestyleWellnessPosts } from "./lifestyleWellness";
import { modernChallengesPosts } from "./modernChallenges";

// Combine all blog posts from different categories
export const blogPosts: BlogPost[] = [
  ...mentalHealthPosts,
  ...therapyApproachesPosts,
  ...developmentalIssuesPosts,
  ...lifestyleWellnessPosts,
  ...modernChallengesPosts,
];
