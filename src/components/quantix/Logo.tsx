import Image from 'next/image';
import { cn } from "@/lib/utils";

export function QuantixLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image 
        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/AgenciaQuantix/WhatsApp_Image_2026-01-20_at_15.00.50-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBZ2VuY2lhUXVhbnRpeC9XaGF0c0FwcF9JbWFnZV8yMDI2LTAxLTIwX2F0XzE1LjAwLjUwLXJlbW92ZWJnLXByZXZpZXcucG5nIiwiaWF0IjoxNzY5MDEwMDI5LCJleHAiOjIwODQzNzAwMjl9.hD67UWQYJZ7S3_Vov6MIBCcszI2US08l4qYmxsgiAFo" 
        alt="Quantix Logo" 
        width={160} 
        height={160} 
        className="h-16 w-auto md:h-20"
        priority
      />
      <div className="flex flex-col justify-center -ml-[15px]">
        <span className="text-2xl md:text-3xl font-bold font-headline text-white">Quantix</span>
        <span className="text-[9px] md:text-[10px] font-light tracking-wider text-muted-foreground/80 -mt-1 whitespace-nowrap">
          AGÊNCIA DE MARKETING
        </span>
      </div>
    </div>
  );
}
