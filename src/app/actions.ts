'use server';

import { z } from 'zod';
import { qualifyIncomingLeads } from '@/ai/flows/qualify-incoming-leads';

const leadSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  contact: z.string().min(5, { message: "Por favor, insira um e-mail ou telefone válido." }),
  message: z.string().min(10, { message: "Sua mensagem deve ter pelo menos 10 caracteres." }),
});

export async function submitLeadAction(prevState: any, formData: FormData) {
  const validatedFields = leadSchema.safeParse({
    name: formData.get('name'),
    contact: formData.get('contact'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      type: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os erros no formulário.',
    };
  }

  const { name, contact, message } = validatedFields.data;

  try {
    const result = await qualifyIncomingLeads({
      message: message,
      contactInformation: `Name: ${name}, Contact: ${contact}`,
    });

    console.log('Lead Qualification Result:', result);
    // Here you would typically save the lead and its score to a database.
    // For example: await db.leads.create({ ...validatedFields.data, ...result });

    return {
      type: 'success',
      message: 'Obrigado pelo seu contato! Retornaremos em breve.',
    };
  } catch (error) {
    console.error('AI Qualification Error:', error);
    return {
      type: 'error',
      message: 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.',
    };
  }
}
