import Image from 'next/image';
export default function BrandLogo({priority=false}:{priority?:boolean}) {
  return <span className="brand-logo brand-logo-gradient"><Image src="/brand/digital-sanjaya-gradient.jpg" alt="Digital Sanjaya" width={1600} height={612} sizes="(max-width:640px) 210px, 270px" priority={priority}/></span>;
}
