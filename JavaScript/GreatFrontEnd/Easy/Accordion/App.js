/* Build an Accordion component that displays a list of vertically stacked sections
that each contain a title and content snippet. Some HTML is provided for you as example contents along with a chevron icon.

Requirements
  - By default, all sections are collapsed and are hidden from view.
  - Clicking on a section title toggles the contents.
    # If the section is collapsed, the section will be expanded and the contents will be displayed.
    # If the section is expanded, the section will be collapsed and the contents will be hidden.
  - The sections are independent of each other.

Example
  - Try out an example of an accordion component.

Notes
The focus of this question is on functionality, not the styling.
Do not spent too much time writing custom CSS.
You may modify the markup(e.g.adding ids, data attributes, replacing some tags, etc) and use client - side rendering instead.
You may want to think about ways to improve the user experience of the application
and implement them (you get bonus credit for doing that during interviews). */

import Accordion from './Accordion';

import './styles.css';

export default function App() {
  return <Accordion />;
}
