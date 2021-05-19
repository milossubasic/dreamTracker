import brainWaves from '../images/home/brain-waves.png';
import carlJung from '../images/home/carl-jung.jpg';
import cow2 from '../images/home/cow-2.jpg';
import dreamYoga from '../images/home/Dream-Yoga.jpg';
import lucidDreaming from '../images/home/lucid-dreaming.jpg';
import sigmundFreud from '../images/home/sigmund-freud.jpg';
import ivanNastovic from '../images/home/snovi-ivan-nastovic.jpg';

const home = {
    headContent: {
        title: 'Welcome to the dreamsApp!',
        subTitle: 'Dreams can tell us A LOT about ourselves - as famously Froyd once put it: "Dreams are a royal highway to unconscious". They can guide us, they can warn us - predict'
    },
    images: [
        {
            id: 'i1',
            photo: brainWaves,
            link: 'https://naturallakeland.com/all-about-brainwaves/',
            altText: 'brain-waves'
        },
        {
            id: 'i2',
            photo: carlJung,
            link: 'https://en.wikipedia.org/wiki/Carl_Jung',
            altText: 'Carl Jung'
        },
        {
            id: 'i3',
            photo: cow2,
            link: 'https://www.biblegateway.com/passage/?search=Genesis%2041&version=CEV',
            altText: 'cow'
        },
        {
            id: 'i4',
            photo: dreamYoga,
            link: 'https://www.amazon.com/Tibetan-Yogas-Dream-Sleep/dp/1559391014/ref=sr_1_1?crid=KTMFAQUARF1N&dchild=1&qid=1616426581',
            altText: 'Dream Yoga'
        },
        {
            id: 'i5',
            photo: lucidDreaming,
            link: 'https://tothestars.media/blogs/news/the-science-behind-lucid-dreaming',
            altText: 'lucid dreaming'
        },
        {
            id: 'i6',
            photo: sigmundFreud,
            link: 'https://en.wikipedia.org/wiki/Sigmund_Freud',
            altText: 'Sigmund Freud'
        },
        {
            id: 'i7',
            photo: ivanNastovic,
            link: 'http://ivannastovic.com/-Biografije/Biografija-Ivan-Nastovic/',
            altText: 'Ivan Nastovic'
        }
    ],
    featureHeading: 'This is the place where you can keep track of your dreams, and it can be valueble tool in your wish to make some sense of them!',
    featuresData: [
        {
            id: 'f1',
            feature: 'Easy way of imputing your dreams'
        },
        {
            id: 'f2',
            feature: 'Easy access to all of your dreams'
        },
        {
            id: 'f3',
            feature: 'Search through your dreams'
        },
        {
            id: 'f4',
            feature: 'Export your dreams'
        },
        {
            id: 'f5',
            feature: 'Import a batch of your older dreams'
        },
    ]
};

export default home;
