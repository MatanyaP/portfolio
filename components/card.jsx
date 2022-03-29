import Image from './Image';
import { prefix } from '../utils/prefix';

const Card = (props) => {
    const title = props.title;
    const description = props.description;
    const link = props.link;
    const backgroundImage = props.backgroundImage || `${prefix}/images/GitHub-2.png`;
    const hashtags = props.hashtags || [];

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="px-6 py-4 h-32 bg-cover" style={{backgroundImage: `url(${backgroundImage})`}} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4">
                {hashtags.map((hashtag) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" key={hashtag}>
                        #{hashtag}
                    </span>
                ))}
            </div>
            </a>
        </div>
    );
}

export default Card;