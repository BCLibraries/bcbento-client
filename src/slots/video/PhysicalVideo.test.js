import renderer from 'react-test-renderer';
import PhysicalVideo from './PhysicalVideo.jsx';

it('renders correctly', () => {
    const video = {
        "id": "ALMA-BC21386241170001021",
        "title": "Casablanca",
        "date": "1999",
        "type": "Video",
        "creator": null,
        "contributors": [
            "Michael Curtiz 1886-1962",
            "Julius J. Epstein 1909-2000",
            "Philip G Epstein",
            "Howard Koch",
            "Hal B. Wallis 1899-",
            "Humphrey Bogart 1899-1957",
            "Ingrid Bergman 1915-",
            "Paul Henreid",
            "Claude Rains 1889-1967",
            "Conrad Veidt 1893-1943",
            "Sydney Greenstreet",
            "Peter Lorre",
            "Arthur Edeson 1891-1970",
            "Owen Marks",
            "Max Steiner 1888-1971",
            "Murray Burnett",
            "Warner Bros. Pictures (1923-1967)",
            "Turner Entertainment Co",
            "Warner Home Video (Firm)"
        ],
        "coverImages": [
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=0790743132&issn=/MC.JPG&client=primo",
                "__typename": "Link"
            },
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=0790743132&issn=/MC.JPG&client=primo",
                "__typename": "Link"
            },
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=0790743132&issn=/MC.JPG&client=primo",
                "__typename": "Link"
            }
        ],
        "available": true,
        "isPhysical": true,
        "isElectronic": false,
        "linkableId": "ALMA-BC21386241170001021",
        "screenCap": null,
        "format": "1 videodisc (103 min.) : sd., b&w ; 4 3/4 in.",
        "mms": "99125653740001021",
        "availability": {
            "libraryName": "O'Neill",
            "locationName": "3rd Floor Course Reserves -3 Hour Loan",
            "totalCount": 1,
            "callNumber": "PN1997 .C38 1999",
            "otherAvailabilities": false,
            "__typename": "Availability"
        },
        "__typename": "CatalogItem"
    };

    const component = renderer.create(
        <PhysicalVideo video={video}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
