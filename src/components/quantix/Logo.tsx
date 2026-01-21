import Image from 'next/image';

export function QuantixLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/AgenciaQuantix/WhatsApp_Image_2026-01-20_at_15.00.50-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBZ2VuY2lhUXVhbnRpeC9XaGF0c0FwcF9JbWFnZV8yMDI2LTAxLTIwX2F0XzE1LjAwLjUwLXJlbW92ZWJnLXByZXZpZXcucG5nIiwiaWF0IjoxNzY5MDEwMDI5LCJleHAiOjIwODQzNzAwMjl9.hD67UWQYJZ7S3_Vov6MIBCcszI2US08l4qYmxsgiAFo" 
        alt="Quantix Logo" 
        width={28} 
        height={28} 
        className="text-primary" 
      />
      <div>
        <div className="text-2xl font-bold font-headline text-white">Quantix</div>
        <p className="text-xs text-muted-foreground -mt-1">agência de marketing</p>
      </div>
    </div>
  );
}
