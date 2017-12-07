import React from "react";
import Cell from "../Cell.component";
import renderer from "react-test-renderer";

test("Cell", () => {

    const tree = renderer.
        create(<Cell willData="o"
            cellclickHandler ={() => {}}/>).
        toJSON();
    expect(tree).toMatchSnapshot();

});
