import renderer from 'react-test-renderer';
import LibrarianResult from './LibrarianResult.jsx';

it('renders correctly', () => {
    const librarian = {
        "id": "261",
        "name": "Steve Runge",
        "email": "steven.runge@bc.edu",
        "subjects": [
            "English Language and Literature"
        ],
        "image": "library.bc.edu/staff-portraits/steve-runge.jpg",
    };

    const component = renderer.create(
        <LibrarianResult librarian={librarian}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
