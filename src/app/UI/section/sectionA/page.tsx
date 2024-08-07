import LoginPage from '@/app/login/page';
import Image from 'next/image';

interface Section {
    name: string;
    icon: string;
    business?: {
        name: string;
    };
    alt: string;
    size: number;
    quality?: number;
}

const SectionA = ({ section }: { section: Section }) => {
    return (
        <a
            href="/login"
            title={`View ${section.icon} section for ${section.business?.name}`}
        >
            <Image
                src="/2.png"
                alt={section.alt}
                width={section.size}
                height={section.size}
                style={{ width: 'auto', height: 'auto' }}
                priority={section.size > 100}
                quality={section.quality ? section.quality : 50}
            />
        </a>
    );
}

export default SectionA;
