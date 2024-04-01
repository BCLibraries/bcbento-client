import renderer from 'react-test-renderer';
import BrowzineBadge from './BrowzineBadge.jsx';

it('renders correctly', () => {
    const libkeyAvailability = {
        "fullTextFile": "https://libkey.io/libraries/431/articles/4749574/full-text-file?utm_source=api_536",
        "contentLocation": "https://libkey.io/libraries/431/articles/4749574/content-location?utm_source=api_536",
        "availableThroughBrowzine": true,
        "browzineWebLink": null,
        "journals": [
            {
                "browzineEnabled": true,
                "browzineWebLink": "https://browzine.com/libraries/431/journals/8166?utm_source=api_536",
            }
        ],
    }
    const component = renderer.create(
        <BrowzineBadge libkeyAvailability={libkeyAvailability} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
