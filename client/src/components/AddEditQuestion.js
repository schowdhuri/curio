import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Form from "./AddEditQuestionForm";

const styles = {
    question: {

    },
    text: {
        padding: "16px 0"
    },
    axnCell: {
        width: "100px"
    }
}

class AddEditQuestion extends React.PureComponent {
    componentDidMount() {
        this.props.onInit();
    }
    render() {
        const { classes, navId } = this.props;
        return (<Grid container spacing={32}>
            <Grid item md={12}>
                <Card>
                    <CardContent>
                        <Typography component="h2" variant="h5" gutterBottom>
                            Add a Question
                        </Typography>
                        <Form />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>);
    }
}

export default withStyles(styles)(AddEditQuestion);
