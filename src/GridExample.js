import React from "react"
import { Grid, Button } from "semantic-ui-react"

const GridExample = () => (
    <Grid columns={2} divided centered textAlign="center">
        <Grid.Column textAlign="center">
            <p>Content lives here</p>
            <p>Content lives here</p>
            <p>Content lives here</p>
            <p>Content lives here</p>
        </Grid.Column>
        <Grid.Column textAlign="center">
            <p>Content lives here</p>
            <p>Content lives here</p>
            <p>Content lives here</p>
            <p>Content lives here</p>
        </Grid.Column>
    </Grid>
)

export default GridExample