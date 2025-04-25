import { z } from "zod";
const Category = z.enum(["suggestion", "bug", "feature"]);
export const FeedbackFormSchema = z.object({
  userName: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  feedback: z.string().max(100),
  category: Category,
});

export type FeedbackFormType = z.infer<typeof FeedbackFormSchema>;
