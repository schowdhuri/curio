import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import green from "@material-ui/core/colors/green";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import shortId from "shortid";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    checkbox: {
        color: green[600],
        "&$checked": {
            color: green[500]
        }
    },
    checked: {},
    btnDelete: {
        marginTop: "20px"
    },
    cbLabel: {
        marginTop: "20px"
    }
});

const createOption = () => ({
    id: shortId.generate(),
    correct: false,
    value: ""
});

class AddEditQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            options: [ createOption() ],
            hideOptions: false,
            answer: null
        }
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
        this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
        this.handleChangeOption = this.handleChangeOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
    }
    handleChangeAnswer(id) {
        return ev => {
            console.log(ev.target.checked)
            const { options } = this.state;
            const index = options.findIndex(opt => opt.id == id);
            if(index == -1)
                return;
            this.setState({
                options: [
                    ...options.slice(0, index),
                    {
                        ...options[index],
                        correct: ev.target.checked
                    },
                    ...options.slice(index + 1)
                ]
            });
        }
    }
    handleChangeQuestion(ev) {
        this.setState({ text: ev.target.value });
    }
    handleAddOption() {
        this.setState({
            options: [
                ...this.state.options,
                createOption()
            ]
        });
    }
    handleChangeOption(id) {
        return ev => {
            const { options } = this.state;
            const index = options.findIndex(opt => opt.id == id);
            if(index == -1)
                return;
            this.setState({
                options: [
                    ...options.slice(0, index),
                    {
                        ...options[index],
                        value: ev.target.value
                    },
                    ...options.slice(index + 1)
                ]
            });
        }
    }
    handleRemoveOption(id) {
        return ev => {
            const { options } = this.state;
            const index = options.findIndex(opt => opt.id == id);
            if(index == -1)
                return;
            if(options.length > 1) {
                this.setState({
                    options: [
                        ...options.slice(0, index),
                        ...options.slice(index + 1)
                    ]
                });
            } else {
                this.setState({
                    options: [ createOption() ]
                });
            }
        }
    }
    render() {
        const { classes } = this.props;
        const { options } = this.state;
        console.log(classes.checked)
        return (<div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item md={12}>
                    <TextField
                        id="text"
                        label="Question"
                        value={this.state.text}
                        onChange={this.handleChangeQuestion}
                        margin="normal"
                        fullWidth
                        multiline={true}
                    />
                </Grid>
                <Grid item md={12}>
                    {options.map((option, index) => <Grid container key={option.id}>
                        <Grid item md={2}>
                            <FormControlLabel
                                className={classes.cbLabel}
                                control={
                                    <Checkbox
                                        classes={{
                                            root: classes.checkbox,
                                            checked: classes.checked
                                        }}
                                        checked={option.checked}
                                        onChange={this.handleChangeAnswer(option.id)}
                                    />
                                }
                                label="Answer"
                            />
                        </Grid>
                        <Grid item md={9}>
                            <TextField
                                id="text"
                                label={`Option ${index + 1}`}
                                fullWidth
                                margin="normal"
                                value={option.value}
                                onChange={this.handleChangeOption(option.id)}
                            />
                        </Grid>
                        <Grid item md={1}>
                            <IconButton
                                className={classes.btnDelete}
                                onClick={this.handleRemoveOption(option.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>)}
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" size="small" onClick={this.handleAddOption}>
                        <AddIcon />
                        Add Option
                    </Button>
                </Grid>
            </Grid>
        </div>);
    }
}

export default withStyles(styles)(AddEditQuestion);
