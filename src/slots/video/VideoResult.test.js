import renderer from 'react-test-renderer';
import VideoResult from './VideoResult.jsx';

it('renders correctly', () => {
    const item = {
        "id": "ALMA-BC51425736950001021",
        "title": "Peru Globe Trekker",
        "date": "[2012], c1998",
        "type": "Video",
        "creator": null,
        "contributors": [
            "555 Productions, Inc",
            "Films for the Humanities & Sciences (Firm)",
            "Films Media Group"
        ],
        "coverImages": [
            {
                "url": "no_cover"
            }
        ],
        "available": null,
        "isPhysical": false,
        "isElectronic": true,
        "linkableId": "ALMA-BC51425736950001021",
        "screenCap": "https://fod.infobase.com/image/50468",
        "format": "1 streaming video file (48 min.) : sd., col.",
        "mms": "99134178990001021",
        "availability": null
    };

    const component = renderer.create(
        <VideoResult item={item}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
