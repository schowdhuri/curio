import React from "react";
import PropTypes from "prop-types";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import AddEditQuestion from "./AddEditQuestionForm";

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

class Admin extends React.PureComponent {
    componentDidMount() {
        this.props.onInit();
    }
    render() {
        const { classes, match={url: "/admin"}, questions } = this.props;
        return (<div>
                <Grid container spacing={32}>
                    <Route path={`${match.url}/question/add`} component={() => (
                        <Grid item md={12}>
                            <Card>
                                <CardContent>
                                    <Typography component="h2" variant="h5" gutterBottom>
                                        Add a Question
                                    </Typography>
                                    <AddEditQuestion />
                                </CardContent>
                            </Card>
                        </Grid>
                    )} />
                    <Route path={`${match.url}/question/edit/:id`} component={() => (
                        <Grid item md={12}>
                            <Card>
                                <CardContent>
                                    <Typography component="h2" variant="h5" gutterBottom>
                                        Add a Question
                                    </Typography>
                                    <AddEditQuestion />
                                </CardContent>
                            </Card>
                        </Grid>
                    )} />
                    <Route component={() => (
                        <Grid item md={12}>
                            <Card className={classes.question}>
                                <CardContent>
                                    <Typography component="h2" variant="h5" gutterBottom>
                                        Questions
                                    </Typography>
                                    <Table className={classes.table}>
                                        <TableBody>
                                            {questions.map(q => <TableRow key={q._id}>
                                                <TableCell>{q.text}</TableCell>
                                                <TableCell className={classes.axnCell}>
                                                    <IconButton>
                                                        <EditIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>)}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </Grid>
                    )} />
                </Grid>
        </div>);
    }
}

export default withStyles(styles)(Admin);
