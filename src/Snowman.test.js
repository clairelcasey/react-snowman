import React from "react";
import { render, fireEvent, queryByAttribute, queryByText } from "@testing-library/react";
import Snowman from "./Snowman";

/* ************************* Smoke Tests ************************************ */





/* ******************** Snapshot Tests  ******************************* */

describe("snapshot tests", function () {
  it("matches snapshot", function () {
    const { container } = render(<Snowman />);
    expect(container).toMatchSnapshot();
  });
});


/* ************************* Functionality Tests *************************** */

describe("end game", function () {
  it("ends game after maxGuesses", function () {
    const maxWrong = 2;
    const { container, debug, queryByText } = render(<Snowman words={['aaa']} maxWrong={maxWrong} />);
    
    let buttonB = container.querySelector('#b');
    fireEvent.click(buttonB);

    let buttonC = container.querySelector('#c');
    fireEvent.click(buttonC);

    debug(container);
    console.log('query selector lost', container.querySelector('#lost'))
    expect(container.querySelector('#lost')).toBeInTheDocument();


  })

})