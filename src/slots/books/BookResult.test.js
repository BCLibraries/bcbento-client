import renderer from 'react-test-renderer';
import BookResult from "./BookResult";

it('renders correctly', () => {
    const item = {
        "id": "ALMA-BC21495170660001021",
        "title": "Otters : tool users",
        "date": "[2019]",
        "type": "Book",
        "creator": "Katie Lajiness",
        "contributors": [
            "Big Buddy Books (Firm)"
        ],
        "linkableId": "ALMA-BC21495170660001021",
        "coverImages": [
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=9781532115028&issn=/MC.JPG&client=primo",
            },
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=9781532115028&issn=/MC.JPG&client=primo",
            },
            {
                "url": "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=9781532115028&issn=/MC.JPG&client=primo",
            }
        ],
        "available": true,
        "availability": {
            "libraryName": "Educational Resource Center",
            "locationName": "Stacks",
            "totalCount": 1,
            "callNumber": "QL737.C25 L35 2019",
            "otherAvailabilities": false,
        },
        "holdings": [
            {
                "availabilityStatus": "available",
                "libraryCode": "ERC",
                "libraryDisplay": null,
                "locationDisplay": "Stacks",
                "callNumber": "(QL737.C25 L35 2019 )",
            }
        ],
        "hathitrustUrl": null,
        "linkToFindingAid": null,
        "isPhysical": true,
        "isElectronic": false,
        "screenCap": null,
        "mms": "99137937988901021",
    }

    const component = renderer.create(
        <BookResult item={item} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
