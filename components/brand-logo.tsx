import Image from 'next/image';
export default function BrandLogo({priority=false}:{priority?:boolean}) {
  return <span className="brand-logo brand-logo-gradient"><Image src="/brand/digital-sanjaya-gradient-hd.png" alt="Digital Sanjaya" width={2172} height={724} sizes="(max-width:640px) 210px, 270px" quality={90} priority={priority}/></span>;
}
