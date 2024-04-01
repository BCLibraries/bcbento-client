import renderer from 'react-test-renderer';
import OnlineVideo from './OnlineVideo.jsx';

it('renders correctly', () => {
    const video = {
        "id": "ALMA-BC51493661490001021",
        "title": "Do unto otters",
        "date": "[2012]",
        "type": "Video",
        "creator": null,
        "contributors": [
            "Paul R. Gagne 1956- film producer",
            "Melissa Reilly Ellard film producer",
            "Galen Fott adapter, film director",
            "Jack Sundrud actor",
            "Rusty Young actor",
            "Diana Canova actor",
            "Laurie Keller author",
            "Weston Woods Studios, production company",
            "Scholastic Inc., production company"
        ],
        "coverImages": [
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=9780531208922&issn=/MC.JPG&client=primo",
            },
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=9780531208922&issn=/MC.JPG&client=primo",
            },
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=9780531208922&issn=/MC.JPG&client=primo",
            }
        ],
        "available": null,
        "isPhysical": false,
        "isElectronic": true,
        "linkableId": "ALMA-BC51493661490001021",
        "screenCap": null,
        "format": "1 streaming video file (12 min.) : digital, WMV file, sound, color.",
        "mms": "99137930178901021",
        "availability": null,
    };

    const component = renderer.create(
        <OnlineVideo video={video}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
