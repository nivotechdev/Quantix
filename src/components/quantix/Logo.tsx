import Image from 'next/image';
import { cn } from "@/lib/utils";

export function QuantixLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Image 
        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/AgenciaQuantix/WhatsApp_Image_2026-01-20_at_15.00.50-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBZ2VuY2lhUXVhbnRpeC9XaGF0c0FwcF9JbWFnZV8yMDI2LTAxLTIwX2F0XzE1LjAwLjUwLXJlbW92ZWJnLXByZXZpZXcucG5nIiwiaWF0IjoxNzY5MDEwMDI5LCJleHAiOjIwODQzNzAwMjl9.hD67UWQYJZ7S3_Vov6MIBCcszI2US08l4qYmxsgiAFo" 
        alt="Quantix Logo" 
        width={200} 
        height={200} 
        className="h-[4.3125rem] w-auto md:h-[6.3125rem]"
      />
      <div>
        <div className="text-2xl font-bold font-headline text-white md:text-4xl">Quantix</div>
        <p className="-mt-1 text-xs text-muted-foreground md:text-sm">agência de marketing</p>
      </div>
    </div>
  );
}
