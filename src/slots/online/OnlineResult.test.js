import renderer from 'react-test-renderer';
import OnlineResult from './OnlineResult.jsx';

it('renders correctly', () => {
    const hit = {
        "title": "Building the Collection",
        "guideTitle": "English Portal",
        "updated": "2015-03-25T00:37:07",
        "url": "https://libguides.bc.edu/c.php?g=44213&p=280451",
        "guideUrl": "https://libguides.bc.edu/englishportal",
        "fullTitle": "English Portal : Building the Collection",
        "highlight": [
            "BC's Burns Library has a great amount of material relating to diverse aspects of <em>English</em> literature and language.",
            "The predominant emphasis of the collection is on the literature in <em>English</em> of the U.S. and Great Britain.",
            "However, there is substantial collecting in literature in the <em>English</em> language of other nations.",
            "For the discipline of <em>English</em> the Library also purchases in electronic format a growing number of more recently published books.",
            "The Library, however, is continuing to purchase the majority of <em>English</em> monographs in print; this is still the preferred format."
        ],
    };

    const component = renderer.create(
        <OnlineResult item={hit}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
