import LoginPage from '@/app/login/page';
import Image from 'next/image';
import Nav from '../Nav/page';

interface Logo {
    name: string;
    icon: string;
    business?: {
        name: string;
    };
    alt: string;
    size: number;
    quality?: number;
}

const Logo = ({ logo }: { logo: Logo }) => {
    return (
        <>
            <a
                href="/"
                title={`View ${logo.icon} logo for ${logo.business?.name}`}
            >
                <Image
                    src="/logo.png"
                    alt={logo.alt}
                    width={logo.size}
                    height={logo.size}
                   
                    priority // Adding priority property for LCP optimization
                    quality={logo.quality ? logo.quality : 50}
                />
            </a>
        </>
    );
}

export default Logo;

