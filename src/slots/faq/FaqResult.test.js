import renderer from 'react-test-renderer';
import FaqResult from './FaqResult.jsx';

it('renders correctly', () => {
    const result = {
        "id": 136455,
        "question": "How do I get free passes to the MFA, the Gardner, and other museums?",
        "url": "https://answers.bc.edu/faq/136455",
    };
    const component = renderer.create(
        <FaqResult result={result}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
