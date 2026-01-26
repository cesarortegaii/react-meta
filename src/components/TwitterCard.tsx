
import { Meta } from './Meta';

export interface TwitterCardProps {
    card: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
}

export function TwitterCard({
    card,
    site,
    creator,
    title,
    description,
    image,
}: TwitterCardProps) {
    return (
        <>
            <Meta name="twitter:card" content={card} />
            {site && <Meta name="twitter:site" content={site} />}
            {creator && <Meta name="twitter:creator" content={creator} />}
            {title && <Meta name="twitter:title" content={title} />}
            {description && <Meta name="twitter:description" content={description} />}
            {image && <Meta name="twitter:image" content={image} />}
        </>
    );
}
