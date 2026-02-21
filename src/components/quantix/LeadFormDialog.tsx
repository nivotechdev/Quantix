'use client';

import { useFormStatus } from 'react-dom';
import { useActionState, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitLeadAction } from '@/app/actions';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

const initialState = {
  type: null,
  message: '',
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Enviar contato
    </Button>
  );
}

export function LeadFormDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(submitLeadAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: 'Sucesso!',
        description: state.message,
      });
      setOpen(false); // Close dialog on success
    } else if (state.type === 'error') {
      toast({
        title: 'Erro no formulário',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-headline">Fale com um especialista</DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" placeholder="Seu nome completo" />
              {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">E-mail ou telefone</Label>
              <Input id="contact" name="contact" placeholder="seu@email.com ou (11) 99999-9999" />
              {state.errors?.contact && <p className="text-sm text-destructive">{state.errors.contact[0]}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Sua mensagem</Label>
              <Textarea id="message" name="message" placeholder="Conte-nos sobre seu desafio ou projeto." />
              {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="secondary">
                    cancelar
                </Button>
            </DialogClose>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
