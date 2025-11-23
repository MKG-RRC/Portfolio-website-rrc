import React from "react";
import { Typography } from "../components/UI/Typography/Typography";

export default {
  title: "MKG UI/Typography",
  component: Typography,
};

export const Example = {
  render: () => (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>

      <Typography variant="p">
        This is a paragraph of body text styled by the Typography component.
      </Typography>

      <Typography variant="small">This is small caption text.</Typography>
    </>
  ),
};
