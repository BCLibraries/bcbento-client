import renderer from 'react-test-renderer';
import OnlineResult from './OnlineResult.jsx';

it('renders correctly', () => {
    const item = {
        "id": "ALMA-BC51420267560001021",
        "title": "English",
        "date": "2008",
        "type": "Video",
        "creator": null,
        "contributors": [
            "Available Light Productions"
        ],
        "coverImages": [
            {
                "url": "no_cover",
            }
        ],
        "available": null,
        "hathitrustUrl": null,
        "isPhysical": false,
        "isElectronic": true,
        "screenCap": null,
        "mms": "99131628470001021",
        "holdings": [],
    };

    const component = renderer.create(
        <OnlineResult item={item}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
