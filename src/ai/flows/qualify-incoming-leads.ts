'use server';

/**
 * @fileOverview A lead qualification AI agent.
 *
 * - qualifyIncomingLeads - A function that handles the lead qualification process.
 * - QualifyIncomingLeadsInput - The input type for the qualifyIncomingLeads function.
 * - QualifyIncomingLeadsOutput - The return type for the qualifyIncomingLeads function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QualifyIncomingLeadsInputSchema = z.object({
  message: z.string().describe('The initial message from the lead.'),
  contactInformation: z.string().describe('The contact information of the lead (e.g., email, phone number).'),
});
export type QualifyIncomingLeadsInput = z.infer<typeof QualifyIncomingLeadsInputSchema>;

const QualifyIncomingLeadsOutputSchema = z.object({
  leadScore: z.number().describe('A score indicating the potential value of the lead (e.g., 1-10).'),
  qualificationReason: z.string().describe('The reason for the assigned lead score.'),
});
export type QualifyIncomingLeadsOutput = z.infer<typeof QualifyIncomingLeadsOutputSchema>;

export async function qualifyIncomingLeads(input: QualifyIncomingLeadsInput): Promise<QualifyIncomingLeadsOutput> {
  return qualifyIncomingLeadsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'qualifyIncomingLeadsPrompt',
  input: {schema: QualifyIncomingLeadsInputSchema},
  output: {schema: QualifyIncomingLeadsOutputSchema},
  prompt: `You are an expert marketing analyst specializing in lead qualification for digital marketing agencies.

You will analyze the lead's initial message and contact information to determine their potential value.

Based on the message and contact information, assign a lead score from 1 to 10 (1 being the lowest, 10 being the highest).
Also, provide a reason for the assigned lead score.

Message: {{{message}}}
Contact Information: {{{contactInformation}}}

Consider factors such as:
- Clarity and specificity of the message.
- Indication of budget or potential investment.
- Relevance to the agency's services.
- Professionalism and seriousness of the inquiry.
- Completeness and accuracy of the contact information.

Return the lead score and qualification reason in the specified JSON format.
`,
});

const qualifyIncomingLeadsFlow = ai.defineFlow(
  {
    name: 'qualifyIncomingLeadsFlow',
    inputSchema: QualifyIncomingLeadsInputSchema,
    outputSchema: QualifyIncomingLeadsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
